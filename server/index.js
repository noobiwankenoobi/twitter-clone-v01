const express = require('express');
const cors = require('cors');
const monk = require('monk');

const app = express();

// creating db variable, using monk to talk to localhost db called woofer
const db = monk('localhost/woofer');

// creates a "Collection" called "woofs"
const woofs = db.get('woofs');

// Any server request passing through automatically passes through this middleware and gets correct headers
app.use(cors())

// Middleware built into express, any incoming content with content type application/json will be parsed by this
app.use(express.json())

///////////////////
// ROUTES ////////
/////////////////

//////////
// GET // 
//////// Defining what happens on a GET request (request, response)
app.get('/', (req, res) => {
    res.json({
        message: 'Woofer!'
    })
});


// POST to Db function
// Takes in a woof, inserts into "woofs" collection, then takes the createdWoof and send it back as response in json
function postWoofToDB(woof) {
    woofs.insert(woof)
         .then(createdWoof => {
             res.json(createdWoof)
         })
    console.log("woof on backend is =", woof)
    console.log("createdWoof is =", createdWoof)
}

// Checks to make sure woof content is valid
function isProperWoof(woof) {
    // returns a boolean of true if the posted woof object contains a name and content and the name/content aren't empty strings 
    return woof.name && woof.name.toString().trim() !== '' &&
           woof.content && woof.content.toString().trim() !== '';
}



///////////
// POST // 
///////// Defining what happens on a POST request
app.post('/woofs', (req, res) => {
    // putting post request into woof object 
    
    if (isProperWoof(req.body)) {
        const woof = {
            name: req.body.name.toString(),
            content: req.body.content.toString(),
            created: new Date()
        }
        // Put in the database
        postWoofToDB(woof);

    } else {
        res.status(422);
        res.json({
            message: 'Name and Content Required'
        })
    }
})


// Listening on a certain port
app.listen(5000, () => {
    console.log('Listening on http://localhost:5000')
})
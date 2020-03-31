const express = require('express');
const cors = require('cors');

const app = express();

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

// Checks to make sure woof content is valid
function isProperWoof(woof) {
    // returns a boolean of true if the posted woof object contains a name and content and the name/content aren't empty strings 
    return woof.name && woof.name.toString().trim() !== '' &&
           woof.content && woof.content.toString().trim() !== '';
}

function postWoofToDB(woof) {
    console.log("woof on backend is =", woof)
}

///////////
// POST // 
///////// Defining what happens on a POST request
app.post('/woofs', (req, res) => {
    // putting post request into woof object 
    const woof = req.body
    if (isProperWoof(req.body)) {
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
const express = require('express');

const app = express();

/////////////
// ROUTES //
///////////

// Defining what happens on a GET request (request, response)
app.get('/', (req, res) => {
    res.json({
        message: 'Woofer!'
    })

});

// Defining what happens on a POST request
app.post('/woofs', )


// Listening on a certain port
app.listen(5000, () => {
    console.log('Listening on http://localhost:5000')
})
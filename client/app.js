const woofForm = document.querySelector('#woof-form');
const API_URL = 'http://localhost:3000/'


// Event Listener for Form Submission
woofForm.addEventListener('submit', (event) => {
    console.log('Form submission working')
    event.preventDefault()
    // FormData is built in. Pass in reference to the form
    const woofFormData = new FormData(woofForm);
    const name = woofFormData.get('name');
    const content = woofFormData.get('content');
    // woof is an object with name a content being inserted
    const woof = { name, content };

    // Send POST request to API
    fetch(API_URL + 'woofs', {
        method: 'POST',
        body: JSON.stringify(woof),
        headers: {
            'content-type': 'application/json'
        }
    })
        // .then(console.log)
        // .catch(console.error)
        //   .then(response => response.json())
        .then(createdWoof => {
            console.log('createdWoof response from server is=', createdWoof)
        })
    // Console Logs
    console.log("woof being sent by client is =", woof)
})

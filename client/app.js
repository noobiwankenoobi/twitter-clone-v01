const form = document.querySelector('form');

// Event Listener for Form Submission
form.addEventListener('submit', (event) => {
    console.log('Form submission working')
    event.preventDefault()
    // FormData is built in. Pass in reference to the form
    const formData = new FormData (form);
    const name = formData.get('name');
    const content = formData.get('content')
    // woof is an object with name a content being inserted
    const woof = { name, content };

    // Console Logs
    console.log("dog name =", name)
    console.log("content =", content)
    console.log(woof)
})


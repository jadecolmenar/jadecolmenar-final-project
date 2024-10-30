document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple form validation
    if (name === '' || email === '' || message === '') {
        document.getElementById('formResponse').textContent = 'Please fill in all fields.';
        return;
    }

    // Display a message when form is submitted
    document.getElementById('formResponse').textContent = `Thank you, ${name}! Your message has been sent.`;

    // Optionally clear the form
    document.getElementById('contactForm').reset();
});



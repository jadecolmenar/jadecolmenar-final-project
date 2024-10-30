document.addEventListener('DOMContentLoaded', () => {
    // Select form and buttons
    const form = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const clearBtn = document.getElementById('clearBtn');

    // Submit Button: Save form data to local storage
    submitBtn.addEventListener('click', () => {
        const formData = {
            fname: form.querySelector('input[name="name"]').value,
            lname: form.querySelector('input[name="name"]').value,
            email: form.email.value,
            phone: form.phone.value,
            contactMethod: form.querySelector('input[name="contactMethod"]:checked')?.value || '',
            interests: Array.from(form.querySelectorAll('input[name="interests"]:checked')).map(checkbox => checkbox.value),
            stayInTouch: form.querySelector('input[name="yes"]:checked')?.value || 'no',
            findMe: form.findMe.value,
            workInterest: form.workIntrest.value,
            message: form.message.value
        };    

        // Store data in local storage
        localStorage.setItem('formData', JSON.stringify(formData));
        alert('Form data saved to local storage!');
    });

    // Clear Button: Reset form and local storage
    clearBtn.addEventListener('click', () => {
        form.reset();  // Clears form fields
        alert('Form and local storage cleared!');
    });
});
const form = document.getElementById('form');
const email_input = document.getElementById('email-input');
const password_input = document.getElementById('password-input');
const errors_message = document.getElementById('error-message');
const spinner = document.getElementById('spinner');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    let errors = [];
    clearErrors(); // Clear previous error states

    // Validate form inputs
    errors = getLoginFormErrors(email_input.value, password_input.value);

    if (errors.length > 0) {
        errors_message.innerText = errors.join('. ');
        return;
    }

    // Show spinner and disable button
    spinner.style.display = 'block';
    const submitButton = document.querySelector('button[type="submit"]');
    submitButton.disabled = true;

    try {
        // Send POST request to the API
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: email_input.value,
                password: password_input.value,
            }),
        });

        if (response.ok) {
            // Assuming the API returns a JSON response with a success message
            const data = await response.json();
            errors_message.innerText = 'Login successful!';
            errors_message.style.color = 'green';
        } else {
            // Handle login failure
            errors_message.innerText = 'Login failed. Please try again.';
        }
    } catch (error) {
        errors_message.innerText = 'An error occurred. Please try again.';
    } finally {
        // Hide spinner and enable button
        spinner.style.display = 'none';
        submitButton.disabled = false;
    }
});

function getLoginFormErrors(email, password) {
    let errors = [];

    if (email === '' || email == null) {
        errors.push('Email is required');
        email_input.parentElement.classList.add('incorrect');
    } else if (!validateEmail(email)) {
        errors.push('Invalid email format');
        email_input.parentElement.classList.add('incorrect');
    }
    if (password === '' || password == null) {
        errors.push('Password is required');
        password_input.parentElement.classList.add('incorrect');
    } else if (password.length < 6) {
        errors.push('Password must be at least 6 characters');
        password_input.parentElement.classList.add('incorrect');
    }

    return errors;
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function clearErrors() {
    email_input.parentElement.classList.remove('incorrect');
    password_input.parentElement.classList.remove('incorrect');
    errors_message.innerText = '';
}

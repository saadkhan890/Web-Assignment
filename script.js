document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('error-message');
    const successMessage = document.getElementById('success-message');
    const spinner = document.getElementById('loadingSpinner');
    const togglePassword = document.getElementById('togglePassword');

    // Show/Hide Password Functionality
    if (togglePassword) {
        togglePassword.addEventListener('click', () => {
            const type = passwordInput.type === 'password' ? 'text' : 'password';
            passwordInput.type = type;
            togglePassword.textContent = type === 'password' ? '👁️' : '🙈';
        });
    }

    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            clearMessages(); // Clear previous messages

            let errors = validateForm(emailInput.value, passwordInput.value);

            if (errors.length > 0) {
                errorMessage.innerText = errors.join('. ');
                return;
            }

            // Show spinner and disable button
            spinner.hidden = false;
            const submitButton = document.getElementById('submitBtn');
            submitButton.disabled = true;

            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        username: emailInput.value,
                        password: passwordInput.value,
                    }),
                });

                if (response.ok) {
                    // Simulate successful login
                    successMessage.innerText = 'Login successful!';
                    successMessage.style.color = 'green'; // Ensure success message is visible
                } else {
                    // Handle login failure
                    errorMessage.innerText = 'Login failed. Please try again.';
                }
            } catch (error) {
                console.error('An error occurred:', error); // Log error to console
                errorMessage.innerText = 'An error occurred. Please try again.';
            } finally {
                // Hide spinner and enable button
                spinner.hidden = true;
                submitButton.disabled = false;
            }
        });
    }

    function validateForm(email, password) {
        let errors = [];

        if (!email || !validateEmail(email)) {
            errors.push('A valid email is required.');
            emailInput.parentElement.classList.add('incorrect');
        }
        if (!password || password.length < 6) {
            errors.push('Password must be at least 6 characters long.');
            passwordInput.parentElement.classList.add('incorrect');
        }

        return errors;
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    function clearMessages() {
        errorMessage.innerText = '';
        successMessage.innerText = '';
        emailInput.parentElement.classList.remove('incorrect');
        passwordInput.parentElement.classList.remove('incorrect');
    }
});

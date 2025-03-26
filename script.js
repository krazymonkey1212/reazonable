document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signupForm');

    signupForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Collect form data
        const formData = {
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            email: document.getElementById('email').value,
            dob: document.getElementById('dob').value,
            username: document.getElementById('username').value,
            password: document.getElementById('password').value,
            gender: document.querySelector('input[name="gender"]:checked')?.value,
            course: document.getElementById('course').value
        };

        // Basic validation
        if (!validateForm(formData)) {
            return;
        }

        // You can extend this to send data to a server or perform further actions
        console.log('Form submitted:', formData);
        alert('Registration Successful!');
        signupForm.reset();
    });

    function validateForm(data) {
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            alert('Please enter a valid email address.');
            return false;
        }

        // Password strength validation
        if (data.password.length < 8 {
            alert('Password must be at least 8 characters long.');
            return false;
        }

        // Check if all required fields are filled
        for (let key in data) {
            if (data[key] === '' || data[key] === undefined) {
                alert(`Please fill in the ${key.replace(/([A-Z])/g, ' $1').toLowerCase()}.`);
                return false;
            }
        }

        return true;
    }
});


document.getElementById('login-form').addEventListener('submit', async function (e) {
    e.preventDefault(); // Prevent default form submission

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('http://localhost:3000/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();

        if (response.ok) {
            // Show success popup
            document.getElementById('popup-message').textContent = 'Login Successful!';
            document.getElementById('popup-modal').style.display = 'block';
            setTimeout(() => {
                window.location.href = 'FrontPage.html'; // Redirect after successful login
            }, 2000);
        } else {
            alert('Login failed: ' + data.message);
        }
    } catch (error) {
        console.error('Error during login:', error);
        alert('An error occurred during login. Please try again.');
    }
});

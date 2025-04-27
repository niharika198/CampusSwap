
function showPopup(message) {
    const popup = document.getElementById('popup-modal');
    const popupMessage = document.getElementById('popup-message');
    popupMessage.innerText = message;
    popup.style.display = "block"; // Show modal
}

document.getElementById('close-btn').onclick = function() {
    document.getElementById('popup-modal').style.display = "none"; // Close modal
}

window.onclick = function(event) {
    if (event.target == document.getElementById('popup-modal')) {
        document.getElementById('popup-modal').style.display = "none"; // Close modal if clicked outside
    }
}

document.getElementById('signup-form').addEventListener('submit', async function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const termsAccepted = document.getElementById('terms').checked;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    if (!termsAccepted) {
        alert("You must accept the Terms and Privacy Policy!");
        return;
    }

    try {
        const response = await fetch('http://localhost:3000/api/auth/signup', {

            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, password })
        });

        const data = await response.json();
        if (response.ok) {
            showPopup("Signup successful!");
            setTimeout(() => window.location.href = 'login.html', 2000); // Redirect after 2 seconds
        } else {
            alert('Signup failed: ' + data.error);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    }
});

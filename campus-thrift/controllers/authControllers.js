const User = require('../models/User'); // Assuming the User model is set up correctly

// Signup function (Storing Plain Text Password)
async function signupUser(req, res) {
    const { email, password, name } = req.body;

    try {
        // Check if the user already exists
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Create a new user object with the plain-text password
        const newUser = new User({
            name,
            email,
            password, // Store the plain-text password
        });

        // Save the new user to the database
        await newUser.save();
        return res.status(201).json({ message: 'Signup successful' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server error' });
    }
}

// Login function (Comparing Plain-Text Passwords)
async function loginUser(req, res) {
    const { email, password } = req.body;

    try {
        // Find the user by email
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: 'User not found' });
        }

        // Compare the entered password with the plain-text password stored in the database
        if (user.password !== password) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        return res.status(200).json({ message: 'Login successful' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server error' });
    }
}

module.exports = { signupUser, loginUser };

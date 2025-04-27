const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const Item = require('./models/Item'); // Assuming Item model is created for your items

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Setup multer to save images locally in 'uploads' folder
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = './uploads';  // Store images in 'uploads' folder
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir); // Create uploads directory if not exists
    }
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9); // Add unique suffix to filename
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname)); // Store file with unique name
  }
});

const upload = multer({ storage: storage });

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/CampusSwap')
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.log('MongoDB connection error:', err));
// Route to handle image upload and item details
app.post('/upload', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).send('No file uploaded');
    }

    // Save item details to MongoDB
    const newItem = new Item({
      imageUrl: req.file.path, // Save the local file path
      description: req.body.description,
      owner: req.body.owner,
      purpose: req.body.purpose,
      contact: req.body.contact,
      rentDays: req.body.rentDays,
      rentCost: req.body.rentCost,
    });

    // Save item to the database
    await newItem.save();

    res.status(200).json({ message: 'Item uploaded successfully', item: newItem });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error uploading image');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

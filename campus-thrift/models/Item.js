const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  imageUrl: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  owner: {
    type: String,
    required: true,
  },
  purpose: {
    type: String,
    enum: ['Exchange', 'Rent'],
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  rentDays: {
    type: Number,
  },
  rentCost: {
    type: Number,
  },
}, { timestamps: true });

module.exports = mongoose.model('Item', itemSchema);

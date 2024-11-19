const mongoose = require('mongoose');

// Define the shark schema
const sharkSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  species: {
    type: String,
    required: true,
  },
  pingCount: {
    type: Number,
    default: 0,
  },
  location: {
    type: String,
    required: true,
  },
  region: { // New field for geographical filtering
    type: String,
    enum: ['Atlantic', 'Pacific', 'Indian', 'Arctic', 'Southern'],
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

// Create the Shark model
const Shark = mongoose.model('Shark', sharkSchema);
module.exports = Shark;

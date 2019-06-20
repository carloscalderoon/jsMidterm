const mongoose = require('mongoose');

const ArcadeGameSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  rating: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }});

  
module.exports = mongoose.model('ArcadeGame', ArcadeGameSchema);
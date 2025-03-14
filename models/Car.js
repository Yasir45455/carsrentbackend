const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String },
  brand: { type: String },
  image: { type: String },
  shortDescription: { type: String },
});

module.exports = mongoose.model('Car', carSchema);

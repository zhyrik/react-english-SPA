const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  title: String,
  description: String,
  learnLenguage: String,
  nativeLenguage: String,
  stars: Number,
  starsCount: Number,
  learnCount: Number,
  promo: Boolean,
  author: String
});

module.exports = mongoose.model('Category', categorySchema);
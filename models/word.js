const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const wordSchema = new Schema({
  native: String,
  english: String,
  url: String,
  categoryId: String
});

module.exports = mongoose.model('Word', wordSchema);
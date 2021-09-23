const mongoose = require('mongoose');

const { Schema } = mongoose;

const categoriesSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  }
});

const Category = mongoose.model('Category', categoriesSchema);

module.exports = Category;
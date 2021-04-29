const mongoose = require('mongoose');
const newsSchema = mongoose.Schema({
  title: {
    type: String,
    required: True,
  },
  content: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: new Date(),
  },
});

const newsModel = mongoose.model('news', newsSchema);
module.exports = newsModel;

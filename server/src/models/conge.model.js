const mongoose = require('mongoose');
const congeSchema = mongoose.Schema({
  employe: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  finalDate: {
    type: Date,
    required: true,
  },
});

const congeModel = mongoose.model('conge', congeSchema);
module.exports = congeModel;

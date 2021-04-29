const mongoose = require('mongoose');

const reclamationSchema = mongoose.Schema({
  matEmploye: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

const reclamationModel = mongoose.model('reclamations', reclamationSchema);
module.exports = reclamationModel;

const mongoose = require('mongoose');
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      maxlength: 32,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      index: { unique: true },
      match: /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,
    },
    password: {
      type: String,
      required: true,
    },
    userRole: {
      type: Number,
      default: 0,
      required: true,
    },
    phoneNumber: {
      type: Number,
    },
    userImage: {
      type: String,
      default: 'user.png',
    },
    verified: {
      type: String,
      default: false,
    },
    lastName: {
      type: String,
      maxlength: 32,
      required: true,
    },
    CIN: {
      type: Number,
    },
    address: {
      type: String,
    },
    department: {
      type: String,
    },
    history: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

const userModel = mongoose.model('users', userSchema);
module.exports = userModel;

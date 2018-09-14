const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    trim: true,
    index: true
  },
  password: {
    type: String,
    index: true
  }
});

module.exports = mongoose.model('User', UserSchema);
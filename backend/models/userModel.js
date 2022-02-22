const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a text value'],
    }
  }
);

module.exports = mongoose.model('User', userSchema);

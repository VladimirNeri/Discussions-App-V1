const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    profilePicture: {
      data: Buffer, 
      contentType: String
    }
  }
);

module.exports = mongoose.model('User', userSchema);

const mongoose = require('mongoose');
const root = 'localhost:3001/users/images'; 

const chatSchema = mongoose.Schema(
  {
    name: String, 
    picture: {
      type: String, 
      get: v => `$(root)$(v)`
    },
    text: {
      type: String,
      required: [true, 'Please add a text value'],
    },
    votes: Number,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Chat', chatSchema);

// @desc Register new user
// @route Post /api/users
// @access Public
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

const registerUser = asyncHandler(async (req, res) => {
  const { name }  = req.body;
  if(!name) {
    res.status(400);
    throw new Error('No Name');
  }
  //check if user exists
  const userExists = await User.findOne({ name });
  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }
  //Create user
  const user = await User.create({ name });
  if (user) {
    res.status(201).json({
      id: user.id,
      name: user.name,
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});

module.exports = {
  registerUser,
};

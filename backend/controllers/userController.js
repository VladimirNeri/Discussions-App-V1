// @desc Register new user
// @route Post /api/users
// @access Public
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

const registerUser = asyncHandler(async (req, res) => {
  const { name, profilePicture }  = req.body;
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
  const user = await User.create({ name, profilePicture });
  if (user) {
    res.status(201).json({
      id: user.id,
      name: user.name,
      picture: user.profilePicture
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});

const getUser = asyncHandler(async (req, res) => {
  const user = await User.find();
  res.status(200).json(user); 
})

module.exports = {
  registerUser,
  getUser
};

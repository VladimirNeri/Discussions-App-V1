const asyncHandler = require('express-async-handler');
const Chat = require('../models/chatModel');
// Get Chat
// @route GET /api/discussions
const getChat = asyncHandler(async (req, res) => {
  const chats = await Chat.find();
  res.status(200).json(chats);
});

// @desc Create Chat
// @route POST /api/discussions
const createChat = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error('Please add a text field');
  }
  const chats = await Chat.create({
    text: req.body.text,
    name: req.body.name,
    votes: req.body.votes,
    picture: req.body.picture
  });
  res.status(200).json(chats);
});

// @desc Update Chat
// @route Update /api/discussions/:id
const updateChat = asyncHandler(async (req, res) => {
  const chats = await Chat.findById(req.params.id);
  if (!chats) {
    res.status(400);
    throw new Error('Chat not Found');
  }
  const updatedChat = await Chat.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedChat);
});

// @desc Delete Chat
// @route Delete /api/discussions/:id
const deleteChat = asyncHandler(async (req, res) => {
  const chats = await Chat.findById(req.params.id);
  if (!chats) {
    res.status(400);
    throw new Error('Chat not Found');
  }
  await chats.remove();
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getChat,
  createChat,
  updateChat,
  deleteChat,
};

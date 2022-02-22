const express = require('express')
const router = express.Router()
const {getChat, createChat, updateChat, deleteChat} = require('../controllers/chatController')

router.route('/').get(getChat).post(createChat)
router.route('/:id').delete(deleteChat).put(updateChat)

module.exports = router
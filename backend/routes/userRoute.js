const express = require('express')
const router = express.Router()
const { registerUser, getUser } = require('../controllers/userController')


router.post('/', registerUser)
router.get('/', getUser)

module.exports = router
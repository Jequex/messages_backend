const { Router } = require('express')
const messagesController = require('../controllers/messages.js')

const router = Router()

router.get('/', messagesController.getAllMessages)

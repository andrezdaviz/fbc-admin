const express = require('express')
const router = express.Router()
import { index } from '../controllers/events'

router.get('/', index)

module.exports = router

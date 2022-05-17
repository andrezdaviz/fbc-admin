const express = require('express')
const router = express.Router()
import { index, create, store } from '../controllers/events'

router.get('/', index)
router.get('/create', create)
router.post('/store', store)

module.exports = router

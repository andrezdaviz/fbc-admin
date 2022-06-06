const { Router } = require('express')
const router = Router()
import { leagues } from '../controllers/search'

router.get('/', leagues)

module.exports = router

const { Router } = require('express')
const router = Router()
import { teams } from '../controllers/search'

router.get('/', teams)

module.exports = router

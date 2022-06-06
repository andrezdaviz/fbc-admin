const { Router } = require('express')
const router = Router()
import { sports } from '../controllers/search'

router.get('/', sports)

module.exports = router

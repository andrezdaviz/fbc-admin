const { Router } = require('express')
const router = Router()
import { countries } from '../controllers/search'

router.get('/', countries)

module.exports = router

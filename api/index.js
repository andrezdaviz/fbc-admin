const express = require('express')
import './db'
import routes from './routes'
import {
  createCountries,
  createSports,
  createLeague,
  createTeams,
  addOthersCountries,
} from './utils/initSetup'

// Create express instance
const app = express()
createCountries()
createSports()
createLeague()
createTeams()
addOthersCountries()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/', routes)

// Export express app
module.exports = {
  path: '/api',
  handler: app,
}

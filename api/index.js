const express = require('express')

// Create express instance
const app = express()

app.use('/', require('./routes'))

// Export express app
module.exports = module.exports = {
  path: '/api',
  handler: app,
}

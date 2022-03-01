const express = require('express')

// Create express instance
const app = express()

app.get('*', (req, res) => {
  res.send('hola')
})

// Export express app
module.exports = module.exports = {
  path: '/api',
  handler: app,
}

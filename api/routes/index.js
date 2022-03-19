const express = require('express')
const fs = require('fs')
const router = express.Router()

const PATH_ROUTES = __dirname

const removeExtesion = (fileName) => {
  return fileName.split('.').shift()
}

fs.readdirSync(PATH_ROUTES).filter((file) => {
  const name = removeExtesion(file)
  if (name !== 'index') {
    console.log('cargando rutas', name)
    router.use(`/${name}`, require(`./${file}`))
  }
})

module.exports = router

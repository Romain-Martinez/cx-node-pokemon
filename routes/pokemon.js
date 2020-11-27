const express = require('express')
const router = express.Router()
const fs = require('fs')


router.get('/',function (request,response) {
  const file = fs.readFileSync ('../pokedex-20201127.json', 'utf8' )
  console.log(file) 
  response.send(file)
} )








module.exports = router
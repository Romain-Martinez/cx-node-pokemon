const arg = process.argv
const pokemon = require('./routes/pokemon')
const express = require('express')


const app = express()
app.use('/pokemon',pokemon)

const port = 4242


app.listen(port, function() {
    console.log(
      "Server is listening on http://localhost:"+port
    );
  });

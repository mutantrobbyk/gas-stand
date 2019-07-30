const express = require('express');
const massive = require('massive')
const app = express()
require('dotenv').config()

const { SERVER_PORT, CONNECTION_STRING } = process.env
const PORT = SERVER_PORT || 4009

app.use(express.json())

massive(CONNECTION_STRING).then( db =>
    app.set('db',db)
    console.log('Server connected to DB')
).catch(err => (
    console.log('Error connecting to DB',err)
))


app.listen(PORT, () => console.log(`${PORT} slurpees, stat!`))
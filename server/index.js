const express = require('express');
const app = express()
require('dotenv').config()

const { SERVER_PORT } = process.env
const PORT = SERVER_PORT || 4009

app.use(express.json())


app.listen(PORT, () => console.log(`${PORT} slurpees, stat!`))
const express = require('express');
const cors = require('cors');
const controllers = require('./controllers/controllers')
const app = express();

app.use(express.json())

app.use(cors())

app.use(controllers)

app.listen(4000)

console.log('Server on port 4000')
const express = require('express')
require('dotenv').config()

const app = express()

app.use('/api/v1', require('./routes'))

const PORT = process.env.PORT

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))

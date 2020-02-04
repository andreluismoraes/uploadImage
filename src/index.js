const express = require('express')
const route = require('../routes')
const mongoose = require('mongoose')

const app = express()

mongoose.connect(`mongodb+srv://<username>:<password>@server-dshxz.mongodb.net/banco?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)

app.use(express.json())

app.use(route)

app.listen(3000)
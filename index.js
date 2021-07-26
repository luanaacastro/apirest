const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const routes = require('./config/routes')


const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
app.use(routes)




app.listen(21262, () => {
    console.log(`Express started at http://localhost: 192.168.100.1`)
})

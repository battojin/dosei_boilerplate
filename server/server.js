const express = require('express')
require('dotenv').config()

const server = express()
const PORT = process.env.PORT || 8080

server.use('/static', express.static(`${__dirname}/public`))
server.use(express.json({ limit: '100kb' }))
server.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`)
    next()
})

server.get('/', (req, res) => {
    res.send('Express server')
})

server.get('/api/v1/users', (req, res) => {
    res.send('API: user data')
})

server.listen(PORT)

console.log(`Serving at http://localhost:${PORT}`)

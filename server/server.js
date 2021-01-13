const express = require('express')

const server = express()
const port = 8080

server.use(express.json({ limit: '100kb' }))
server.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`)
    next()
})

server.get('/', (req, res) => {
    res.send('Express server')
})

server.listen(port, () => {
    console.log(`Serving at http://localhost:${port}`)
})

const express = require('express')
const config = require('config')
const path = require('path')

// express
const server = express()

server.use('/', express.static(path.join(__dirname, 'dist')))
server.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
})

const PORT = config.get('port') || 3000

server.listen(PORT, console.log(`Экспресс стартанул на ${PORT} порту`))

const express = require('express')
var serveIndex = require('serve-index')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

// Serve URLs like /ftp/thing as public/ftp/thing
// The express.static serves the file contents
// The serveIndex is this module serving the directory
app.use('/ftp', express.static('public/ftp'), serveIndex('public/ftp', { 'icons': true }))

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

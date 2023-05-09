
const path = require('path')

const serveHTML = (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/dist/index.html'))
}

module.exports = serveHTML
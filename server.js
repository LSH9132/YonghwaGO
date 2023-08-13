const express = require('express')
const http = require('http')
// import path from 'node:path'
const path = require('node:path')

const PORT = process.env.PORT || 5000

const app = express();
const server = http.createServer(app)

app.use(express.static(path.join(__dirname, '/public')))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
  console.log("test")
  return;
})

server.listen(PORT, () => console.log(`서버가 ${PORT} 에서 시Tlqkf작되었어요`))
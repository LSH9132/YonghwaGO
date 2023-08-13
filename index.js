const express = require('express')
const socketio = require('socket.io')
const http = require('http')
const cookieParser = require('cookie-parser')

// const cors = require('cors')
const path = require('node:path')

const PORT = process.env.PORT || 3000

const app = express();
const server = http.createServer(app)
const io = socketio(server)

const routes = require('./routers/index.js');

// app.use(cors());
// app.use(router);

app.use(cookieParser());

app.use('/', express.static(path.join(__dirname, '/public')));
app.use('/', routes);


// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
//   console.log("test")
//   return;
// })

// app.use('/notification', notification);

server.listen(PORT, () => console.log(`Server has running at ${PORT} port.`))
const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server);
require('./sockets/socket')

//Sockets messages




const publicPath = path.resolve(__dirname, 'public');

app.use(express.static(publicPath))

server.listen(process.env.PORT, () => {
    console.log('Server running on port ', process.env.PORT)
})
const ws = require('ws');
const express = require('express');
const app = express();

const port = 8392;

app.use('/api', require('./api'));

const httpServer = app.listen(port, err => {
  if (err) {
    throw new Error(err);
  }

  console.log('Listening on http://localhost:' + port);
});

const wsServer = new ws.Server({
  server: httpServer
});

const sockets = [];

wsServer.on('connection', socket => {
  console.log('Received connection!');
  socket.send('Hello, socket!');

  // remove the socket on close
  socket.onclose = () => sockets.splice(sockets.indexOf(socket), 1);

  sockets.push(socket);

  socket.onmessage = event => {
    const message = event.data;
    console.log('received message', message);

    sockets.filter(s => s !== socket).forEach(s => s.send(message));
  };
});

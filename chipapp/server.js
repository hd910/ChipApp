const io = require('socket.io')();

io.on('connection', (client) => {
  client.on('call', () =>{
    console.log('client is sending call message to server');
    client.emit('gameMessage', "Pressed Call");
  });
});

const port = 8000;
io.listen(port);
console.log('listening on port ', port);
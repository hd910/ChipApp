const io = require('socket.io')();

io.on('connection', (client) => {
  client.on('call', () =>{
    io.sockets.emit('gameMessage', "User --- has checked");
  });

  client.on('fold', () =>{
    io.sockets.emit('gameMessage', "User --- has folded");
  });

  client.on('raise', () =>{
    io.sockets.emit('gameMessage', "User --- has raised by x");
  });
});

//Note: client.emit just sends to the socket that started it. io.sockets.emit emits to all, socket.broadcast.emit sends to all except one that started it

const port = 8000;
io.listen(port);
console.log('listening on port ', port);
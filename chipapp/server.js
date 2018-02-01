const io = require('socket.io')();

io.on('connection', (client) => {
  client.on('call', () =>{
    client.emit('gameMessage', "User --- has checked");
  });

  client.on('fold', () =>{
    client.emit('gameMessage', "User --- has folded");
  });

  client.on('raise', () =>{
    client.emit('gameMessage', "User --- has raised by x");
  });
});

const port = 8000;
io.listen(port);
console.log('listening on port ', port);
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

const port = 3001;
app.get('/', (req, res) => {
  res.send('hello world');
});

io.on('connection', function(socket) {
  console.log('a user connected');
});

http.listen(port, function() {
  console.log(`listening on *:${port}`);
});

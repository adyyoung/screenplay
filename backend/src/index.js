var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
const port = 3001;

const store = require('./store/store');
app.get('/', (req, res) => {
  res.send('hello world');
});

const emitState = client => client.emit('state', store.getState());
io.on('connection', socket => {
  console.log('user connected');
  emitState(socket);
  socket.on('action', action => {
    if (action && action.type) {
      store.dispatch(action);
    } else {
      console.log('invalid action');
      console.log(action);
    }

    // io.emit('message', { test: 'everyone' });
  });
});
store.subscribe(() => emitState(io));

// setInterval(() => io.emit('message', new Date().toTimeString()), 1000);

http.listen(port, function() {
  console.log(`listening on *:${port}`);
});

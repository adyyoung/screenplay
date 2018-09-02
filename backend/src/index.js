var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var fs = require('fs');
var ROOT_PATH = process.env.ROOT_PATH || './';
const SCREENPLAY_PATH = ROOT_PATH + 'screenplay';
const DATA_STORE_FILE = SCREENPLAY_PATH + '/store.json';
if (!fs.existsSync(SCREENPLAY_PATH)) fs.mkdirSync(SCREENPLAY_PATH);
const port = 3001;

const store = require('./store/store')(
  JSON.parse(fs.readFileSync(DATA_STORE_FILE))
);

app.get('/', (req, res) => {
  res.send('hello world');
});

const emitState = client => client.emit('state', store.getState());
io.on('connection', socket => {
  console.log('user connected');
  emitState(socket);
  socket.on('action', action => {
    if (action && action.type) {
      console.log('Dispatch: ', action);
      store.dispatch(action);
    } else {
      console.log('invalid action');
      console.log(action);
    }
  });
});
store.subscribe(async () => {
  emitState(io);
  console.log();
  fs.writeFile(
    SCREENPLAY_PATH + '/store.json',
    JSON.stringify(store.getState(), 2, 2),
    err => {
      if (err) return console.log(err);
    }
  );
});

http.listen(port, function() {
  console.log(`listening on *:${port}`);
});

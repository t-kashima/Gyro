var socketIO = require('socket.io'),
express = require('express'),
url = require('url'),
engines = require('consolidate'),
app = express();

app.use(express.static(__dirname + '/public'));
app.engine('html', engines.swig);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.get('/', function(req, res) {
    res.render('index');
});

var port = process.env.PORT || 3000;
var server = app.listen(port, function() {
    console.log('running on port ' + port);
});

var io = socketIO.listen(server);

io.sockets.on('connection', function(socket) {
    console.log('connection');
    socket.on('message', function(data) {
 	    var receivedData = data.value;
 		console.log('a:' + receivedData.a + ', b:' + receivedData.b + ', g:' + receivedData.g);
    });

    socket.on('disconnect', function() {
        console.log('disconnect');
    });
});

// output element
var output = document.querySelector("#output");

// web socket connection
var socket = io.connect('http://192.168.0.3:3000');
socket.on('connect', function(msg) {
    console.log('connect');
});

// received message
socket.on('message', function(msg) {
});

// device orientation
window.addEventListener("deviceorientation", function(e) {
    var a = e.alpha;
    var b = e.beta;
    var g = e.gamma;
    output.textContent = 'a:' + a + ', b:' + b + ', g:' + g;

    // send message
    var sendData = {a: a, b: b, g: g};
    socket.emit('message', {value: data});
}, false);

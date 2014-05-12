var elementAlpha = document.querySelector("#alpha");
var elementBeta = document.querySelector("#beta");
var elementGamma = document.querySelector("#gamma");
var elementTime = document.querySelector("#time");
var elementStatus = document.querySelector("#status");

var prevTime = new Date();

var ws = new WebSocket('ws://192.168.0.3:3000');

window.addEventListener("deviceorientation", function(e) {
    var a = e.alpha;
    var b = e.beta;
    var g = e.gamma;

    var nowTime = new Date();
    
    var diffTime = nowTime - prevTime;
    prevTime = nowTime;

    elementAlpha.textContent = "a: " + a;
    elementBeta.textContent  = "b: " + b;
    elementGamma.textContent = "g: " + g;
    elementTime.textContent  = "t(ms): " + diffTime;

    // ws.send(b);

}, false);

ws.onopen = function(e) {
   console.log('connected'); 
   elementStatus.textContent = 'connected';
}

ws.onmessage = function(e) {
    console.log('received message: ' + e.data);
}

ws.onclose = function(e) {
    console.log('connection released!');
}

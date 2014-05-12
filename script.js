var elementAlpha = document.querySelector("#alpha");
var elementBeta = document.querySelector("#beta");
var elementGamma = document.querySelector("#gamma");
var elementTime = document.querySelector("#time");

var prevTime = new Date();

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

}, false);

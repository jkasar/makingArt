/* -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_
~SETUP~
-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_*/

/* ----------------------------------------------
~global variables~
------------------------------------------------*/
var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
var width = innerWidth / 2;
var height = innerHeight / 2;
var art = ["I", " am", " making", " art." ];
var startPlace = 0;
/* ----------------------------------------------
~functions~
------------------------------------------------*/
function noCanvas() {
	ctx.fillStyle = 'rgb(0,0,0)';
	ctx.fillRect(0,0, canvas.width, canvas.height);
}

function resizeCanvas(){
	canvas.height = innerHeight;
	canvas.width = innerWidth;
}

function clearCanvas(){
	ctx.fillStyle = 'hsl('+ 360*Math.random() +',100%,50%)';
	ctx.strokeStyle = 'hsl('+ 360*Math.random() +',50%,50%)';
	ctx.font = " 100px monospace";
	ctx.lineWidth = "4";
	ctx.fillText(makingArt(), 100, height );
	ctx.strokeText(makingArt(), 102, height + 2); 

	console.log("it worked");
}

function makingArt(){ 
	return 'I am making art.';
}

var x = setInterval( function(){ 
	console.log(makingArt());

}, 3000);

/* ----------------------------------------------
~event listeners~
------------------------------------------------*/
window.addEventListener("resize", resizeCanvas );
window.addEventListener("mousemove", noCanvas );
window.addEventListener('mousedown', clearCanvas);

resizeCanvas();
//clearCanvas(); not sure why this function needed to be commented out, mechanical error here
/* -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_
~DRAW~
-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_*/

function draw(){	
	requestAnimationFrame(draw); //allows for maximum use of the hardwares potential
}
draw();
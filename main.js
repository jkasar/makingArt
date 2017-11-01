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
var art = ["I", " ", "am", " ", "making", " ", "art." ];
var startPlace = 0;



/* ----------------------------------------------
				~functions~
------------------------------------------------*/

function resizeCanvas(){
	canvas.height = innerHeight;
	canvas.width = innerWidth;
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

//window.addEventListener("mousemove", updateMouseXY );

resizeCanvas();

/* -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_
					~DRAW~
-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_*/

function draw(){
	//ctx.fillStyle = 'rgb(255,255,255, 0)';
	//ctx.fillRect(0,0, canvas.width, canvas.height);


	//for (var i = art.length - 1; i >= 0; i--) {
	

	// ctx.fillStyle = "#00FF00";
	// ctx.strokeStyle = "#00FF00";
	// ctx.font = " 100px sans-serif";
	// ctx.lineWidth = ".5";
	// ctx.fillText(art[i], width + 1 , height);
	// ctx.strokeText(art[i], width + 1, height); 
	// };
	
	setInterval( function(){ 

	ctx.fillStyle = "#00FF00";
	ctx.strokeStyle = "#00FF00";
	ctx.font = " 100px serif";
	ctx.lineWidth = ".5";
	ctx.fillText(art[0], 100, 100 );
	ctx.strokeText(art[0], 100, 100); 

 	;}, 200);
 	setInterval( function(){ 

	ctx.fillStyle = "#00FF00";
	ctx.strokeStyle = "#00FF00";
	ctx.font = " 100px serif";
	ctx.lineWidth = ".5";
	ctx.fillText(art[1], 200, 100 );
	ctx.strokeText(art[1], 200, 100); 

 	;}, 400);
 		setInterval( function(){ 

	ctx.fillStyle = "#00FF00";
	ctx.strokeStyle = "#00FF00";
	ctx.font = " 100px serif";
	ctx.lineWidth = ".5";
	ctx.fillText(art[2], 300, 100 );
	ctx.strokeText(art[2], 300, 100); 

 	;}, 600);
 	setInterval( function(){ 

	ctx.fillStyle = "#00FF00";
	ctx.strokeStyle = "#00FF00";
	ctx.font = " 100px serif";
	ctx.lineWidth = ".5";
	ctx.fillText(art[3], 400, 100 );
	ctx.strokeText(art[3], 400, 100); 

 	;}, 800);

	// setInterval( function(){ 
	// 	ctx.fillStyle = 'rgb(0,0,0,.1)';
	// ctx.fillRect(0,0, canvas.width, canvas.height);

 // ;}, 1000);

	
	requestAnimationFrame(draw); //allows for maximum use of the hardwares potential

	//setTimeout(draw, 1000/500); //one way to make animate, better if i wish to control frame rate i.e...choppy effect
}
//setInterval(draw, 1000/60 ); another way to make animate
draw();
//setInterval(draw, 1000/60 ); another way to make animate


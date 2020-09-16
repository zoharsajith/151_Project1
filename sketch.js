
p5.disableFriendlyErrors = false;

var angle = 2.0;
var scalar = 3.5;
var speed = 0.1;
var bool = false;

let s = [];

var c = {
	r:0,
	g:0,
	b:0
};

var m = {
	mX:0,
	mY:0
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);

}


function draw() {

	for(let i = 0; i < s.length; i++){
		s[i].draw();
	}
	
}

class spiral{
	
	draw(){
		if(bool){
		var offsetX = m.mX;
		var offsetY = m.mY;
		c.r = random(0, 255);
		c.g = random(0, 100);
		c.b = random(0, 100);


	    var x = offsetX + cos(angle) * scalar;
		var y = offsetY + sin(angle) * scalar;
		fill(c.r, c.g, c.b);
		noStroke();
		ellipse(x, y, 5, 5);
		angle += speed;
		scalar += speed;
		
		}
	}

}



function keyTyped(){
		if(key === '1'){
			saveCanvas('myCanvas', 'png');
		}
		return;
	}

 function mousePressed(){
 	bool = true;
 	m.mX = mouseX;
	m.mY = mouseY;
	angle = 2.0;
	scalar = 3.5;

	for(let i = 0; i < 10; i++){
		s.push(new spiral());
	}

 	
 }



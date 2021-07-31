var bgImg;
var deerimg,deer;
var snow;

function preload() {

  bgImg = loadImage("snow1.jpg");
  deerImg = loadImage("deer.png");
}

function setup() {
  createCanvas(800,400);
 
  deer = createSprite(400, 200, 50, 50);
  deer.addAnimation (deerImg);


}

function draw() { 
  background(bgImg);
  
  drawSprites();
}

function keyPressed () {
  if (keyCode === 32){
    deer.y= -1;
  }
}

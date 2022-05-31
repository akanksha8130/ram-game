let ground;
let ball;
let pin
var ball_img;
var bg_img;
var pin_img



function preload()
{
  ball_img = loadImage("Ball.png");
  bg_img = loadImage("bg.png");
  pin_img = loadImage("pins.png");
  fall = loadImage("fall.png")
  fall1=loadImage('tilt.png')
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  frameRate(80);

  ball = createSprite(width/2,height-30,30,30);
  ball.addImage(ball_img);
  ball.scale=0.2
  ball.debug=true
  ball.setCollider('circle',0,0,250)
  
  pin1 = createSprite(width/2,90,50,30);
  pin1.addImage(pin_img);
  //pin1.addImage(fall)
  pin1.scale=0.2
  pin1.debug=true
  pin1.setCollider('rectangle',0,0,20,100)

  pin2 = createSprite(width/2-20,90,50,30);
  pin2.addImage(pin_img);
  //pin2.addImage(fall)
  pin2.scale=0.2
  pin2.debug=true
  pin2.setCollider('rectangle',0,0,20,100)



  rectMode(CENTER);
  textSize(15);
}

function draw() 
{
  background(0);
  //image(bg_img,0,0,windowWidth,windowHeight);
 if (keyDown("UP_ARROW")){
ball.velocityY=-10
ball.scale=0.2
 }
 if(pin1.isTouching(ball)){
   pin1.addImage(fall)
   ball.destroy()
 }
 if(pin2.isTouching(ball)){
  pin2.addImage(fall1)
  ball.destroy()
}

  drawSprites();
}



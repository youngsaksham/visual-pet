//Create variables here
var groundback,chat;
var snail;

function preload()
{
  //load images here
  background = loadImage("background.jpg");
  chatImg = loadImage("state-diagram.png");
  angry = loadImage("gary-angry.png");
  eating = loadImage("gary-eating.png");
  happy = loadImage("gary-happy.jpeg");
  hungry = loadImage("gary-hungry.png");
  idle = loadImage("gary-idle.png");
  sad = loadImage("gary-sad.png");
  sleeping = loadImage("gary-sleeping.png");
  soap = loadImage("gary-soap.jpg");
  tired = loadImage("gary-tired.png");
  treat = loadImage("gary-treat.jpeg");
  walk = loadImage("gary-walk.png");
  exercise = loadImage("special-wheel.png");
  reding = loadImage("special-reading.jpg");
  eyeDown = loadImage("special-sockeyes.jpeg");
}

function setup() {
	createCanvas(1000, 900);
  groundback = createSprite(500,450,1000,900);
  groundback.addImage(background);
  groundback.scale = 2;

  chat = createSprite(500,450,1000,900);
  chat.addImage(chatImg);
  chat.scale = 0.8;

  snail = createSprite(500,450,1000,900);
  snail.addImage(idle);
  snail.scale = 0.3;

}


function draw(){

  drawSprites();
  //add styles here

}




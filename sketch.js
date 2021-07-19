var iss;
var issImg
var ship, shipImg, shipUpImg, shipLeftImg, shipRightImg;
var bgImg;
var dockingArea;

function preload(){
  issImg = loadImage('iss.png');
  shipImg = loadImage('spacecraft1.png');
  shipUpImg = loadImage('spacecraft2.png');
  shipRightImg = loadImage('spacecraft3.png');
  shipLeftImg = loadImage('spacecraft4.png');
  bgImg = loadImage('spacebg.jpg');
}

function setup() {
  createCanvas(800,400);
  iss = createSprite(300, 100, 30, 30);
  iss.addImage('ISS',issImg);
  iss.scale = 0.8

  ship = createSprite(50,350, 50, 50);
  ship.addImage('Ship',shipImg)
  ship.scale = 0.3

  dockingArea = createSprite(250,125, 50, 10);
  dockingArea.visible = false;
}

function draw() {
  background(bgImg);  
  drawSprites();

  if(keyDown(LEFT_ARROW)){
    ship.addImage('Ship',shipLeftImg)
    ship.velocityX = -3;
  }

  if(keyWentUp(LEFT_ARROW)){
    ship.addImage('Ship',shipImg)
    ship.velocityX = 0;
  }

  if(keyDown(RIGHT_ARROW)){
    ship.addImage('Ship',shipRightImg)
    ship.velocityX = 3;
  }

  if(keyWentUp(RIGHT_ARROW)){
    ship.addImage('Ship',shipImg)
    ship.velocityX = 0;
  }

  if(keyDown(UP_ARROW)){
    ship.addImage('Ship',shipUpImg)
    ship.velocityY = -3;
  }

  if(keyWentUp(UP_ARROW)){
    ship.addImage('Ship',shipImg)
    ship.velocityY = 0;
  }

  if(keyDown(DOWN_ARROW)){
    ship.addImage('Ship',shipImg)
    ship.velocityY = 3;
  }

  if(keyWentUp(DOWN_ARROW)){
    ship.addImage('Ship',shipImg)
    ship.velocityY = 0;
  }

  if(ship.isTouching(dockingArea)){
    ship.velocityY = 0;
    ship.velocityX = 0;
    ship.x = 251;
    ship.y = 188;
    fill('white')
    textSize(35)
    text('Docking complete',400,200)
  }
  
  console.log(ship.x);
  console.log(ship.y);
}
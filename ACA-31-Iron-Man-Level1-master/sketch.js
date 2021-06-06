
var bg, backgroundImg,iron,ironmanImg;

function preload() {
  backgroundImg = loadImage("images/bg.jpg");
  ironmanImg = loadImage("images/iron.png")
 
}

function setup() {
  createCanvas(1000, 600);
  //background image
  bg = createSprite(580,300);
  bg.addImage(backgroundImg);
  bg.scale = 2;
  bg.velocityY = 5;
  //iron man
  iron = createSprite(200,500);
  iron.addImage(ironmanImg);
  iron.scale = .3;
  //platform
  platform = createSprite(200,600,2000,10)

 
}

function draw() {
  //gravity to ironman
  iron.velocityY = iron.velocityY + 1;
  //ironman on platform
  iron.collide(platform)
  if (keyDown("up")) {
    iron.velocityY = -10;
  }
  if (keyDown("left")) {
    iron.x = iron.x - 5
  }
  if (keyDown("right")) {
    iron.x = iron.x + 5
  }
  iron.velocityY = iron.velocityY + 0.5;
  if (bg.y > 725){
    bg.y = bg.height / 4;
  }  
 
  
    drawSprites();
   
}


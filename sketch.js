var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  movingRect = createSprite(800, 100, 80, 30);

  movingRect.shapeColor = "blue";
  fixedRect.shapeColor = "blue";

  
  //movingRect.velocityY = -5;
  //fixedRect.velocityY = 5;

  movingRect.velocityX = -5;
  fixedRect.velocityX = 5;

}

function draw() {
  background(255,255,255);
  
  //movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;

/*if(movingRect.x-fixedRect.x < fixedRect.width/2+movingRect.width/2 && 
  fixedRect.x-movingRect.x < fixedRect.width/2+movingRect.width/2 && 
  fixedRect.y-movingRect.y < fixedRect.height/2+movingRect.height/2 &&
  movingRect.y-fixedRect.y < fixedRect.height/2+movingRect.height/2){
  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";
} else{
  movingRect.shapeColor = "yellow";
  fixedRect.shapeColor = "yellow";
}*/

if(movingRect.x-fixedRect.x < fixedRect.width/2+movingRect.width/2 && 
  fixedRect.x-movingRect.x < fixedRect.width/2+movingRect.width/2){
  movingRect.velocityX = movingRect.velocityX * (-1);
  fixedRect.velocityX = fixedRect.velocityX * (-1);
  }


  if(fixedRect.y-movingRect.y < fixedRect.height/2+movingRect.height/2 &&
    movingRect.y-fixedRect.y < fixedRect.height/2+movingRect.height/2){
      movingRect.velocityY = movingRect.velocityY * (-1);
      fixedRect.velocityY = fixedRect.velocityY * (-1);
    }
  drawSprites();
}
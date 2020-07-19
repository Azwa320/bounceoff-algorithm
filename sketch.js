var movingRect,fixedRect;


function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(400, 100, 50, 80);
  movingRect=createSprite(400,800,80,30);
fixedRect.shapeColor="green";
movingRect.shapeColor="green";
movingRect.debug=true;
fixedRect.debug=true;
movingRect.velocityY=-5;
fixedRect.velocityY=5;

}

function draw() {
  background(0,0,0);  
  if(fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2
    && movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2
  ){
    movingRect.velocityX=movingRect.velocityX*(-1);
    fixedRect.velocityX=fixedRect.velocityX*(-1);

  }
  if(fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2
    && movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2
  ){
    movingRect.velocityY=movingRect.velocityY*(-1);
    fixedRect.velocityY=fixedRect.velocityY*(-1);

  }
  drawSprites();
}
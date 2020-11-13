var fixedRect, movingRect;
var go1, go2, go3, go4;


function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  go1 = createSprite(100, 500, 60, 30);
  go1.shapeColor = "green";
  go2 = createSprite(200, 500, 60, 30);
  go2.shapeColor = "green";
  go3 = createSprite(400, 500, 60, 30);
  go3.shapeColor = "green";
  go4 = createSprite(600, 500, 60, 30);
  go4.shapeColor = "green";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

if (isTouching(movingRect , go1)){
movingRect.shapeColor = "red";
go1.shapeColor = "red";
}
else {
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
}
   drawSprites();
}

var fixedrect,movingrect;
var rect1,rect2;

function setup() {
  createCanvas(800,400);

  fixedrect = createSprite(400,200,50,20);
  fixedrect.shapeColor = "green";
  movingrect = createSprite(100,100,50,80);
  movingrect.shapeColor = "red";
  rect1 = createSprite(700,100,60,60);
  rect1.shapeColor = "yellow";
  rect1.velocityY = 5;
  rect2 = createSprite(700,300,60,60);
  rect2.shapeColour = "blue";
  rect2.velocityY = -5;
  fixedrect2 = createSprite(100,200,50,20);
  fixedrect2.shapeColor = "green";
  fixedrect3 = createSprite(250,200,50,20);
  fixedrect3.shapeColor = "green";
 
}

function draw() {
  background(255,255,255); 
  
  movingrect.x = World.mouseX;
  movingrect.y = World.mouseY;
  console.log(movingrect.x-fixedrect.x);

  movingrect.shapeColor = "red";

if(istouch(fixedrect,movingrect)){
  fixedrect.shapeColor = "pink";
  movingrect.shapeColor = "pink";
}
else{
  fixedrect.shapeColor = "green";
  
}

if(istouch(fixedrect2,movingrect)){
  fixedrect2.shapeColor = "pink";
  movingrect.shapeColor = "pink";
}
else{
  fixedrect2.shapeColor = "green";
  
}


if(istouch(fixedrect3,movingrect)){
  fixedrect3.shapeColor = "pink";
  movingrect.shapeColor = "pink";
}
else{
  fixedrect3.shapeColor = "green";
  
}

bounce(rect1,rect2);




  drawSprites();
}


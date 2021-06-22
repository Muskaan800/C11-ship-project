
function preload(){
seaImg = loadImage("sea.png");
shipImg1 = loadAnimation("ship-1.png");
}
sea=createSprite(0,0,400,0);
function setup(){
  createCanvas(400,400);
  
}
sea.addImage(seaImg);

// code to reset the background
if(seaImg.x < 0){
  seaImg.x = sea.width/2;
}

function draw() {
  background("blue");
 
}


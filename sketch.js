var bg;
var iss,spacecraft1;


function preload(){
  bg = loadImage("Image/spacebg.jpg");
  iss = loadImage("Image/iss.png")
  spacecraft1 = loadImage("Image/spacecraft1.png")
  spacecraft2 = loadImage("Image/spacecraft2.png")
  spacecraft3 = loadImage("Image/spacecraft3.png")
  spacecraft4 = loadImage("Image/spacecraft4.png")
}




function setup() {
  createCanvas(1500,700);
  Rocket = createSprite(400,200,50,50);
  Rocket.addImage(iss)

  spacecraft = createSprite(400,500,10,10);
  spacecraft.addImage(spacecraft1)
  spacecraft.scale=0.3;
  
  

}

function draw() {
  background(bg);  
  
  if(keyDown("UP_ARROW")){
    spacecraft.velocityY = -2;
    
    spacecraft.addImage(spacecraft2)
  }

  if(keyDown("DOWN_ARROW")){
    spacecraft.velocityY = 2;
  }

  if(keyDown("RIGHT_ARROW")){
    spacecraft.velocityX = 2;
    spacecraft.velocityY = 0;
    spacecraft.addImage(spacecraft4)
  }

  if(keyDown("LEFT_ARROW")){
    spacecraft.velocityX = -2;
    spacecraft.velocityY = 0;
    spacecraft.addImage(spacecraft3)
  }

  if(Rocket.isTouching(spacecraft)){
    stroke(0)
    fill(0)
    textSize(24);
    text("Docking Successful!",500,600);
    
    
  }

  

  drawSprites();
}
var knife,knifean;
var target,targetImg;



function setup() {
    createCanvas(1500, 750);

    knife = createSprite(100,600,30,40)

    target = createSprite(500,300,50,70)

  }
  
  function draw() {
    background("green");
    if(keyDown("left")){
        knife.x = knife.x-20
    }
    if(keyDown("right")){
        knife.x = knife.x+20
    }
    if(keyDown("space")){
        
        knife.x = knife.x    
        knife.velocityY = -10
    }
   
    drawSprites();
  }
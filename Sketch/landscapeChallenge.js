var ballX = 50;
var ballY = 750;
var directionX = 6;
var directionY = -10;

function setup(){
    createCanvas (1000, 1000);
}

function draw(){
    background("#add8e6");
    
    push();
    rect(width, height, -width, -height/4)
    fill (color("#006994"))
    pop();
    
    
     ballX = ballX + directionX;
    ballY = ballY + directionY;
    
 
    
      if(ballY < 0 || ballY > height){
          
        directionY = -directionY;
    }
    
    
    push();
    ellipse (ballX, ballY, 50);
    fill(color("#f0a144"))
    pop();
}
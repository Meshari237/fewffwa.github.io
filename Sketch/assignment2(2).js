var startX;
var startY;
var directionX;
var directionY;
var size;

function setup(){
    
    //canvas setup
    createCanvas(500,500);
    background(100);
    
    //starting point
    startX = width/2;
    startY = height/2;
    
    //movement
    directionX = 9;
    directionY = 1;
}

function draw(){
    size = map(startX, 0, width, 60, width);
    //starting point, add movement
    startX = startX + directionX;
    startY = startY + directionY;
    //bouncing animation
    if(startX > width){
        directionX = -directionX;
    }
    if (startX < 0){
        directionX = -directionX;
    }
     if(startY > height){
        directionY = -directionY;
    }
    if (startY < 0){
        directionY = -directionY;
    }
    //draw ball
    ellipse(startX, startY, size);
    fill (255);
    
}
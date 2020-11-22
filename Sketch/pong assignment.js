var ballX = 50;
var ballY = 50;
var diameter = 50;
var directionX = 6;
var directionY = 5;

var rectX;
var rectY;
var rectW = 100;
var rectH = 25;

var isBlack = false;
var started = false;

function setup(){
    createCanvas(800,800);
}

function draw(){
    if (isBlack == true){
        
    
    background(0);
    }
    
    if (isBlack == false){
        background(100);
    }
    if (mouseIsPressed){
         if (isBlack == false){
            isblack = true;
    }
         if (isBlack == false){
            isblack = true;
    }
    }
    //ball bounce off walls
    ballX = ballX + directionX;
    ballY = ballY + directionY;
    
    if(ballX < 0 || ballX > width){
        directionX = -directionX;
    }
    
      if(ballY < 0 || ballY > height){
          
        directionY = -directionY;
    }
    
    if((ballX > rectX && ballX < rectX +rectW) && (ballY +(diameter/2) >=rectY)){
        
        directionX *= -1;
        directionY *= -1;
    }
    
    ellipse (ballX, ballY, diameter);
    rect(rectX, rectY, rectW, rectH);
    
    if(!started){
        rectX = width/2;
        rectY = height - 100;
        started = true;
    }
    if (started == true){
    rectX = mouseX;
     
}
   diameter++;
    if (diameter > 255){
        diameter --
    }

}
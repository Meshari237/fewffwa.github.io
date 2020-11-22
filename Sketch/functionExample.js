var x = 100;
var y = 100;
var speedX = 5;
var speedY = 6;

function setup(){
    createCanvas(400,400);
    
}

function draw(){
    background(100);
    
    drawBall();
    moveBall();
    bounceBall();
        
    }

function drawBall(){
    //draw ball
    ellipse(x,y,50);
}
function moveBall(){
       //initialize ball speed
    x += speedX;
    y += speedY;
}
function bounceBall(){
        //collision checks
    if(x > 400 || x < 0){
        speedX = -speedX;
        
    }  
    if(y > 400 || y < 0){
        speedY = -speedY;
}
}
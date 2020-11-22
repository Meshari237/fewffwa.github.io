var ballR;
var ballB;
 
function setup(){
    createCanvas(800, 600);
    
    ballR = new Ball(x, x, x, x, x)
    ballB = new Ball(x, x, x, x, x)
}

function draw(){
    background(100);
    
    ballR.drawBall();
    ballB.drawBall();
    ballR.moveBall();
    ballB.moveBall();
    ballR.bounceBall();
    ballB.bounceBall();

}

function Ball(ballX, ballY, speedX, speedY, hueBall){
    
    this.x = ballX;
    this.y = bally;
    this.spX = speedX;
    this.spY =speedY;
    this.col = hueBall;
    
    this.drawBall = function(){
        fill(this.col, 0, 0);
        ellipse(this.x, this.y, 50);
        
    }
    this.moveBall = function(){
        this.x = this.spX
        this.y = this.spY
    }
    this.bounceBall = function(){
        if(this.y < 0 || this.y > 600){
            this.spX = -this.spY
        }
    }
}
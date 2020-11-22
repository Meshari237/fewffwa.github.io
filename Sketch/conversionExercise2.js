function setup(){
    createCanvas(400,400);
    background(100);
}

function draw(){
    
    var ballRed = new Ball(150, x, 255);
    
    ballRed.draw();
}

function Ball(ballX, ballY, hueBall){
    //propterties of ball
    this.x = ballX;
    this.y = ballY;
    this.col = hueBall;
    
    this.draw = function(){
        S
        //methods of ball
        fill(this.col, 0, 0);
        ellipse(this.x, this.y, 100, 100)
        
    }
    
}

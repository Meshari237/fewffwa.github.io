var x = 20;
var y = 20;

function setup(){
    createCanvas(400,400)
}


function draw(){
    background(100);
    ellipse(x, y, 50);
}

function keyPressed(){
    
    if (keyCode == RIGHT_ARROW){
       x=x+10
}
    if (keyCode == LEFT_ARROW){
        x=x-10
}
     if (keyCode == DOWN_ARROW){
       y=y+10
}
    if (keyCode == UP_ARROW){
        y=y-10
}
}
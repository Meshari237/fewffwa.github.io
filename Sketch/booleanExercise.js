var shade = 0;
var state = false;

function setup(){
    createCanvas(400,400);
}

function draw(){
    background(100);
    fill(shade);
    ellipse(width/2, height/2, 50);
    
}
function keyPressed(){
    if(keyCode == UP_ARROW){
        (state == true);
        shade = 255;
    }
    
    if(keyCode == DOWN_ARROW){
        (state == false);
        shade = 0;
    }
    
}
var color;

function setup(){
    
}

function draw(){
    color = map(mouseX, 0, width, 0, 255);
    background(color, 100, 200);
}
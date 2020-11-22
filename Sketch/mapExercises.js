var x;

function setup(){
    createCanvas(400,400)
}

function draw(){
    background(100);
    x = map(mouseX, 0, width, 0, width/2)
    ellipse(x, height/2, 25)
}
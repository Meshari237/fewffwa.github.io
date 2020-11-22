var img1;
var desiredColor;

function preload(){
    img1 = loadImage("Data/a22.jpg")
}

function setup(){
    createCanvas(400,400);
    background(100);
    
    img1.loadPixels()
    
    
}

function draw(){
    //picking random points
    var x = floor (random(width));
    var y = floor(random(height));
    
    //color operations
    var desiredColor = img1.get(x,y);
    //draw ellipses
    noStroke();
    fill(desiredColor);
    ellipse(x,y,50);
}
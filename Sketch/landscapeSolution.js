var x = 0; // x starting pos
var y= 400;// y starting pos
var inc = -1; // incline

function setup(){
    createCanvas(800, 600);
    colorMode(HSB, 360, 200, 100)
}

function draw(){
    background(195, 80, br)
    //draw ocean
    fill(207, 50, 100);
    rect(0, 350, 800, 250)
}
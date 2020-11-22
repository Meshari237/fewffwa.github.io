//line var
var angle1;
var speed1;
var lineSize;
//satellite var
var angle2;
var speed2;
var satSize;

function setup(){
    //initial canvas operations
    createCanvas(500,500);
    
    //declare line variables
    lineSize = 200;
    angle1 = 0;
    speed1 = 1;
    //declare sattelite variables
    satSize = 30;
    angle2 = 0;
    speed2 = 2;
}

function draw(){
    background(0);
    
    push();
    
    //draw line
    angle1 += speed1;
    stroke(255);
    translate(250, 250);
    rotate(radians(angle1));
    line(0, 0, 0, lineSize);
    pop();
    
    push();
    //draw satellites
    angle2 += speed2;
    stroke(255, 0, 0);
    translate(0, lineSize);
    rotate(radians(angle2));
    line(0,0,0, satSize);
    pop();
}
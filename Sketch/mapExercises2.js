var eyeL;
var eyeR;
function setup(){
    createCanvas(500,500);

}
function draw(){
    background(100);
    
    eyeL = map(mouseX,0,width, 20, 80,);
    eyeR = map(mouseX,0,width, 20, 80,);
    //drawing sclera
    fill(255);
    ellipse(50, 250, 80, 150);
    ellipse(150, 250, 80, 150);

//draw pupils
fill(0);
ellipse(eyeL, 250, 25);
ellipse(eyeR+100, 250, 25);
}
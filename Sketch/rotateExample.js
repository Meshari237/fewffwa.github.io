var img1, angle1, speed1;
var img2, angle2, speed2;

function preload(){
    //load images
    img1 = loadImage("Data/cog.png")
    img2 = loadImage("Data/cog.png")
}

function setup(){
    //initial canvas operation
    createCanvas(1000, 500);
    frameRate(60);
    
    //declare variables
    
    angle1 = 0;
    speed1 = 1;
    
    angle2 = 0;
    speed2 = -2;
}

function draw(){
    background(100);
    
    placeImage1();
    placeImage2();
    
}

function placeImage1(){
      push();
    translate(550, 250);
    angle1 += speed1;
    rotate(radians(angle1));
    image(img1, -250, -250, 500, 500);
      pop();
}

function placeImage2(){
    push();
    translate(190,190);
    angle2 += speed2;
    rotate(radians(angle2));
    image(img2, -150, -150, 300, 300)
    pop();
}
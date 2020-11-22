//Click to make the image in more circles, don't click to make it in less
var img1, img2, totalCircles, x, y, desiredColor, c, blue;
function preload(){
    img1 = loadImage ("Data/error.png")
    img2 = loadImage ("Data/a22.jpg")
    img3 = loadImage ("Data/BSOD.png")
}
function setup(){
    createCanvas(400,400);
    background(100);
    
    img1.loadPixels();
    img2.loadPixels();
    img3.loadPixels();
    
    totalCircles = 50;
    y=0;
    c=1;
    blue=color (255, 204, 0);
}

function draw(){
    var circleSize = width/totalCircles;
    
    var currentCircle = 0;
    
    while(currentCircle < totalCircles){
        x = currentCircle * circleSize;
 
    
    var desiredColor1 = getColor1();
    var desiredColor2 = getColor2();
    var desiredColor3 = getColor3();
        switch(c){
            case 1: 
        fill (desiredColor1);
        break;
    
            case 2:
        fill (desiredColor2);
        break;
            
            case 3: 
                fill(desiredColor3);
                break;
    
        }
        if (c > 3){
            c = 1;
        }
    ellipse(x,y,circleSize);
    currentCircle++;
}
    var mouseClicks = 1;
    y = y + circleSize;
    if(mouseIsPressed){
        mouseClicks++
    }
    
    
    if (y > 400){
        totalCircles = mouseClicks * 50;
        c++;
        y = 0;
    }
}
function getColor1(){
    var desiredColor1 = img1.get(floor(x), floor(y));
    return desiredColor1;
    
}
function getColor2(){
    var desiredColor2 = img2.get(floor(x), floor(y));
    return desiredColor2;
    
}

function getColor3(){
    var desiredColor3 = img3.get(floor(x), floor(y));
    return desiredColor3;
    
}
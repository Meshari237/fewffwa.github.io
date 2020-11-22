var img1, img2, totalCircles, x, y, desiredColor, c;
function preload(){
    img1 = loadImage ("Data/error.png")
    img2 = loadImage ("Data/a22.jpg")
}
function setup(){
    createCanvas(400,400);
    background(100);
    
    img1.loadPixels();
    img2.loadPixels();
    
    totalCircles = 50;
    y=0;
    c=1;
    
}

function draw(){
    var circleSize = width/totalCircles;
    
    var currentCircle = 0;
    
    while(currentCircle < totalCircles){
        x = currentCircle * circleSize;
 
    
    var desiredColor1 = getColor1();
    var desiredColor2 = getColor2();
    if(c>0){
        fill (desiredColor1);
        
    }
    if(c<0){
        fill (desiredColor2);
        
    }
    ellipse(x,y,circleSize);
    currentCircle++;
}
    y = y + circleSize;
    
    if (y > 400){
        totalCircles = random(25, 75);
        c = -c;
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
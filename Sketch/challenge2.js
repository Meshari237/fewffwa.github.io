/* CSMA 101
    Introduction to programming
    Fall 2020
    Prof. Theohar
    Jacob Kallos
    Jakeskallos@yahoo.com*/
var triangleWidth = 20
function setup(){
    createCanvas(1000,1000);
background(200);
}

function draw(){
    if (mouseIsPressed){
       //left click for growing triangle
        switch(mouseButton){
        case LEFT:
                triangleWidth++;
    triangle(mouseX-triangleWidth, mouseY, mouseX+triangleWidth, mouseY, mouseX, mouseY+triangleWidth);
        break;
        //right click for shrinking triangle
        case RIGHT:
                      triangleWidth--;
    triangle(mouseX-triangleWidth, mouseY, mouseX+triangleWidth, mouseY, mouseX, mouseY+triangleWidth);
        break;
        //middle click for static size triangle
            case CENTER:
         triangle(mouseX-triangleWidth, mouseY, mouseX+triangleWidth, mouseY, mouseX, mouseY+triangleWidth);
    }
        
    }
}
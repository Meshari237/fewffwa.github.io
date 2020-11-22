/* CSMA 101
    Introduction to programming
    Fall 2020
    Prof. Theohar
    Jacob Kallos
    Jakeskallos@yahoo.com*/
function setup(){
    createCanvas(1000,1000);
background(200);
}

function draw(){
    if (mouseIsPressed){
       //left click for triangle
        switch(mouseButton){
        case LEFT:
    triangle(mouseX-20, mouseY, mouseX+20, mouseY, mouseX, mouseY+20);
        break;
        //right click for square
        case RIGHT:
        rect (mouseX, mouseY, 20);
        break;
        //middle click for weird line brush
            case CENTER:
          line(mouseX, mouseY, mouseX, mouseY+5);
    }
        
    }
}
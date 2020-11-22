function setup(){
    createCanvas(400,400);
    strokeWeight(12);
}
function draw(){
    background(100);
    stroke(255, 0, 0);
    line(mouseX, 0, mouseX, height);
    
    stroke(255);
    var mapX = map(mouseX, 0, width, 0, width/2, true);
    line(mapX, 0, mapX, height);
}
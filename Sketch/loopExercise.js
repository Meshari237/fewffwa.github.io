function setup(){
    createCanvas(400,400);
    background(100);
}

function draw(){
    for(var i = 0; i < width; i+=20){
        for(var j = 0; j < height; j+=20){
        fill (random(255), random(255), random(255));
        rect(i, j, 20);
        }
    }
}
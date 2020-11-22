//RUN WITH A SERVER
var dirt;
var grass;
function preload(){
    dirt = loadImage("Data/dirtText.jpg");
    grass = loadImage("Data/grassText.jpg");
    steve = loadImage("Data/steve.png")
    iron = loadImage("Data/ironText.png")
}

function setup(){
    createCanvas(800,800);
    background(color("#87ceeb"));
}

function draw(){
     image(dirt, 0, 650, width, height/4);
     image(grass, 0, 650, width, height/16)
    image(steve, width/2, 300)
    image(iron, 600, 600, 100, 100)
    image(iron, 600, 500, 100, 100)
    image(iron, 600, 400, 100, 100)
    image(iron, 600, 300, 100, 100)
    image(iron, 600, 200, 100, 100)
    image(iron, 600, 100, 100, 100)
    image(iron, 600, 0, 100, 100)
    fill(color("#FFFF00"))
    rect(200, 100, 100, 100)
}


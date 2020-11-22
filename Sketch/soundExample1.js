var readyToGo;
var Sound;
var fft;
var y;
var x;

function preload(){
    sound = loadSound("Data/MK.mp3")
}

function setup(){
    createCanvas(1000, 500);
    fft = new p5.FFT();
    
}

function draw(){
    background(100);
    if (readyToGo){
        stroke(255);
        var spectrum = fft.analyze();
        for (var i=0; i<spectrum.length; i++){
        x = map(i,0,spectrum.length,0,width+500);
            fill(255);
            ellipse(x, - spectrum[i]+300, 2, 2);
        }
    }
}
function mousePressed(){
    sound.play();
    readyToGo = true;
}

function keyPressed(){
    if(key == p){
        sound.pause
    }
}
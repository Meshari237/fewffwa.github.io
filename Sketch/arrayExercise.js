//var array_name = [value1, value2, value3, value4, value5];
/*var fruits = ["apple", "cherry", "orange"];
var sum = [1, 34, 905, 2, 33]*/

var colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

var hues = [360, 35, 55, 90, 210, 255, 270];

var i = 0;

function setup(){
    createCanvas(800,600);
    colorMode(HSB, 360, 100, 100);
}

function draw(){
    
    background(100);
    
    textSize(40);
    
    for (var i = 0; i < colors.length; i++){
        push();
    fill(hues[i], 100, 100);
    translate(0, 100);
    text(colors[i], 250, 300 * i);
        pop();
}
}

/*function mousePressed(){
    i++;
    if(i == colors.length){
        i= 0
    }
    console.log(i);
}*/
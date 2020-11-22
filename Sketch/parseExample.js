var myNumbers = [99, 88, 77, 55, 33, 101, 72, 84];

function setup(){
    createCanvas(400,400);
   //myNumbers.splice(index, number);
    myNumbers.splice(2, 3);
}

function draw(){
    background(100);
}

function mousePressed(){
    print(myNumbers);
}
var favDrink = [];
function setup(){
    createCanvas(500,500);
    background(90);
    favDrink[0] = "Water";
    favDrink[1] = "Lemonade";
    favDrink[2] = "Soda";
    favDrink[3] = "Smoothie";
    favDrink[4] = "Boba";
}

function draw(){

    text("length of favDrink=" +favDrink.length, 10,10);
}
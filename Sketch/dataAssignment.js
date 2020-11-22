var colorTable;
var names = [];
var c = [];
var myRating = [];
var sz = []

var playerX = 0;
var playerY = 0;

function preload(){
    //load csv info
    colorTable = loadTable("Assets/colors.csv");
}
function setup(){
    createCanvas(900,600);
    colorMode(HSB, 360, 100, 100);
    noStroke();
    
    //call each column of csv
    for(var i =0; i<colorTable.getRowCount(); i++){
        
        names[i] = colorTable.getString(i,0);
        c[i] = colorTable.getNum(i,1);        
        myRating[i] = colorTable.getNum(i,2);
        sz[i] = map(myRating[i], 1, 10, 100, 1000)
        
    }
}

function draw(){
    background(255);
    //draw text and visuals
    for(var i = 0; i < colorTable.getRowCount(); i++){
        fill(c[i], 255, 255);
        rect(i * 60, 400, 20, -sz[i]);
        
        fill(0);
        textSize(9);
        text(names[i], i * 60, 400);
        
    }
}



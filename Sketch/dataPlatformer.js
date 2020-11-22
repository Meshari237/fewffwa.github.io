var topGameTable;
var revenueTable;
var names = [];
var totalNo = [];
var whichGraph = false;
var sz = [];
var acceleration;
var velocity;
var mass;
var yValue;
var GRAVITY = 0.3;

var bars = [];

// terrain
var terrainY = 500;

// player
var sprite;

// lever
var lever;
var leverX = 75;
var leverY = terrainY - 150;


function preload(){
    //load csvs

    // load first lever
    lever = createSprite(leverX, leverY, 20, 50);

    topGameTable = loadTable("Assets/bestGames.csv"); 
    revenueTable = loadTable("Assets/industryValueByYear.csv");

    sprite = createSprite(0, terrainY, 50, 50);
    // sprite.setCollider('rectangle', 0, 0, 50, 50);
}

function setup(){
    createCanvas(1000,1000);
    colorMode(HSB,360,100,100);
    noStroke();

    
    // //if the switch is off
    // if (whichGraph == false){
    //     for (var i = 0; i<topGameTable.getRowCount(); i++){
    //         names[i] = topGameTable.getString(i, 0);
    //         totalNo[i] = topGameTable.getNum(i, 1);
    //         sz[i] = -map(totalNo[i], 70, 1000, 1, 1000);
    //     }
    // }
    // //if the switch is on
    // if (whichGraph == true){

    //     for (var i = 0; i<revenueTable.getRowCount(); i++){
    //         names[i] = revenueTable.getString(i,0);
    //         totalNo[i] = revenueTable.getNum(i, 2);
    //         sz[i] = map(totalNo[i], 1, 10, 100, 1000);
    //     }
    // }
}

function drawTerrain() {
    fill(255, 255, 50);
    // rect(0, terrainY, width, height-terrainY);
}

function keyPressed() {
    console.log(keyCode);
}

function draw(){
    background(0);
    drawSprites();

    // draw terrain
    drawTerrain();

    sprite.debug = mouseIsPressed;
    var canMove = true;
    for(var i = 0; i < bars.length; i ++) {
        bars[i].debug = mouseIsPressed;

        if (canMove) {
            canMove = !sprite.collide(bars[i]);
        } else break;
    }

    // controls
    // x handler
    if (keyIsDown(68) && canMove) {
        sprite.velocity.x = 5;
    } else if (keyIsDown(65) && canMove) {
        sprite.velocity.x = -5;
    } else {
        sprite.velocity.x = 0;
    }

    if (sprite.position.y < terrainY && canMove)
        sprite.velocity.y += GRAVITY;
    else sprite.velocity.y = 0;

    if (keyWentDown("W")) {
        sprite.velocity.y = -10;
    } 
    
    if (sprite.collide(lever)){
        whichGraph = true
    }

    // if (sprite.position.y >= terrainY) {
    //     sprite.velocity.y = 0;
    // }

    // y handler
    // if (keyWentDown('W')) {
    //     sprite.velocity.y = -5;
    // }

    // draw graphs

    if (whichGraph == false) {
        for(var i = 0; i < topGameTable.getRowCount(); i++){
            fill(255);
            textSize(9);
            text(topGameTable.getString(i, 0), width/topGameTable.getRowCount()  + i * 120, terrainY)
              var x,y,w,h;
            x = 1000/topGameTable.getRowCount() + i * 120;
            w = 100;
            h = Math.abs(map(topGameTable.getNum(i, 1), 70, 1000, 1, 1000));
            y = terrainY;
            // h = 20;

            var barSprite1 = createSprite(x,y,w,h);
            // barSprite.setCollider('rectangle', 0,0,w,h);
            bars.push(barSprite1);
            barSprite1.immovable = true;
        } 
    } else {
        for(var i = 0; i < revenueTable.getRowCount(); i++){
            fill(255);
            textSize(9);
            text(revenueTable.getString(i, 0), width/revenueTable.getRowCount() + i * 120 - 50, terrainY)
              var x2,y2,w2,h2;
            x2 = 1000/revenueTable.getRowCount() + i * 120;
            w2 = 100;
            h2 = Math.abs(map(revenueTable.getNum(i, 1), 70, 1000, 1, 1000));
            y2 = terrainY;
            // h = 20;

            var barSprite2 = createSprite(x2,y2,w2,h2);
            // barSprite.setCollider('rectangle', 0,0,w,h);
            bars.push(barSprite2);
            barSprite2.immovable = true;
        }
    }
}
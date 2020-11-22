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

// These three arrays store the sprites for the bars.
var topGameTable_bars = [];
var revenueTable_bars = []; 
var visibleBars; // This array just keeps track of which bars are visible.

// terrain
var terrainY = 500;

// player
var sprite;

// lever
var lever;
var leverX = 75;
var leverY = terrainY - 150;
var lever2;
var lever2X = 925;
var platformSprite;

function preload(){
    //load csvs

    // load levers
    lever = createSprite(leverX, leverY, 20, 50);
    lever2 = createSprite(lever2X, leverY, 20, 50);

    //load static platform
    platformSprite = createSprite(leverX, leverY-80, 50, 10);
    platformSprite.immovable = true;

    topGameTable = loadTable("Assets/bestGames.csv", function(success) {
        // This is a function that runs when the csv is successfully loaded
        // We can set up the topGameTable_bars here instead of draw, so we'll have them ready and so we can reuse them.
        for(var i = 0; i < topGameTable.getRowCount(); i++){
            var x,y,w,h;
            x = 1000/topGameTable.getRowCount() + i * 120;
            w = 100;
            h = Math.abs(map(topGameTable.getNum(i, 1), 70, 1000, 1, 1000));
            y = terrainY - h/2;

            var barSprite = createSprite(x,y,w,h);
            barSprite.shapeColor = color(255, 255, 255); // Change color of bar here
            barSprite.immovable = true;
            barSprite.visible = false; // Make them invisible on default
            topGameTable_bars.push(barSprite);
        }
    }); 
    revenueTable = loadTable("Assets/industryValueByYear.csv", function(success) {
        // This is a function that runs when the csv is successfully loaded
        // We can set up the industryValue_bars here instead of draw, so we'll have them ready and so we can reuse them.
        for(var i = 0; i < revenueTable.getRowCount(); i++){
            var x,y,w,h;
            x = 1000/revenueTable.getRowCount() + i * 120;
            w = 100;
            h = Math.abs(map(revenueTable.getNum(i, 1), 70, 1000, 1, 1000));
            y = terrainY - h/2;

            var barSprite = createSprite(x,y,w,h);
            barSprite.shapeColor = color(255, 255, 255); // Change color of bar here
            barSprite.immovable = true;
            barSprite.visible = false; // Make them invisible on default
            revenueTable_bars.push(barSprite);
        }
    });

    sprite = createSprite(0, terrainY, 50, 50);
    // sprite.setCollider('rectangle', 0, 0, 50, 50);
}

function setup(){
    createCanvas(1000,1000);
    colorMode(HSB,360,100,100);
    noStroke();
}

function drawTerrain() {
    fill(30, 255, 50);
    // rect(0, terrainY, width, height-terrainY);
}

function draw(){
    background(0);
    drawSprites();

    // draw terrain
    drawTerrain();

    // draw graphs
    var canMove = true;

     // So now, since we already made the sprites for the bars, we just have to show/hide them based on whichGraph
    if (whichGraph == false) {
        // Make topGameTableBars visible, and the revenueBars invisible
        for(var i = 0; i < topGameTable_bars.length; i++) {
            // Draw our text
            fill(255);
            textSize(15);
            text(topGameTable.getString(i, 0), topGameTable_bars[i].position.x - 60, topGameTable_bars[i].position.y + 100);
            topGameTable_bars[i].visible = true;
            text("Best selling games of all time",400, 250)
        }
        for(var i = 0; i < revenueTable_bars.length; i++) {
            revenueTable_bars[i].visible = false;
        }

        // Handle collision for topGameTableBars
        for(var i = 0; i < topGameTable_bars.length; i ++) {
            if (canMove) {
                canMove = !sprite.collide(topGameTable_bars[i]);
            } else break;
        }
    } else {
        // Inverse
        for(var i = 0; i < revenueTable_bars.length; i++) {
            // Draw our text
            fill(255);
            textSize(15);
            text(revenueTable.getString(i, 0), revenueTable_bars[i].position.x - 60, revenueTable_bars[i].position.y + 100);
            revenueTable_bars[i].visible = true;
             text("Yearly revenue of the game industry",400, 250)
        }
        for(var i = 0; i < topGameTable_bars.length; i++) {
            topGameTable_bars[i].visible = false;
        }

        // Handle collision for revenueTable_bars
        for(var i = 0; i < revenueTable_bars.length; i ++) {
            if (canMove) {
                canMove = !sprite.collide(revenueTable_bars[i]);
            } else break;
        }
    }

    if(canMove && sprite.collide(platformSprite)) {
        canMove = false;
    }

    // Player movement/Collision
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
    else {
        sprite.velocity.y = 0;
        if (keyWentDown("W")) {
            sprite.velocity.y = -8;
        } 
    }
    
    if (sprite.collide(lever)){
        whichGraph = true;
    }
    if (sprite.collide(lever2)){
        whichGraph = false;
    }
}
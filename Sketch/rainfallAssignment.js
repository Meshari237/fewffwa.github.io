///USE WEB SERVER FOR THIS CODE
var bubbles = [];
var snowflake;
function preload(){
    snowflake = loadImage ("Data/snowflake.png");
}
    
function setup(){
    createCanvas(800, 600);
    for (var i = 0; i < 30; i++){
    bubbles[i] = new Bubble(random(width), random(height), random(10,30), random(1,3), random(3,6));
}
}

function draw(){
    background(100);
    
    for (var i = 0; i < bubbles.length; i++){
        bubbles[i].drawBubble();
        bubbles[i].jitterBubble();
        bubbles[i].resetBubble();
    }
}
function Bubble(bubbleX, bubbleY, bubbleSize, speedX, speedY)
{
    //the 'fields' of the Bubble object that we'd like to control in every instance of the object. The "this" keyword is used to declare local variables within this object, and the parameters are passed onto them.
    
    this.x = bubbleX;
    this.y = bubbleY; 
    this.sz = bubbleSize;
    this.spX = speedX;
    this.spY = speedY;
    
    //these are the methods (or, nested functions) of the Bubble object
    
    this.drawBubble = function()
    {
        fill(200,150);
        image(snowflake, this.x, this.y, this.sz, this.sz);
    }
    
    this.jitterBubble = function ()
    {
        this.x += this.spX;
        
        //makes it jitter toward top of canvas
        this.y += this.spY;
    }
    
    this.resetBubble = function()
    {
        if(this.y > height)
        {
            this.y = 0;   
        }
        if(this.x > width)
        {
            this.x = 0;   
        }
    }
}
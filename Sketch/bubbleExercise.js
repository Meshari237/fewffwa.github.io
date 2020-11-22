var bubbles = [];

function setup()
{
    createCanvas(800, 600);
    
    for(var i = 0; i < 20; i++)
        {
            bubbles[i] = new Bubble(random(width), random(height), random(10, 30), random(1, 3), random(3, 6));
        }
}

function draw()
{
    background(100);
    
    for(var i = 0; i < bubbles.length; i++)
        {
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
        ellipse(this.x, this.y, this.sz);
    }
    
    this.jitterBubble = function ()
    {
        this.x += random(-this.spX, this.spX);
        
        //makes it jitter toward top of canvas
        this.y += random(-this.spY, this.spY/2);
    }
    
    this.resetBubble = function()
    {
        if(this.y < 0)
        {
            this.y = height;   
        }
    }
}
 
function mousePressed(){
  for(var i = 0; i < bubbles.length; i++) {
      if (dist(mouseX, mouseY, bubbles[i].x, bubbles[i].y) <= bubbles[i].sz){
      bubbles.splice(i, 1);
      }
  }
}
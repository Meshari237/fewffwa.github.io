var eyeCount = 1;
function setup(){
    createCanvas(800,800);
    background(0);
}

function draw(){
  eyes();
   
}
function eyes(x,y,w){
     //draw sclera
   fill(255);
    ellipse(x,y,w);
    ellipse(x + w,y,w);
//draw pupil
    fill(0);
    ellipse(x,y,w/2);
    ellipse(x + w,y,w/2); 
}

function mousePressed(){
    for (var eyeCount = 1; eyeCount < 11; eyeCount++)
   {
        eyes(random(50,500), random(50,500), random(20,300));
   }
}
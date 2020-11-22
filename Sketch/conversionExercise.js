var dollar = 2000;

function setup(){
    createCanvas(400,400);
}

function draw(){
    background(100);
    var myEUincome = UStoEU(dollar);
    text(myEUincome, 50, 50);
}
function UStoEU(dollar){
    var conversion = 0.86;
    var euro = dollar * conversion;
    
    return euro;
}
//function name(p1,p2,p3){
//code to be executed
//}
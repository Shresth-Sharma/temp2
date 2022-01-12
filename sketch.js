var a1;
var t1=0;
function setup(){
    createCanvas(400,400);
    a1 = createSprite(200,200,200,200);
    a1.shapeColor=("yellow");
}
function draw(){
    background("red");
    t1 = touches.length + ' touches';
    console.log(t1);
    if(t1>0){
        if(mouseX<300&&mouseX>100&&mouseY<300&&mouseY>100){
            a1.shapeColor=("blue");
            alert("!");
        } 
    }
    
    drawSprites();
}
function mouseReleased(){
    if(mouseX<300&&mouseX>100&&mouseY<300&&mouseY>100){
        if(mouseButton === LEFT){
            a1.shapeColor=("orange");
            alert("@");
        }
    }  
    if(mouseX<300&&mouseX>100&&mouseY<300&&mouseY>100){
        if(mouseButton === RIGHT){
            a1.shapeColor=("yellow");
            alert("@");
            
        }
        
    }  
}
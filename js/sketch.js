var brushSize, brushShape, paintColour;
var coloursArray= ['red','green','blue'];

function setup(){
    var canvas = createCanvas(800, 450);
    canvas.parent("p5container");
    brushSize = 10;
    background(220);

    paintColour = coloursArray[0];

}

function draw(){

    if(paintColour === 'red'){
        fill('rgb(255,0,0)');  

    } else if(paintColour === 'green'){
        fill('rgb(0,255,0)')

    } else if(paintColour === 'blue'){
        fill('rgb(0,0,255)')
    }

    noStroke();


    if(mouseIsPressed == true){
        ellipse(mouseX, mouseY, brushSize);
    };

}

function keyPressed(){
    if(keyCode === UP_ARROW && brushSize <= 50){
        brushSize = brushSize + 5;
    } else if(keyCode === DOWN_ARROW && brushSize >= 10) {
        brushSize = brushSize - 5;
    }    

    if(keyCode === 81){
        paintColour = coloursArray[0]
    }    

    if(keyCode === 87){
        paintColour = coloursArray[1]
    }    

}
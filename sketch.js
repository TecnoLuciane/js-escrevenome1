function setup() {
  createCanvas(400, 400);
  background("black");
}

function draw() {
  stroke("yellow")
  fill("purple")
  
    if(mouseIsPressed){
  rect(mouseX,mouseY,15,20);
  }
  
}

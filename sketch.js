var mic;

function setup() {
  createCanvas(windowWidth, windowHeight);

  mic = new p5.AudioIn();

  mic.start();
  startingColor = color('#8a5f3c')
  endingColor = color('#c15f77')
}

function draw() {
  background(200);

  var myVolume = mic.getLevel();
  if (myVolume > 0.25){
    background('#ff803b');
  }else{
    background('#ffac7e');
  }
  
  text(myVolume,20,height/2);
  
  for(var a = 0; a < width; a += 20){
    
  var ellipseColor = lerpColor (startingColor,endingColor,myVolume*5); 
  var myHeight = map(myVolume*2, 0, 1, 0, height);
  var myHeight2 = map(myVolume*4, 0, 1, 0, height);


  fill(ellipseColor);
  noStroke(); 
  rectMode(CORNER);
  rect(a,0,10,myHeight); 
  
  rectMode(CENTER);
  rect(a+15,height,10,myHeight2); 

  }  
  
}
function windowResized(){
    resizeCanvas(windowWidth,windowHeight);
}

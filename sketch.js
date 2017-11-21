var capture,mic; 
var vwidth = 640;
var vheight = 480;

function setup() {
  createCanvas(640,480);
  
  //create a video Input
  capture = createCapture(VIDEO);
  capture.size=(640,480);
  
  //create an Audio input
  mic = new p5.AudioIn();
  mic.start();
  
}

function draw() {
  background(0);
  var myImage = capture.loadPixels();
  
  //Text to interact
  var interact = "Talk to me!";
  
  var vol = mic.getLevel();
  
    
  if(vol<=0.05) {
      fill(255)
      textFont("Proxima Nova");
      textSize(32);
      text("Talk to me!",250,vheight/2);
   } 
    
     textSize(32);
      text(vol,50,50)
      
  for (var i=0; i<vwidth; i+=10) {
      for (var j=0; j<vheight; j+=10) {
        
        noStroke();
        rect(i,j,vol*20,vol*20);
        var c = myImage.get(i,j);
        fill(c,0,0);
  }
  
  }
}
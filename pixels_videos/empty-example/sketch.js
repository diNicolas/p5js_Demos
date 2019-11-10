let video;
let vScale = 1; 
let particle = [];


function setup() {
  createCanvas(540,960); 
  pixelDensity(1); 
 video = createVideo(
    ['/videos/u2.mp4'],
    vidLoad);

    video.size(width/vScale,height/vScale);

    for(let i = 0; i<2; i++){
      particle[i] = new Particle(width/2,height/2); 

    }
    
    background(51); 
}

function draw() {
  //background(51); 
  video.loadPixels(); 
  
  for(var i = 0; i< particle.length; i++){
    particle[i].update(); 
    particle[i].show();

  }
   
}

function vidLoad() {
  video.loop();
  video.volume(0);
}
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(40)
  
  //for loops take three arguments
  //1) where to start
  //2) where to end
  //3) how much to increment by
  
  for(i=0;i<20;i++){
    for(j=0; j<25; j++){
      
      stroke(i*j, i*j,i*j)
      fill(i*5, 255-j*2,200)
      ellipse(i*25,j*25,i*j)
      fill(i*5, 255-j*2,200)     
    }
  }
}
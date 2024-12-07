let t = 0;
let colors = [[255, 255, 0], [0, 255, 255], [255, 100, 0], [0, 255, 255]];
let direction = 1;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(30, 30, 60);
  
  fill(255, 255, 0, 180);
  noStroke();
  ellipse(width / 2, height / 2, 150, 150);
  
  let x = width / 2 + cos(t*0.01)*200;
  let y = height / 2 + sin(t*0.01)*200;
  fill(0, 255, 255, 180);
  noStroke();
  ellipse(x, y, 50, 50);
  
  stroke(255, 0, 0);
  strokeWeight(2);
  line(100, height - 100, width - 100, 100);
  
  for (let i = 0; i < 4; i++) {
    let r = (i % 2 == 0) ? 1 : -1;
    noFill();
    stroke(colors[i][0], colors[i][1], colors[i][2]);
    strokeWeight(2);
    arc(width / 2 + r*100, height / 2 + r*100, 150, 150, r*t * 0.01, r*t*0.01 + PI);
  }
  
  stroke(0, 255, 255);
  strokeWeight(1);
  line(width / 4, height / 4, width*3 / 4, height*3 / 4);
  line(width*3 / 4, height / 4, width / 4, height*3 / 4);
  
  fill(255, 100, 0, 180);
  noStroke();
  push();
  translate(width / 2, height / 2);
  rotate(t*0.01*direction); 
  triangle(-50, -50, 50, -50, 0, 50);
  pop();
  
  fill(0, 255, 255, 150);
  ellipse(width / 2 + 100, height / 2 - 100, 60 + sin(t*0.02) *20, 60 + cos(t*0.02)*20);
  
  fill(255, 255, 0);
  textSize(24);
  textAlign(LEFT, BOTTOM);
  text("Kesyun Wu", 20, height - 20);
  

  if (t % 200 == 0) {
    direction*= -1;
  }
  
  t++;
}

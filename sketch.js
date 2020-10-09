var hr;
var mn;
var sc;

function setup() {
  createCanvas(400,400);

  angleMode(DEGREES);
}

function draw() {
  background(255,255,255); 

  hr = hour();
  mn = minute();
  sc = second();

  hrAngle = map(hr%12, 0, 12, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  scAngle = map(sc, 0, 60, 0, 360);

  translate(200, 200);
  rotate(-90);

  push();
  rotate(scAngle);
  stroke(250, 0, 0);
  strokeWeight(7);
  line(0, 0, 100, 0);
  pop();

  push();
  rotate(hrAngle);
  stroke(0, 250, 0);
  strokeWeight(7);
  line(0, 0, 50, 0);
  pop();

  push();
  rotate(mnAngle);
  stroke(0, 0, 250);
  strokeWeight(7);
  line(0, 0, 100, 0);
  pop();

  stroke(255,0,255); 
  point(0,0); //drawing the arcs 
  strokeWeight(10);
  noFill(); //Seconds 
  stroke(255,0,0); 
  arc(0,0,300,300,0,scAngle); //Minutes 
  stroke(0,255,0); 
  arc(0,0,280,280,0,mnAngle); //Hour 
  stroke(0,0,255); 
  arc(0,0,260,260,0,hrAngle);

  drawSprites();
}
'use strict';


function setup() {
  createCanvas(720, 720);
  colorMode(HSB);
  noCursor();
}

function draw() {
    translate(width/2,height/2);

    var circleRez = map(mouseY,0,height,2,80);
    var radius = mouseX-width/2 + 0.5;
    var angle = TWO_PI/circleRez;

    strokeWeight(mouseY/30);

    beginShape();
    for(var i=0; i<=circleRez; i++){
        var x = cos(angle*i)*radius;
        var y = sin(angle*i)*radius;
        line(0,0,x,y);
        
    }
    endShape();

}

function shakeColors() {
  for (var i = 0; i < tileCountY; i++) {
    colorsLeft[i] = color(random(0, 70), random(12, 125), 100);
    colorsRight[i] = color(random(156, 190), 100, random(0, 100));
  }
}


function keyPressed() {
  if (key == 'c' || key == 'C') writeFile([gd.ase.encode( colors )], gd.timestamp(), 'ase');
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
  if (key == '1') interpolateShortest = true;
  if (key == '2') interpolateShortest = false;
}
function mouseRelased() {
  shakeColors();
}
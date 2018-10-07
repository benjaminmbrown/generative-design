'use strict';
var tileCountX = 2;
var tileCountY = 10;

var colorsLeft = [];
var colorsRight = [];
var colors = [];
var interpolateShortest = true;

function setup() {
  createCanvas(720, 720);
  colorMode(HSB);
  noCursor();
  shakeColors();
}

function draw() {
  var tileCountX = map(mouseX, 0, width, 2, 100);
  var tileCountY = map(mouseY, 0, height, 2, 10);

  var tileWidth = width / tileCountX;
  var tileHeight = height / tileCountY;

  var interCol;

  for (var gridY = 0; gridY < tileCountY; gridY++) {
    var col1color = colorsLeft[gridY];
    var col2color = colorsRight[gridY];
    for(var gridX = 0; gridX < tileCountX; gridX++){
      var amount = map(gridX,0,tileCountX-1,0,1);
      if(interpolateShortest){
        colorMode(RGB);
        interCol = lerpColor(col1color,col2color,amount);
        colorMode(HSB);
      } else {
        interCol = lerpColor(col1color,col2color,amount);
      }
      
      fill(interCol);
      var posX = tileWidth * gridX;
      var posY = tileHeight * gridY;
      rect(posX,posY,tileWidth,tileHeight);
    }
  }

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
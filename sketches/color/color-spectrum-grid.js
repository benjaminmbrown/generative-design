'use strict';
var stepX,stepY;

function setup() {
  createCanvas(720, 720);
  colorMode(HSB,width,height,100);
  background(0);
  noCursor();
}

function draw() {
  colorMode(HSB, width, height, 100);
  stepX = mouseX+2;
  stepY = mouseY+2;

  for (var gridY = 0; gridY<height; gridY+=stepY){
      for( var gridX = 0; gridX < width; gridX+=stepX){
          fill(gridX,height-gridY,100);
          rect(gridX,gridY, stepX, stepY);
      }
  }
}
'use strict';
var img;
var colors = [];
var sortMode = null;

function preload(){
    img = loadImage('../../img/dj-colors-ben-brown.jpeg');
}


function setup() {
  createCanvas(720, 720);
  noCursor();
  noStroke();
  //image(img,0,0);
}

function draw(){
    var tilecount = width/max(mouseX,5);
    var rectSize = width/tilecount;
    img.loadPixels();
    colors = [];

    for(var gridY = 0; gridY < tilecount;gridY++){
        for(var gridX = 0; gridX < tilecount; gridX++){
            var px = gridX*rectSize;
            var py = gridY*rectSize;
            var i = (py*img.width + px) * 4;
            var c = color(img.pixels[i], img.pixels[i+1],img.pixels[i+2],img.pixels[i+3]);
            colors.push(c);
        }
    }

    gd.sortColors(colors,sortMode);//generative design lib

    var i=0;

    for(var gridY = 0; gridY < tilecount;gridY++){
        for(var gridX = 0; gridX < tilecount; gridX++){
            fill(colors[i]);
            rect(gridX*rectSize,gridY*rectSize,rectSize,rectSize);
            i++;
        }
    }
}

function keyReleased() {
    if (key == 'c' || key == 'C') writeFile([gd.ase.encode(colors)], gd.timestamp(), 'ase');
    if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
  
    if (key == '1') img = loadImage('../../img/dj-colors-ben-brown.jpeg');
    if (key == '2') img = loadImage('../../img/2.jpeg');
    if (key == '3') img = loadImage('../../img/3.jpeg');
    if (key == '4') img = loadImage('../../img/4.jpeg');
  
    if (key == '5') sortMode = null;
    if (key == '6') sortMode = gd.HUE;
    if (key == '7') sortMode = gd.SATURATION;
    if (key == '8') sortMode = gd.BRIGHTNESS;
    if (key == '9') sortMode = gd.GRAYSCALE;
  }

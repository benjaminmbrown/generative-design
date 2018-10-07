'use strict';
var img;
var colors = [];
var sortMode;

function preload(){
    img = loadImage('../../img/dj-colors-ben-brown.jpeg');
}


function setup() {
  createCanvas(720, 720);
  noCursor();
  image(img,0,0);
}

function draw(){
    var tileCount = width/max(mouseX,5);
    var rectSize = width/tileCount;

    var colors = new Array[tileCount*tileCount]
}

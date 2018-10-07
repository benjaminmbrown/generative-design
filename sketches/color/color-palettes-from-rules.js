'use strict';
var colors = [];
var sortMode = null;
var tileCountX = 20;
var tileCountY = 5;
var hueVals = [];
var satVals = [];
var brightVals = [];


function setup() {
    createCanvas(720, 720);
    colorMode(HSB, 360, 100, 100, 100);
    noStroke();
    for (var i = 0; i < tileCountX; i++) {
        hueVals[i] = random(360);
        satVals[i] = random(100);
        brightVals[i] = random(100);
    }
}

function draw() {
    background(0, 0, 100);
    //this limits the mouse values to the canvas coords
    var mX = constrain(mouseX, 0, width);
    var mY = constrain(mouseY, 0, height);
    var counter = 0;
    var index = counter % currentTileCountX;

    //Map mouse to grid resolution
    var currentTileCountX = int(map(mX, 0, width, 1, tileCountX));
    var currentTileCountY = int(map(mY, 0, height, 1, tileCountY));

    var tileWidth = width / currentTileCountX;
    var tileHeight = width / currentTileCountY;

    for (var gridY = 0; gridY < tileCountY; gridY++) {
        for (var gridX = 0; gridX < tileCountX; gridX++) {
            var xPos = tileWidth * gridX;
            var yPos = tileHeight * gridY;
            var index = counter % currentTileCountX;

            //get the compoenent values
            fill(hueVals[index], satVals[index], brightVals[index]);
            rect(xPos, yPos, tileWidth, tileHeight);
            counter++;
        }
    }

}

function keyPressed() {
    if (key == 'c' || key == 'C') writeFile([gd.ase.encode(colors)], gd.timestamp(), 'ase');
    if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');

    //Any color can be randomly selected
    if (key == '1') {

        for (var i = 0; i < tileCountX; i++) {
            hueVals[i] = random(0, 360);
            satVals[i] = random(0, 100);
            brightVals[i] = random(0, 100);
        }
    };

    //set brightness to 100 - bright colors
    if (key == '2') {
        for (var i = 0; i < tileCountX; i++) {
            hueVals[i] = random(0, 360);
            satVals[i] = random(0, 100);
            brightVals[i] = 100;
        }
    };

    //saturation is low, means pastels are OUT
    if (key == '3') {
        for (var i = 0; i < tileCountX; i++) {
            hueVals[i] = random(0, 360);
            satVals[i] = 100;
            brightVals[i] = random(0, 100);
        }
    };

    //hue + sat = zero = greyscale
    if (key == '4') {
        for (var i = 0; i < tileCountX; i++) {
            hueVals[i] = 0;
            satVals[i] = 0;
            brightVals[i] = random(0, 100);
        }
    };

    //hue and brighness are set, restricting to saturation randomization
    if (key == '5') {
        for (var i = 0; i < tileCountX; i++) {
            hueVals[i] = 195;
            satVals[i] = random(0, 100);
            brightVals[i] = 100;
        }
    };
    //hue,sat static = random brightness
    if (key == '6') {
        for (var i = 0; i < tileCountX; i++) {
            hueVals[i] = 195;
            satVals[i] = 100;
            brightVals[i] = random(0, 100);
        }
    };
    //all are constrained
    if (key == '7') {
        for (var i = 0; i < tileCountX; i++) {
            hueVals[i] = random(180, 360);
            satVals[i] = random(80, 100);
            brightVals[i] = random(40, 100);
        }
    };

    if (key == '8') {
        for (var i = 0; i < tileCountX; i++) {
            hueVals[i] = random(180);
            satVals[i] = random(0, 100);
            brightVals[i] = random(0, 100);
        }
    };

    //mix two palettes

    if (key == '9') {
        for (var i = 0; i < tileCountX; i++) {
            if(i%2){
                hueVals[i] = random(0, 360);
                satVals[i] = 100;
                brightVals[i] = random(0, 100);
            } else{
                hueVals[i] = 195;
                satVals[i] = random(100);
                brightVals[i] = 100;
            }
         
        }
    };

    if (key == '0') {
        for (var i = 0; i < tileCountX; i++) {
            if (i % 2 == 0) {
                hueVals[i] = 140;
                satVals[i] = random(30, 100);
                brightVals[i] = random(40, 100);
              } else {
                hueVals[i] = 210;
                satVals[i] = random(40, 100);
                brightVals[i] = random(50, 100);
              }
        }
    };

    if(key == 'q'){
       
        for (var i = 0; i < tileCountX; i++) {
            hueVals[i] = random(hueVals[i]-15,hueVals[i]+15);
            satVals[i] = random(satVals[i]-15,satVals[i]+15);
            brightVals[i] = random(brightVals[i]-5,brightVals[i]+5);
        }
        
    }


}
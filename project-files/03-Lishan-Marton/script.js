// option for Lishan & Marton, edit so that the mouse has a tail in background but disappears over focus area

let font,
  fontsize = 12;

function preload() {
  // Ensure the .ttf or .otf font stored in the assets directory
  // is loaded before setup() and draw() are called
  font = loadFont("Cousine-Regular.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  textFont(font);
  textSize(fontsize);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(255);

  // text
  fill(0);
  text("i do not want to tell this story", mouseX, mouseY);

  // need to figure out how to add borderbox:

  //   stroke(0);
  // fill(255);
  // rectMode(CENTER);
  // rect(mouseX, mouseY, 200, 20, 8);
}

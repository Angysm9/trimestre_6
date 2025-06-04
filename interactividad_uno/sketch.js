let frase="";
let currentImage = null;
let imgY, imgU, imgI, imgO;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(122,106,176);
  textSize(60);
  text (frase, 100, 250);
    textSize(15);
    fill(255,255,255);
    if (currentImage !== null) {
    imageMode(CENTER);
    image(currentImage, width / 2, height / 2);
}
}

function preload() {
  imgY = loadImage('assets/tca1.jpg');
  imgU = loadImage('assets/tca2.jpg');
  imgI = loadImage('assets/tca3.jpg');
  imgO = loadImage('assets/tca4.jpg');
}

function keyPressed() {
  if (key=='q'){
frase= "DÍA MUNDIAL DE ACCIÓN POR LOS TCA"
 }
  if (key=='w'){
frase= "NO ES UN CAPRICHO"
 }
  if (key=='e'){
frase= "NO ES UNA MODA"
 }
  if (key=='r'){
frase= "NO ES FELICIDAD"
 }
  if (key=='t'){
frase= "SI HAY SEÑALES"
 if (key === 'y') {
    currentImage = imgY;
  }
  if (key === 'u') {
    currentImage = imgU;
  }
  if (key === 'i') {
    currentImage = imgI;
  }
  if (key === 'o') {
    currentImage = imgO;
  }
}
}
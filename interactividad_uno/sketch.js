let frase="";
let imagen1;  
let imagen2;  
let imagen3;  
let imagen4; 

function preload (){
  imagen1=loadImage ("assets/tca1.jpg");
  imagen2=loadImage ("assets/tca1.jpg");
  imagen3=loadImage ("assets/tca1.jpg");
  imagen4=loadImage ("assets/tca1.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(122,106,176);
  textSize(60);
  text (frase, 100, 250);
    textSize(15);
    fill(255,255,255);
  image(imagen1, 250,30);
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
 }
  if (key=='y'){
imagen1= "/assets/tca1.jpg"
}
if (key=='u'){
imagen2= "/assets/tca2.jpg"
}
if (key=='i'){
imagen3= "/assets/tca3.jpg"
}
if (key=='o'){
imagen4= "/assets/tca4.jpg"
}
}
let pic;
let rate = 0;

function preload(){
  pic = loadImage("js/logo1.png");
}

function setup() {
  let htmlFile = location.pathname.split('/').slice(-1)[0];
  let canvas = createCanvas(400, 400);
  canvas.id('loadingcanvas');
  if(htmlFile == "index.html" || htmlFile.length == 0 || htmlFile == "index"){
    canvas.parent('#loader');
  }
  else if(htmlFile == "music.html" || htmlFile == "music"){
    canvas.parent('#holder');
    pixelDensity(.7);
  }
  else{
    console.log("foo");
  }
  $("#loadingcanvas").css({ 'height' : '90px'});
  $("#loadingcanvas").css({ 'width' : '90px'});
}

function draw() {
  clear();
  push();
  rate+= 0.007;
  translate(width/2, height/2);
  rotate(rate);
  imageMode(CENTER);
  image(pic, 0, 0, 400, 400);
  pop();
  strokeCap(SQUARE);
  strokeWeight(24);
  noFill();
  line(200,219, 200, 335);
  line(149.375, 272.375, 250.625, 272.375)
  arc(200, 175.75, 110, 110, PI, HALF_PI);
  arc(179, 184, 110, 110, HALF_PI, PI);
}

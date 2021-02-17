const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const World = Matter.World;
var engine;
var world;
var bgImg;
var apple;
var appleImage;
var score = 0;
var rez = 20;
var w, h;
var s;

function preload(){
  bgImg = loadImage("bg.PNG");
  appleImage = loadImage("apple.PNG");
}

function setup() {
createCanvas(1300,600);
w = floor(width/rez);
h = floor(height/rez);
frameRate(10);

s = new snake();
foodLocation();
engine = Engine.create();
world = engine.world;

}
function foodLocation(){
  var x = floor(random(w))
  var y = floor(random(h))
  apple = createVector(x,y);
  //apple.addImage(appleImage);
}


function draw() {
  background(bgImg);
  textSize(25);
  fill("black");
  stroke("black"); 
  text("SCORE: "+score,10,25);

  Engine.update(engine);
  
  
  
  scale(rez)

  if (s.eat(apple)){
    score = score+10 ;
    console.log(score);
    foodLocation();
  }
  s.update();

  s.display();

  
  if (s.endGame()){
    console.log("Game ended");
    background(bgImg);
    s.visible = false ;
    apple.visible = false ;
    noLoop();
  }
  
  stroke("black");
  strokeWeight(0.1)
  fill(247,30,0)
  //rect(apple.x, apple.y,1,1)
  image(appleImage,apple.x,apple.y,1,1);

    
  
  
}

function keyPressed(){
  
    if (keyCode === LEFT_ARROW){
      s.setDirection(-1,0)
    } else if (keyCode === RIGHT_ARROW){
      s.setDirection(1,0)
    }else if (keyCode === DOWN_ARROW){
      s.setDirection(0,1)
    }else if (keyCode === UP_ARROW){
      s.setDirection(0,-1)
    }
  }
  

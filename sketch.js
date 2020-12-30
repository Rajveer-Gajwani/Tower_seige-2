const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var plinks = [];

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

for(var e = 200; e<=width; e=e+50){
plinks.push(new Obstacle(e,475));
}

}

function draw() {
  background(255,255,255);  
  Engine.update(engine); 

for(var e = 0; e < plinks.length; e++){
  plinks[e].display();
}

}
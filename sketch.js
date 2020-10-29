const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var go;
var log1, log2, log3;
var paper;
var paperIMG, dustbinIMG;

function preload()
{
	
	paperIMG = loadImage("paper.png");
	dustbinIMG = loadImage("dustbingreen.png");

}

function setup() {
	createCanvas(1500, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	go = new ground(750, 680, 1500, 20, {isStatic:true});
	bin = new Dustbin(1000, 500, 200, 200, {isStatic:true});
	bin = addImage(dustbinIMG);
	paper = new Paper(100, 200, 50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  
  go.display();
  log1.display();
  log2.display();
  log3.display();
  paper.display();

}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body, paper.body.position, {x : 120, y : -135}) 
	}
}

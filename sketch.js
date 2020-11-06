const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var go;
var bin;
var paper;
var paperIMG, dustbinIMG;
var log6, chain;

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
	Emptybin = new Dustbin(1200, 600, 160, 20, {isStatic:true});
	paper = new Paper(100, 200, 50, "paper.png");
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");

  
  go.display();
  Emptybin.display();	
  paper.display();

}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body, paper.body.position, {x : 50, y : -65}) 
	}
}

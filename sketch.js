
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world,engine;
var paper,wall1,wall2,wall3,wall3Body;
var ground;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,530,800,20);
	paper = new Paper(100,500,20);
	wall1 = createSprite(550,450,20,100);
	wall1.shapeColor = "green";
	wall2 = createSprite(750,450,20,100);
	wall2.shapeColor = "green";
	wall3 = createSprite(650,500,200,20);
    wall3.shapeColor = "green";


	Engine.run(engine);
	world = engine.world;
	
	wall3Body = Bodies.rectangle(650,500,200,20);
	World.add(world,wall3Body);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  
  paper.display();
  ground.display();
  keyPressed (); 
  drawSprites();
 
}

function keyPressed (){

	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position,{x:85,y:85});
	}
}


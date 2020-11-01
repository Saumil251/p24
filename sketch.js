
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(400,650,800,20)
crumpledBall=new Ball(150,500,20,20)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  
ground.display()
crumpledBall.display();
  drawSprites();
 
}
function KeyPressed(){
if (keyCode==UP_ARROW){}
Matter.Body.applyForce(crumpledBallObject.body.crumpledBallObject.body.position,{x:85,y:-85})
}




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
crumpledBall=new Ball(150,490,50,50)
box1=new Box(530,590,100,100)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  
ground.display()
crumpledBall.display();
box1.display();



  drawSprites();
 
}
function keyPressed(){
if (keyCode==UP_ARROW){
Matter.Body.applyForce(crumpledBall.body,crumpledBall.body.position,{x:70,y:-100})
}
}




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
box1=new Box(610,630,200,20)
box2=new Box(520,570,20,100)
box3=new Box(700,570,20,100)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  
ground.display()
crumpledBall.display();
box1.display();
box2.display();
box3.display();



  drawSprites();
 
}
function keyPressed(){
if (keyCode==UP_ARROW){
Matter.Body.applyForce(crumpledBall.body,crumpledBall.body.position,{x:15,y:-15})
}
}




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
crumpledBall=new Ball(150,500,50,50)
box1=new Box(530,630,200,20)
box2=new Box(520,570,20,200)
box3=new Box(730,570,20,200)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  
ground.display()
crumpledBall.display();
box1.display();
box2.display();
box3.display();



  drawSprites();
 
}
function keyPressed(){
if (keyCode==UP_ARROW){
Matter.Body.applyForce(crumpledBall.body,crumpledBall.body.position,{x:60,y:-60})
}
}



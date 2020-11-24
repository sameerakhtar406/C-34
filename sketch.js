
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(3000,800);

	engine = Engine.create();
	world = engine.world;

	bobDiameter=40; 
	startBobPositionX=width/2; 
	startBobPositionY=height/4+500;

	//Create the Bodies Here.
	
	Ground=new ground(600,600,1200,20);

	bob1=new BOB(300,200,40);
	rope1=new ROPE(bob1.body,{x:600,y:50}) 

	Box1=new box(900,100,70,70)
	Box2=new box(900,100,70,70)
	Box3=new box(900,100,70,70)
	Box4=new box(900,100,70,70)
	Box5=new box(900,100,70,70)
	Box6=new box(900,100,70,70)
	
	Box7=new box(800,100,70,70)
	Box8=new box(800,100,70,70)
	Box9=new box(800,100,70,70)
	Box10=new box(800,100,70,70)
	Box11=new box(800,100,70,70)
	Box12=new box(800,100,70,70)

	Box13=new box(700,100,70,70)
	Box14=new box(700,100,70,70)
	Box15=new box(700,100,70,70)
	Box16=new box(700,100,70,70)
	Box17=new box(700,100,70,70)
	Box18=new box(700,100,70,70)
	Box19=new box(700,100,70,70)
	Box20=new box(700,100,70,70)
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  Ground.display();
  
  bob1.display();
  rope1.display();

  Box1.display();
  Box2.display();
  Box3.display();
  Box4.display();
  Box5.display();
  Box6.display();
  Box7.display();
  Box8.display();  
  Box9.display();
  Box10.display();  
  Box11.display();
  Box12.display();
  Box13.display();
  Box14.display();
  Box15.display();
  Box16.display();
  Box17.display();
  Box18.display();
  Box19.display();
  Box20.display();


  drawSprites();
 
}
function mouseDragged(){
Matter.Body.setPosition(bob1.body,{x:mouseX,y:mouseY})
}


var helicopterIMG, helicopterSprite,packageIMG;
var package1,package2,ground,packageBody;
var redBoxSide1,redBoxSide2,redBoxSide3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	package1IMG=loadImage("package.png")
}

function setup() {
	createCanvas(1600,700);
	engine = Engine.create();
	world = engine.world;

    ground=new Ground(800,690,1600,20)
     
	 package1=createSprite(width/2, 200, 50,50);
	 package1.addImage(package1IMG)
	 package1.scale=0.2
	 

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	//groundSprite=createSprite(width/2, height-25, width,10);
	//groundSprite.shapeColor=color(255)



	var g={
		isStatic:true,
	    restitution:0.5
  }

	 packageBody = Bodies.rectangle(width/2 ,200, 50 , 50 ,g);
	 World.add(world, packageBody);
	 
	 
	 //Create a Ground
	 //ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	 //World.add(world, ground);

	// Create a redBox
	//redBoxSide1 = Bodies.rectangle(480,375,20,210,{isStatic:true})
	//redBoxSide2 = Bodies.rectangle(270,375,20,210,{isStatic:true})
	//redBoxSide3 = Bodies.rectangle(375,470,190,20,{isStatic:true})
	Engine.run(engine);

	//redBoxSideBody= Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	//World.add(world, redBoxSideBody);
	//redBoxSideBody.x=redBoxSideBody.position.x
    //redBoxSideBody.y=redBoxSideBody.position.y
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  //redBoxSide1.x=redBoxSideBody.position.x
  //redBoxSide1.y=redBoxSideBody.position.y

  //redBoxSide2.x=redBoxSideBody.position.x
  //redBoxSide2.y=redBoxSideBody.position.y

  //redBoxSide3.x=redBoxSideBody.position.x
  //redBoxSide3.y=redBoxSideBody.position.y

  package1.x= packageBody.position.x 
  package1.y= packageBody.position.y 
  ground.display()

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
	Matter.Body.setStatic(packageBody,false);
  }
}
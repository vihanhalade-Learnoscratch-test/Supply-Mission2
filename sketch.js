var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,boxp1,boxp2,boxp3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	
	boxp1=createSprite(width/2, height-50,200,20)
	boxp1.shapeColor="red";

	boxp2=createSprite(width/2-90,height-110,20,100)
	boxp2.shapeColor="red";

	boxp3=createSprite(width/2+90,height-110,20,100)
	boxp3.shapeColor="red";

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);

	//Create a Ground
	// ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	// World.add(world, ground);
	boxp1 = Bodies.rectangle(width/2, 625, width, 10 , {isStatic:true} );
	World.add(world, boxp1);
	boxp2 = Bodies.rectangle(width/2, 625, width, 10 , {isStatic:true} );
	World.add(world, boxp2);
	boxp3 = Bodies.rectangle(width/2, 625, width, 10 , {isStatic:true} );
 	World.add(world, boxp3); 

	Engine.run(engine);
}


function draw() {
  background(0);
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  keyPressed();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
    Matter.Body.setStatic(packageBody, false);
    
  }
}




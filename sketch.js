var helicopterImage, helicopter, package, packageImage;
var packageBody, ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {

	helicopterImage = loadImage("helicopter.png");
	packageImage = loadImage("package.png");

}

function setup() {

	createCanvas(1520,760);
	rectMode(CENTER);
	
	package = createSprite(760, 100, 10,10);
	package.addImage(packageImage);
	package.scale = 0.2;

	helicopter = createSprite(760, 100, 10,10);
	helicopter.addImage(helicopterImage);
	helicopter.scale = 0.6;

	ground = createSprite(760, 760, 1520,10);
	ground.shapeColor = color("white");

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(760, 100 , 5 , { restitution:0.5, isStatic:true, density:10 });
	World.add(world, packageBody);
	
	//Create a Ground
	ground = Bodies.rectangle(760, 760, 1520, 10 , { isStatic:true } );
 	World.add(world, ground);

	Engine.run(engine);
  
}

function draw() {

  rectMode(CENTER);
  background(0);

  package.x = packageBody.position.x 
  package.y = packageBody.position.y 

  drawSprites();
 
}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
	
		// Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
		Matter.Body.setStatic(packageBody,false);
    
    }

}



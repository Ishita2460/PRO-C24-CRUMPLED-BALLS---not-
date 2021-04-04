
var paper,ground,box1,box2,box3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;

function preload(){
}

function setup() {
	createCanvas(1500, 700);
	rectMode(CENTER);
	

	box1=createSprite(900,650,200,20);
	box1.shapeColor=color(225,0,0);

	box2=createSprite(990,620,20,100);
	box2.shapeColor=color(225,0,0);

	box3=createSprite(810,620,20,100);
	box3.shapeColor=color(225,0,0);

	

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;
	

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 var paper_options= {
		restitution:0.3,
		isStatic : false,
		friction : 0.5,
		density : 1.2
	}
		paper = Bodies.circle(200,100,20,paper_options);
		World.add(world,paper);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
    Engine.update(engine);
    
    ellipseMode(RADIUS)
    ellipse(paper.position.x,paper.position.y,20,20)

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85 , y:85});
	  }
	}




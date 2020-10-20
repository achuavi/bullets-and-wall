

var bullet,wall;


var speed, weight,thickness; 


function setup() {
  createCanvas(1600, 400);


	speed=random(223,321)
	weight=random(30,52)
	thickness=random(22,83);


	bullet=createSprite(0, 200, 100,20);   

	bullet.velocityX = speed;

	bullet.shapeColor="white";


  
  	wall=createSprite(1100,200, thickness, height/2)
  	wall.shapeColor=color(80,80,80)
}


function draw() {
  background(0);

  if(wall.x-bullet.x < (bullet.width+wall.width)/2)
  {
  	bullet.velocityX=0;
	
	  var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);
	  console.log("damage"+damage);
	if(damage<10)
	{
		wall.shapeColor="green";
	}

	if(damage>10)
	{
		wall.shapeColor="red";
	}

  }  
  
  drawSprites();
 
}



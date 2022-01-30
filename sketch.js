const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball;
var button_right;
var button_up;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  button_right=createImg("right.png")
  button_right.position(300,100)
  button_right.size(50,50)
  button_right.mouseClicked(horizantalForce)

  button_up=createImg("up.png")
  button_up.position(300,30)
  button_up.size(50,50)
  button_up.mouseClicked(verticalForce)


  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
  var balloptions = 
  {
restitution: 1

  }
 ball = Bodies.circle(200,200,50,balloptions)
 World.add(world,ball)
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
ellipse(ball.position.x, ball.position.y, 50)
  Engine.update(engine);
}

function horizantalForce()
{
Matter.Body.applyForce(ball,{x:0,y:0}, {x:0.50, y:0})


}

function verticalForce()
{
Matter.Body.applyForce(ball,{x:0,y:0}, {x:0, y:-0.80})
}
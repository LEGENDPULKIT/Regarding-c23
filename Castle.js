const Engine= Matter.Engine;
const World=Matter.world;
const Bodies=Matter.Bodies;

function setup()
{
    createCanvas(700,400);
    engine=Engine.create();
    world=engine.world;

    centerpiller=Bodies.rectangle(350,350,100,400);
    World.add(world,this.body);
}
function draw()
{
    background(0);

    Engine.update(engine);
    rectMode(CENTER);
    rect(centerpillar.position.x,centerpiller.position.y,centerpiller.width,centerpiller.height);
  
}
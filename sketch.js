const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(900,300,70,70);
    box2 = new Box(720,300,70,70);

    box3 = new Box(900,100,70,70);
    box4 = new Box(720,100,70,70);

    bird1 = new Bird(200, 100, 70, 70);

    ground = new Ground(600,height,1200,20)
    pig1 = new Pig(810, 300);
    pig2 = new Pig(810, 50)
    log1 = new log(810, 200, 300, PI/2);
    log2 = new log(810, 10, 300, PI/2);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    ground.display();
    pig1.display();
    log1.display();
    log2.display();
    pig2.display();
    bird1.display();
    console.log();
}
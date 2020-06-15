const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;

var ground;

var pig1,pig2;

var bird;
var log1,log2,log3,log4;
 



function setup(){
    var canvas = createCanvas(600,400);
    engine = Engine.create();
    world = engine.world;
    
    box1= new Box(200,100,50,50);
    box2= new Box(210,50,50,100);
    box3= new Box(410,10,50,70);
    box4= new Box(420,10,50,100);
    box5= new Box(470,10,70,70);

    ground= new Ground(300,380,600,30);

    pig1=new Pig(400,50,30);
    pig2=new Pig(500,50,30);

    bird=new Bird(100,100,20);

    log1= new Log(350,300,10,100);
    log2= new Log(450,300,10,100);
    log3= new Log(550,300,10,100);
    log4= new Log(450,20,300,10);

  
    
}

function draw(){
    background(0);
    Engine.update(engine);

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();

    ground.display();

    pig1.display();
    pig2.display();

    bird.display();

    log1.display();
    log2.display();
    log3.display();
    log4.display();
    
    

    

    
}
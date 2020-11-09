const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, ground1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,360,50,50);
    box2=  new Box(260,360,50,50);
    log1= new log(230,330,PI/2,290)
    log2= new log(230,230,PI/2,290)
    log3= new log(200,270,PI/5,150);
    log4= new log(250,270,-PI/5,150);
    pig1= new pig(230,360);
    pig2= new pig(230,300);
    box5= new Box(230,280,50,50);
    box3= new Box(180,300,50,50);
    box4= new Box(280,300,50);
    Bird1= new Bird(280,330);
    
    ground1= new ground(200,370,400,1);

}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    pig1.display();
    pig2.display();
    ground1.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    box3.display();
    box4.display();
    box5.display();
    Bird1.display();
   
}
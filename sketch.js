const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var plane;
var hammer;
var rubber1;
var rubber2;
var rubber3;
var rubber4;
var rubber5;
var rubber6;
var rubber7;
var rubber8;
var rubber9;
var rubber10;
var rubber11;
var stone;
var iron;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,575,1200,25);

    
    rubber1 = new Rubber(600, 100, 50);
    rubber2 = new Rubber(200, 100, 5);
    rubber3 = new Rubber(205, 100, 5);
    rubber4 = new Rubber(210, 100, 5);
    rubber5 = new Rubber(215, 100, 5);
    rubber6 = new Rubber(220, 100, 5);
    rubber7 = new Rubber(970, 100, 5);
    rubber8 = new Rubber(975, 100, 5);
    rubber9 = new Rubber(980, 100, 5);
    rubber10 = new Rubber(995, 100, 5);
    rubber11 = new Rubber(1000, 100, 5);

    stone = new Stone(800, 300);

    iron = new Iron(400, 100);

    hammer = new Hammer(10,100);
}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    plane.display();

    hammer.display();

    rubber1.display();
    rubber2.display();
    rubber3.display();
    rubber4.display();
    rubber5.display();
    rubber6.display();
    rubber7.display();
    rubber8.display();
    rubber9.display();
    rubber10.display();
    rubber11.display();

    stone.display();

    iron.display();
}
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,box2,box3,box4,box5,box6 ;
var ground,ground1;
var bird, slingShot;


function preload() {
    backgroundImg = loadImage("IMGAGES/img.jpg");
}
 function setup(){
    var canvas = createCanvas(1200,400);
    
    engine = Engine.create();
    world = engine.world;

ground = new Ground(600,370,1200,20);
ground1 = new Ground(950,240,200,20);
box1 = new Box(900,345,30,30);
box2 = new Box(930,345,30,30);
box3 = new Box(960,345,30,30);
box4 = new Box(990,345,30,30);
box5 = new Box(1020,345,30,30);
box6 = new Box(900,315,30,30);




box7 = new Box(930,315,30,30);
box8 = new Box(960,315,30,30);
box9 = new Box(990,315,30,30);
box10 = new Box(1020,315,30,30);
box11 = new Box(1050,345,30,30);
box12= new Box(1050,315,30,30);


box13= new Box(900,210,30,30);
box14= new Box(930,210,30,30);
box15= new Box(960,210,30,30);
box16= new Box(990,210,30,30);
box17= new Box(1020,210,30,30);
box18= new Box(900,210,30,30);



}
function draw(){
background(backgroundImg);
ground.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();

box7.display();
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();

box13.display();
box14.display();
box15.display();
box16.display();
box17.display();
box18.display();


ground1.display();

}

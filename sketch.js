const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var boxes=[]
var box,boximg;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
 ground =new Ground(200,390,400,10);
    
}

function draw(){
    background(0);
    Engine.update(engine);
    
    ground.display();
    for(var i=0;i<boxes.length;i++){
        boxes[i].display();
    }
}
function mousePressed(){
if(mouseY<300){
boxes.push(new Box(mouseX,mouseY,random(20,50),random(20,50)))
}
}
//namespacing
//criar uma variável de nome menor para referir a algo de nome maior
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint


//variaveis
var engine;
var world;
var bola;
var parado;
var mexendo;
var b2;
var b3;
var b4;
var b5;
var conexao;
var c2;
var c3;
var c4;
var c5;


function setup() {
    createCanvas(800, 700);
    //cria o motor
    engine = Engine.create();
    world = engine.world;


    var parado = {isStatic:true};
    //cria corpo retangular
    solo = Bodies.rectangle(400,690,800,20, parado);  
    //adiciona no mundo
    World.add(world, solo);

    
    bola = new Bola(100);
    b2 = new Bola(90);      
    b3 = new Bola(110);
    b4 = new Bola(120);
    b5 = new Bola(130);
    conexao = Constraint.create({
      pointA:{x:100,y:0},bodyB:bola.body
    })
    c2 = Constraint.create({
      pointA:{x:60,y:0},bodyB:b2.body
    })
    c3 = Constraint.create({
      pointA:{x:140,y:0},bodyB:b3.body
    })
    c4 = Constraint.create({
      pointA:{x:180,y:0},bodyB:b4.body
    })
    c5 = Constraint.create({
      pointA:{x:220,y:0},bodyB:b5.body
    })
    World.add(world,conexao)
    World.add(world,c2)
    World.add(world,c3)
    World.add(world,c4)
    World.add(world,c5)
    rectMode(CENTER);
    ellipseMode(RADIUS);
}


function draw() {
    background("cyan");    
    //atualiza o motor
    Engine.update(engine);

    //pinta o solo
    fill("green")
    //desenha o retângulo no corpo
    rect (solo.position.x, solo.position.y, 800,20)

   pos = bola.body.position;
   pes = b2.body.position;
   pis = b3.body.position;
   pas = b4.body.position;
   pus = b5.body.position;
   line (100,0,pos.x,pos.y);
   line (60,0,pes.x,pes.y);
   line(140,0,pis.x,pis.y);
   line(180,0,pas.x,pas.y);
   line(220,0,pus.x,pus.y);
   bola.desenhar();
   b2.desenhar();
   b3.desenhar();
   b4.desenhar();
   b5.desenhar();   
}

function keyPressed(){
    if(keyCode == 32 ){
      Body.applyForce(b5.body,{x:0,y:0}, {x:0.1,y:0})
    }
}
class Bola{

    constructor(x){
     this.body = Bodies.circle(x,100,30);
     World.add(world,this.body);
    }
    desenhar(){
      fill ("gray");
      ellipse(this.body.position.x,this.body.position.y,30)
    }
}
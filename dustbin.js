class Dustbin {
    constructor(x, y) {

    var options = {
        isStatic : true
    }
    this.image = loadImage("dustbingreen.png");
    this.body = Bodies.rectangle(x,y,width,height,options);
      
      World.add(world,this.body)

  }


  display(){
    var pos =this.body.position;
    push();
    imageMode(CENTER);
    image(this.image, pos.x, pos.y, this.width, this.height);
    pop();
  }
};
class Dustbin {
    constructor(x, y,width,height){

    var options = {
        isStatic : true
    }
    this.image = loadImage("dustbingreen.png");
    this.width = width;
    this.height = height;
    this.body = Bodies.rectangle(x,y,width,height,options);
      
      World.add(world,this.body)

  }


  display(){
    var pos =this.body.position;
    push();
    imageMode(CENTER);
    image(this.image, pos.x, pos.y, this.width, this.height + 130);
    pop();
  }
};
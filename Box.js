class Box {
  constructor(x,y,width,height) {
    var options = {
      'restitution':0.8,
      'friction':1.0,
      'density':1.0
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    //this.image= loadImage("IMG/img1")
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    rectMode(CENTER);
    //imageMode(CENTER);
      //  image(this.image, 0, 0, this.width, this.height);
      fill("yellow")
    rect(pos.x, pos.y, this.width, this.height);
  }
};
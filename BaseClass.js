class BaseClass{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.8, //bouncing property
            'friction':1.0, //gravity property
            'density':1.0  
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push(); //records new value
        translate(this.body.position.x, this.body.position.y);
        rotate(angle); // makes falling more realistic
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop(); //takes up previous value
      }
}

//translate: change in positions
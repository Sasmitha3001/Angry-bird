class Box{
    constructor(x,y,width,height){
        var body_options = {
            restitution:0.3,
            friction:1.0
        }
            this.body = Bodies.rectangle(x,y,width,height,body_options)
            this.width = width;
            this.height = height;
            
            World.add(world,this.body)
            
             

    }
    display(){
        
        var angle = this.body.angle;
       var  place = this.body.position
       push();
       translate(place.x,place.y);
       rotate(angle);

        rectMode(CENTER);
        fill("red");
        rect(0,0,this.width,this.height);
        pop();

    }
}

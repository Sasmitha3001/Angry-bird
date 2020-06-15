class Bird{
    constructor(x,y,radius){
        var bird_option={
            restitution:0.8  
        }
        this.body=Bodies.circle(x,y,radius,bird_option);
        this.radius=radius;
        World.add(world,this.body);

    }
    display(){
        // this.body.position.x=mouse.x;
        // this.body.position.y=mouse.y;

        ellipseMode(RADIUS);
        fill("yellow");
        ellipse(this.body.position.x,this.body.position.y,this.radius);
    }
}
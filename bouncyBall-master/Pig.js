class Pig{
    constructor(x,y,radius){
       var  pig_option={
            restitution:0.5,
            friction:1.0
        }

        this.body=Bodies.circle(x,y,radius,pig_option);
        this.radius=radius;
        World.add(world,this.body);

    }

    display(){
        

        var place=this.body.position;

        ellipseMode(RADIUS);
        fill("green");
        ellipse(place.x,place.y,this.radius);
    }
}
class Log{
    constructor(x,y,width,height){
        var log_options={
            restitution:0.5
        }
        this.body=Bodies.rectangle(x,y,width,height,log_options);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }
    display(){
        var place=this.body.postion;
        rectMode(CENTER);
        fill("brown");
        rect(this.body.position.x,this.body.position.y, this.width,this.height);
    }
}
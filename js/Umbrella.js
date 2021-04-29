class Umbrella{
    constructor(){
        var options={
            isStatic:true
        };
        
        this.body=Bodies.rectangle(windowWidth/2,windowHeight-60,20,200,options);
        this.width=40;
        this.height=5;
        World.add(world,this.body);
    }

    display(){
        var pos=this.body.position;
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
    }
}

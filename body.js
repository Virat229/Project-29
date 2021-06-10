class Body {
    constructor(x,y,radius){
        var option = {
            
        }
        this.body = Bodies.circle(x,y,radius);
        this.r = radius
       // this.width = radius;
       //this.height = radius;
        World.add(world,this.body);
        
    }
    display(){
        push ();
        translate (this.body.position.x,this.body.position.y);
        rotate (this.body.angle);
        imageMode(CENTER);
        image (this.image,this.body.position.x,this.body.position.y,40,40);
        pop ();

    }
}
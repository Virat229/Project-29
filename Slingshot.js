class Sling {
    constructor (bodyA,pointB){
        var options =  {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.03,
            length : 50

        }
        this.slings = Matter.Constraint.create(options);
        this.pointB = pointB;
        World.add (world,this.slings);

    }
    fly(){
        this.slings.bodyA = null;
    }
    display(){
        if(this.slings.bodyA){
        var pointA = this.slings.bodyA.position;
        var pointB = this.slings.pointB;
        
        line (pointA.x,pointA.y,pointB.x,pointB.y);
        }

    }
}
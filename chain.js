class Chain{
    constructor(obj1,obj2){
        var options={
            bodyA:obj1,
            bodyB:obj2,
            length:10,
            stiffness:0.04
        }
        this.chain=Constraint.create(options);
        World.add(world,this.chain);
        
    }
    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        stroke(3);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}
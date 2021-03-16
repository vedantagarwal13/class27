class Joiner{
constructor(bodyA,bodyB){


var options={
    bodyA:bodyA,
    bodyB:bodyB,
    stiffness:0.4,
    length:10

}
this.joiner=Constraint.create(options);
World.add(world,this.joiner);
}
display(){
    var pointA=this.joiner.bodyA.position;
    var pointB=this.joiner.bodyB.position;
    line(pointA.x,pointA.y,pointB.x,pointB.y); 
}
}



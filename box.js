class box{
constructor(x,y,w,h){
var options={
 restitution:1,
 density:0.04,
 friction:1
}
this.body=Bodies.rectangle(x,y,w,h,options)
this.x=x
this.y=y
this.w=w
this.h=h
World.add(world,this.body)
}
display(){
var pos=this.body.position
var angle=this.body.angle
push();
translate(pos.x,pos.y);
rotate(angle);
strokeWeight(2)
stroke("red")
fill("black")
rectMode(CENTER)
rect(0,0,this.w,this.h)
pop();
}
} 
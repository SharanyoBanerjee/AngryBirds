class Pig{
 constructor (x,y) {
  var options =  {
  restitution:0.5

}  
  this.body = Bodies.rectangle(x,y,35,35,options);
  this.width = 35;
  this.height = 35;
  World.add(world,this.body);
 }
  display()
  {
  var pos = this.body.position;
  var angle = this.body.angle;
  push();
  translate(pos.x,pos.y);
  rotate(angle);
  rectMode(CENTER);
  fill("green");
  rect(0,0,35,35);
  pop();
  }
  

}

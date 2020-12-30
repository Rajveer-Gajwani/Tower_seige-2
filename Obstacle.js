class Obstacle {
constructor(x,y){
    var options = {
        isStatic : false,
        density : 1
    }
   
    this.body = Bodies.rectangle(x,y,50,50,options);
    this.width = 50;
this.height = 50;
World.add(world,this.body);
this.Visibility = 255;

}
display(){
    if(this.body.speed < 50){
    var ang = this.body.angle;
    push();
    translate(this.body.position.x,this.body.position.y);
    rotate(ang);
    rectMode(CENTER);
    fill(random(0,255),random(0,255),random(0,255));
    rect(0,0,50,50);
    pop();
    }
    else{
        World.remove(world,this.body);
        push();
        this.Visibility = this.Visibility-5;
        tint(255,this.Visibility);
        pop();
    }
}
}
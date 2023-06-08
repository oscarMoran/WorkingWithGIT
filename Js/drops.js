class Drop {
    constructor(dotX1, dotY1, dotX2, dotY2, color, speed){
        this.dotX1 = dotX1;
        this.dotY1 = dotY1;
        this.dotX2 = dotX2;
        this.dotY2 = dotY2;
        this.Color = color;
        this.Speed = speed;
    }
    Appear(){
        if(this.Speed < 4){
            noStroke();
            fill(8,177,0);
            this.dotX1 += random(-5,5);
            this.dotY1 += random(-5,5);
            ellipse(this.dotX1,this.dotY1, random(1,10));
        }else{
            stroke(this.Color);
            line(this.dotX1,this.dotY1, this.dotX2, this.dotY2);
        }
    }

    Fall(){
        this.dotY1 += this.Speed;
        this.dotY2 += this.Speed;
    }

    DeleteDrop(){
        return this.dotY1 > height;
    }
}
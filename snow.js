class Snow {
    constructor(x,y){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        
        this.image = loadImage("snow4.jpg");
        this.image.scale = 0.1;
    }
}
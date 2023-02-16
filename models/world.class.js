class World {
    background = [
        new Water(),
        new ThirdLayer(),
        new SecondLayer(),
        new FirstLayer()  
    ]
    

    canvas;
    ctx;

 
    

    
   

    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
      //  this.getGameSpeed(gamespeed);
        this.drawAll();
        
    }


    drawAll() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.width)
        this.background.forEach(element => {
            element.drawBackground(this.ctx, gamespeed);
        });
      

        // Funktion wiederholt sich selbst
        let self = this;
        requestAnimationFrame(function () {
            self.drawAll();
        });
    }
    
}
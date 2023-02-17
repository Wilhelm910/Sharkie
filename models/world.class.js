class World {

    background = [
        new Water(),
        new ThirdLayer(),
        new SecondLayer(),
        new FirstLayer()
    ]

    hero = new Hero();
    //keyboard = new Keyboard();
    

    canvas;
    ctx;
    keyboard;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.drawAll();
      //  this.setWorld();
    }


    setWorld() {
        this.hero.world = this;
    }


    drawAll() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.width)
        this.background.forEach(element => {
            element.drawBackground(this.ctx);
            this.hero.draw(this.ctx);
        });
      

        // Funktion wiederholt sich selbst
        let self = this;
        requestAnimationFrame(function () {
            self.drawAll();
        });
    }
    
}
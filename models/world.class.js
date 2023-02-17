class World {

    background = [
        new Water(),
        new ThirdLayer(),
        new SecondLayer(),
        new FirstLayer()
    ]

    hero = new Hero();

    pufferfish = new Pufferfish();

    herospeed;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.drawAll();
        this.setWorld();
    }

    // Um in der Klasse Hero auf world.keyboard zugreifen zu können
    setWorld() {
        this.hero.world = this;
    }


    drawAll() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.width)
        this.ctx.translate(this.camera_x, 0)

        this.addObjectToMap(this.background)
        this.addToMap(this.hero)
        this.addToMap(this.pufferfish)

        this.ctx.translate(-this.camera_x, 0)
        // Funktion wiederholt sich selbst
        let self = this;
        requestAnimationFrame(function () {
            self.drawAll();
        });
    }

    addObjectToMap(array) {
        array.forEach(element => {
            element.drawBackground(this.ctx);
        });
    }


    addToMap(element) {
        if (element.mirroredImage) {
            this.flipImage(element)
            element.draw(this.ctx)
        }
        element.draw(this.ctx)
        if (element.mirroredImage) {
            this.undoFlipImage(element);
        }
        if (element.swimmingUp) {
            this.rotateUp(element);
        }
     //   if (element.swimmingUp) {
    //        this.undoRotateUp(element);
     //   }

    }

    rotateUp(element) {
        this.ctx.save();
        this.ctx.rotate(20 * Math.PI / 360);
        this.ctx.restore();
        this.swimmingUp = false;
    }

    undoRotateUp(element) {
        // this.ctx.translate(element.width + 10, 0);
        //  this.ctx.rotate(Math.PI / 2);
        //  this.ctx.translate(element.width + 10, 0);
        element.position_x = element.position_x * -1;
        this.ctx.restore();
    }


    flipImage(element) {
        this.ctx.save();
        this.ctx.translate(element.width, 0);
        this.ctx.scale(-1, 1);
        element.position_x = element.position_x * -1;
    }

    undoFlipImage(element) {
        element.position_x = element.position_x * -1;
        this.ctx.restore();
    }

}
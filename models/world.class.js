class World {

    background = [
        new Water(),
        new ThirdLayer(),
        new SecondLayer(),
        new FirstLayer()
    ]

    hero = new Hero();

    pufferfish = [
        new Pufferfish(),
        new Pufferfish(),
        new Pufferfish(),
        new Pufferfish(),
        new Pufferfish(),
        new Pufferfish(),
        new Pufferfish(),
        new Pufferfish(),
        new Pufferfish(),
        new Pufferfish(),
        new Pufferfish(),
        new Pufferfish(),
    ]

    jellyfish = [
        new Jellyfish(),
        new Jellyfish(),
        new Jellyfish(),
        new Jellyfish(),
        new Jellyfish(),
        new Jellyfish(),
        new Jellyfish(),
    ]

    herospeed;
    canvas;
    ctx;
    keyboard;
    cameraHero_x = 0;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.drawAll();
        this.setWorld();
        this.checkCollisionPufferfish(this.pufferfish)
        this.checkCollisionJellyfish()
    }

    // Um in der Klasse Hero auf world.keyboard zugreifen zu können
    setWorld() {
        this.hero.world = this;
    }





    drawAll() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.width)
        this.ctx.translate(this.cameraHero_x, 0)

        this.addObjectToMap(this.background)
        this.addHeroToMap(this.hero)
        this.addToMap(this.pufferfish)
        this.addToMap(this.jellyfish)

        this.ctx.translate(-this.cameraHero_x, 0)
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

    addHeroToMap(element) {
        if (element.mirroredImage) {
            this.flipImage(element)
            element.draw(this.ctx)

        }
        element.draw(this.ctx)
        element.drawHitBox(this.ctx)
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

    addToMap(array) {
        array.forEach(element => {
            element.drawEnemie(this.ctx);
            element.drawEnemieHitBox(this.ctx)
        });
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
        element.positionHero_x = element.positionHero_x * -1;
    }

    undoFlipImage(element) {
        element.positionHero_x = element.positionHero_x * -1;
        this.ctx.restore();
    }
// auf attack art der Gegner achten
    checkCollisionPufferfish(test) {
        setInterval(() => {
            console.log(test)
            this.pufferfish.forEach(element => {
                if (this.hero.isColliding(element)) {
                    if (element.tagged == false) {
                        this.hero.hit()
                        element.tagged = true
                    }

                    //  this.statusBar.setPercentage(this.hero.energy)
                    if (this.hero.energy == 0) {

                        this.hero.isDead_poisoned = true;
                    }
                }
            });
        }, 100);
    }

    checkCollisionJellyfish(){
        setInterval(() => {
            this.jellyfish.forEach(element => {
                if (this.hero.isColliding(element)) {
                    if (element.tagged == false) {
                        this.hero.hit()
                        element.tagged = true
                    }

                    //  this.statusBar.setPercentage(this.hero.energy)
                    if (this.hero.energy == 0) {

                        this.hero.isDead_electroshock = true;
                    }
                }
            });
        }, 100);
    }

}
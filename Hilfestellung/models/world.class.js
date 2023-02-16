class World {
    hero = new Hero();
    enemies = [
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Endboss()
    ];
    cloud = [
        new Cloud(),
    ]
    background = [
        new Background('../img/5_background/layers/air.png', 0, 0),
        new Background('../img/5_background/layers/3_third_layer/1.png', 0, 0),
        new Background('../img/5_background/layers/2_second_layer/1.png', 0, 0),
        new Background('img/5_background/layers/1_first_layer/1.png', 0, 0),
        new Background('../img/5_background/layers/air.png', 1019, 0),
        new Background('../img/5_background/layers/3_third_layer/2.png', 1019, 0),
        new Background('../img/5_background/layers/2_second_layer/2.png', 1019, 0),
        new Background('img/5_background/layers/1_first_layer/2.png', 1019, 0)

    ];
    statusBar = new StatusBar();
    bottle = [new ThrowingObejcts()];
    ctx;
    canvas;
    keyboard;
    camera_x = 0;
    level_end = 2000

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard
        this.draw();
        this.setWorld();
        this.checkCollision();
        this.throwBottle();
    }


    setWorld() {
        this.hero.world = this;
    }


    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.ctx.translate(this.camera_x, 0)
        this.addObjectToMap(this.background)
        this.addObjectToMap(this.cloud)
        this.addToMap(this.hero)
        this.addObjectToMap(this.enemies)
        this.addObjectToMap(this.bottle)

        // Space for fixed Objects
        this.ctx.translate(-this.camera_x, 0)
        this.addToMap(this.statusBar)
        this.ctx.translate(this.camera_x, 0)



        this.ctx.translate(-this.camera_x, 0)
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    addObjectToMap(obj) {
        obj.forEach(objects => {
            this.addToMap(objects)
        })
    }

    addToMap(mo) {
        if (mo.mirroredImage) {
            this.flipImage(mo);
        }
        mo.draw(this.ctx);
        mo.drawHitBox(this.ctx);
        if (mo.mirroredImage) {
            this.undoFlipImage(mo);
        }
    }

    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.position_x = mo.position_x * -1;
    }

    undoFlipImage(mo) {
        mo.position_x = mo.position_x * -1;
        this.ctx.restore();
    }

    checkCollision() {
        setInterval(() => {
            this.enemies.forEach(element => {
                if (this.hero.isColliding(element)) {
                    this.hero.hit()
                    this.statusBar.setPercentage(this.hero.energy)
                    if (this.hero.energy == 0) {
                        console.log("isdead")
                        this.hero.isDead = true;
                    }
                }
            });
        }, 100);
    }

    throwBottle() {
        setInterval(() => {
         if (this.keyboard.D) {
            let bottle = new ThrowingObejcts(this.hero.position_x + 100, this.hero.position_y + 180)
            this.bottle.push(bottle)
         }
            
        }, 100);
    }
}
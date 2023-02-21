class World {

    background = [
        new Water(),
        new ThirdLayer(),
        new SecondLayer(),
        new FirstLayer()
    ]

    hero = new Hero();

    enemies = [
     /*   new Pufferfish(),
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
        new Jellyfish(),
        new Jellyfish(),
        new Jellyfish(),
        new Jellyfish(),
        new Jellyfish(),
        new Jellyfish(),
        new Jellyfish(),*/
    ]

    bubble = []

    poisonbubble = [
        new Poisonbubble()
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
        this.spawnEnemies();
        this.drawAll();
        this.setWorld();
        this.checkCollision();
        this.shootBubble();
        this.checkBubbleCollision();
    }

    // Um in der Klasse Hero auf world.keyboard zugreifen zu können
    setWorld() {
        this.hero.world = this;
    }


    spawnEnemies() {
        setInterval(() => {
            let pufferfish = new Pufferfish();
            let jellyfish = new Jellyfish();
            this.enemies.push(pufferfish);
            this.enemies.push(jellyfish);
        }, 2000);
    }





    drawAll() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.ctx.translate(this.cameraHero_x, 0)

        this.addObjectToMap(this.background)
        this.addPoisonBubbleToMap(this.poisonbubble)
        this.addHeroToMap(this.hero)
        this.addToMap(this.enemies)
        this.addBubblesToMap(this.bubble)


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

    addBubblesToMap(array) {
        array.forEach(element => {
            element.drawBubble(this.ctx);
            element.drawBubbleHitBox(this.ctx)
        });
    }

    addPoisonBubbleToMap(array) {
        array.forEach(element => {
            element.drawPoisonBubble(this.ctx);
            element.drawPoisonBubbleHitBox(this.ctx)
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
    checkCollision() {
        setInterval(() => {
            this.enemies.forEach(element => {
                for (let i = 0; i < this.bubble.length; i++) {
                    if (this.bubble[i].isColliding(element)) {
                        console.log("got hit")
                    }
                }

                if (this.hero.isInLine(element)) {
                    element.lineOfSight = true;
                } else {
                    element.lineOfSight = false;
                }

                if (this.hero.isColliding(element)) {
                    if (element.tagged == false) {
                        this.hero.hit(element.attack)
                        element.tagged = true
                    }
                    //  this.statusBar.setPercentage(this.hero.energy)
                    if (this.hero.energy == 0) {
                        if (element.attack == 'poison') {
                            this.hero.isDead_poisoned = true;
                        } else if (element.attack == 'electroshock') {
                            this.hero.isDead_electroshock = true;

                        }
                    }
                }
            });
        }, 100);
    }

    checkBubbleCollision() {
     
        setInterval(() => {
       
            this.enemies.forEach(element => {
                for (let i = 0; i < this.bubble.length; i++) {
                  //  console.log(this.bubble)
                  //  console.log(this.bubble[i].positionBubble_x)
                 // console.log(element.positionEnemie_x)
                 /*   if (this.bubble[i].positionBubble_x > element.positionEnemie_x + element.width 
                        || this.bubble[i].positionBubble_x + this.bubble[i].width < element.positionEnemie_x
                        || this.bubble[i].positionBubble_y > element.positionEnemie_< + element.height - 10
                        || this.bubble[i].positionBubble_y + this.bubble[i].height < element.positionEnemie_y) 
                        {
                          
                        } else {
                            console.log("test")
                        }*/
                    if (this.bubble[i].isCollidingBubble(element)) {
                        console.log("hit")
                        element.tagged = true
                        element.gotHit = true;
                        this.bubble.splice(i,1)
                       // this.enemies.splice(element,1)
                    }
                }
            });
        }, 100);
    }

    shootBubble() {
        setInterval(() => {
            if (this.keyboard.SPACE) {
                let bubble = new Bubbleattack(this.hero.positionHero_x + 155, this.hero.positionHero_y + 130)
                this.bubble.push(bubble)
                console.log(bubble)
            }
        }, 100);

    }

} 
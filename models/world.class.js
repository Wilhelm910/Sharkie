class World {

    background = [
        new Water(),
        new ThirdLayer(),
        new SecondLayer(),
        new FirstLayer()
    ];
    hero = new Hero();
    enemies = [];
    endboss = [];
    bubble = [];
    poison = [];
    coins = [];
    healthbar = new Healthbar();
    coinbar = new Coinbar();
    poisonbar = new Poisonbar();
    endscreenLost = new EndscreenLost();
    endscreenWon = new EndscreenWon();
    //herospeed;
    canvas;
    ctx;
    keyboard;
    //camera_x = 0;
    coinCounter = 0;
    bubbleCounter = 0;
    finalScreen = false;
    distance = 0;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.spawnEnemies();
        this.spawnPoison();
        this.spawnCoins();
        this.drawAll();
        this.setWorld();
        this.checkCollision();
        this.shootBubble();
        this.removeObjects(this.enemies);
        this.removeObjects(this.poison);
        this.removeObjects(this.bubble);
        this.checkForEndposition();


        // funkion check endPosition. WEnn ja gamespeed = 0; spawn endboss. Remove restliche gegner, ...
    }


    setWorld() {
        this.hero.world = this;
    }


    checkForEndposition() {
        setInterval(() => {
            if (this.distance > 1500 && this.endboss.length < 1) {
                let endboss = new Endboss();
                this.endboss.push(endboss);
                this.finalScreen = true
                this.enemies = []
            }// else if (world.hero.gameOver) {
               // this.endboss = []
           // }
        }, 100);
    }


    spawnEnemies() {
        setInterval(() => {
            if (!world.hero.gameOver && !this.finalScreen) {
                let pufferfish = new Pufferfish();
                let jellyfish = new Jellyfish();
                this.enemies.push(pufferfish);
                this.enemies.push(jellyfish);
            }
        }, Math.floor(Math.random() * 2000) + 1000);
    }


    spawnCoins() {
        setInterval(() => {
            if (!world.hero.gameOver || this.coinCounter <= 5 || !world.hero.gameWon) {
                this.coinCounter++
                let coin = new Coins();
                this.coins.push(coin);
            } else {
                this.coins = []
            }
        }, Math.floor(Math.random() * 3000) + 3000);
    }


    spawnPoison() {
        setInterval(() => {
            if (!world.hero.gameOver && !world.hero.gameWon && world.hero.bubblesForShoot < 5) {
                let poison = new Poison();
                this.poison.push(poison);
            } else if (world.hero.gameOver) {
                this.poison = []
            } else if (world.endboss[0].isDead) {
                this.poison = []
            }
        }, Math.floor(Math.random() * 2000) + 2000);
    }


    removeObjects(array) {
        setInterval(() => {
            array.forEach(element => {
                if (element.position_x < 0 || element.position_x > 1110) {
                    array.splice(array.indexOf(element), 1)
                }
            });
        }, 100);
    }


    drawAll() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        //  this.ctx.translate(this.camera_x, 0);
        this.addHeroToMap(this.endscreenWon);
        this.addBackgroundToMap(this.background);
        this.addHeroToMap(this.hero);
        this.addToMap(this.endboss);
        this.addHeroToMap(this.healthbar);
        this.addHeroToMap(this.coinbar);
        this.addHeroToMap(this.poisonbar);
        this.addToMap(this.enemies);
        this.addToMap(this.bubble);
        this.addToMap(this.poison);
        this.addToMap(this.coins);
        this.addHeroToMap(this.endscreenLost);
        //  this.ctx.translate(-this.camera_x, 0);
        let self = this;
        requestAnimationFrame(function () {
            self.drawAll();
        });
    }


    addBackgroundToMap(array) {
        if (!this.hero.gameOver) {
            this.distance++
        }
        if (!this.hero.gameWon) {
            array.forEach(element => {
                element.drawBackground(this.ctx, this.distance);
            });
        }
    }


    addToMap(array) {
        array.forEach(element => {
            if (element.mirroredImage) {
                this.flipImage(element)
                element.draw(this.ctx)
            }
            element.draw(this.ctx)
            element.drawHitBox(this.ctx)
            if (element.mirroredImage) {
                this.undoFlipImage(element);
            }
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


    checkCollision() {
        setInterval(() => {
            this.collectingPoison();
            this.collectingCoins();
            this.endbossCollision();
            this.enemieCollision();
            this.bubbleCollisionEndboss()
            this.bubbleCollisionEnemie()
        }, 10);
    }


    collectingPoison() {
        this.poison.forEach(element => {
            if (this.hero.isColliding(element)) {
                if (element.tagged == false) {
                    this.hero.bubblesForShoot++
                    element.tagged = true
                    this.poison.splice(this.poison.indexOf(element), 1)
                }
            }
        });
    }


    collectingCoins() {
        this.coins.forEach(element => {
            if (this.hero.isColliding(element)) {
                if (element.tagged == false) {
                    this.hero.coins++
                    element.tagged = true
                    this.coins.splice(this.coins.indexOf(element), 1)
                }
            }
        });
    }


    endbossCollision() {
        this.endboss.forEach(element => {
            if (this.hero.isInLineEndboss(element)) {
                element.lineOfSight = true;
            } else {
                element.lineOfSight = false;
            }
            if (this.hero.isCollidingEndboss(element)) {
                if (element.tagged == false) {
                    this.hero.hit(element.attack)
                    element.tagged = true;
                    setTimeout(() => {
                        element.tagged = false;
                    }, 1000);
                }
            }
            if (this.hero.energy == 0) {
                this.hero.deadByPoison = true;
            }
        });
    }


    enemieCollision() {
        this.enemies.forEach(element => {
            // for (let i = 0; i < this.bubble.length; i++) {
            //     if (this.bubble[i].isColliding(element)) {
            //     }
            // }
            if (this.hero.isInLine(element)) {
                element.lineOfSight = true;
            } else {
                element.lineOfSight = false;
            }
            if (this.hero.isColliding(element)) {
                if (this.hero.heroFinslap) {
                    element.tagged = true
                    element.gotHit = true;
                }
                if (!element.tagged) {
                    this.hero.hit(element.attack)
                    element.tagged = true
                }
                if (this.hero.energy == 0) {
                    this.initializeDeadAnimation(element);
                }
            }
        });
    }


    initializeDeadAnimation(element) {
        if (element.attack == 'poison') {
            this.hero.deadByPoison = true;
        } else if (element.attack == 'electroshock') {
            this.hero.deadByElectroshock = true;
        }
    }


    bubbleCollisionEndboss() {
        this.endboss.forEach(element => {
            for (let i = 0; i < this.bubble.length; i++) {
                if (this.bubble[i].isCollidingBubble/*2*/(element) && !element.tagged) {
                    element.tagged = true;
                    element.gotHit = true;
                    element.energy--
                    console.log(element.energy)
                    this.bubble.splice(i, 1)
                    element.tagged = false;
                }
            }
        });
    }


    bubbleCollisionEnemie() {
        this.enemies.forEach(element => {
            for (let i = 0; i < this.bubble.length; i++) {
                if (this.bubble[i].isCollidingBubble(element)) {
                    element.tagged = true
                    element.gotHit = true;
                    this.bubble.splice(i, 1)
                }
            }
        });
    }


    shootBubble() {
        setInterval(() => {
            if (this.keyboard.SPACE && this.hero.bubblesForShoot > 0 && !this.hero.bubbleShot) {
                if (world.hero.mirroredImage) {
                    let bubble = new Bubbleattack(this.hero.position_x + 25, this.hero.position_y + 130)
                    this.bubble.push(bubble)
                    this.hero.bubblesForShoot--
                } else if (!world.hero.mirroredImage) {
                    let bubble = new Bubbleattack(this.hero.position_x + 155, this.hero.position_y + 130)
                    this.bubble.push(bubble)
                    this.hero.bubblesForShoot--
                }
            }
        }, 10);
    }

} 
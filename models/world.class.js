class World {
    endboss_sound = new Audio('audio/music_Endboss.mp3');
    poison_sound = new Audio('audio/poison.mp3')
    coin_sound = new Audio('audio/coin.mp3');
    game_sound = new Audio('audio/gamesound.mp3');
    gameover_sound = new Audio('audio/gameover.mp3');
    gamewon_sound = new Audio('audio/gamewon.mp3')

    hero = new Hero();
    background = [
        new Water(),
        new ThirdLayer(),
        new SecondLayer(),
        new FirstLayer()
    ];
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
    rotateIcon = new RotateIcon();
    canvas;
    ctx;
    keyboard;
    coinCounter = 0;
    bubbleCounter = 0;
    finalScreen = false;
    newGame = false;
    bubbleTimer = false;
    movingBubble = false;


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.spawnJellyfish();
        this.spawnPufferfish();
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
        this.playMusic();
        this.returnToMainMenu();
    }

/**
 * 
 * This function is used to stop all game necessary functions when in main menu
 * 
 */
    returnToMainMenu() {
        setInterval(() => {
            if (mainMenu) {
                this.clearIntervals();
                this.stopMusic();
                this.clearArrays();
            }
        }, 100);
    }

/**
 * 
 * This function is used to clear all intervals
 * 
 */
    clearIntervals() {
        for (let i = 1; i < 9999; i++) window.clearInterval(i);
    }

/**
 * 
 * This function is used to clear all arrays
 * 
 */
    clearArrays() {
        this.endboss = [];
        this.enemies = [];
        this.coins = [];
        this.background = [];
        this.poison = [];
        this.bubble = [];
    }

/**
 * 
 * This function is used to get access to all parameters in world
 * 
 */
    setWorld() {
        this.hero.world = this;
    }

    
/**
 * 
 * This function is used to clear all arrays
 * 
 */
    checkForEndposition() {
        setInterval(() => {
            if (this.hero.distance > world.hero.endPosition && this.endboss.length < 1 && !this.hero.gameWon) {
                let endboss = new Endboss();
                this.endboss.push(endboss);
                this.finalScreen = true
                this.enemies = []
            } else if (this.endboss.length == 1) {
                if (this.endboss.isDead) {
                    this.poison = []
                }
            }
        }, 100);
    }

/**
 * 
 * This function is used crate jellyfishs at a random time and push them into array
 * 
 */
    spawnJellyfish() {
        setInterval(() => {
            if (!world.hero.gameOver && !this.finalScreen) {
                let jellyfish = new Jellyfish();
                this.enemies.push(jellyfish);
            }
        }, Math.floor(Math.random() * 2000) + 2000);
    }

/**
 * 
 * This function is used crate pufferfishs at a random time and push them into array
 * 
 */
    spawnPufferfish() {
        setInterval(() => {
            if (!world.hero.gameOver && !this.finalScreen) {
                let pufferfish = new Pufferfish();
                this.enemies.push(pufferfish);
            }
        }, Math.floor(Math.random() * 1000) + 1000);
    }

/**
 * 
 * This function is used crate coins at a random time and push them into array
 * 
 */
    spawnCoins() {
        setInterval(() => {
            if (!world.hero.gameOver && this.coinCounter <= 5 && !world.hero.gameWon) {
                this.coinCounter++
                let coin = new Coins();
                this.coins.push(coin);
            }
            if (world.hero.gameOver || this.coinCounter > 5 || world.hero.gameWon || this.endboss.length > 0) {
                this.coins = []
            }
        }, Math.floor(Math.random() * 3000) + 3000);
    }

/**
 * 
 * This function is used crate poison at a random time and push them into array
 * 
 */
    spawnPoison() {
        setInterval(() => {
            if (world.hero.gameOver || world.hero.gameWon) {
                this.poison = []
            }
        }, 500);
        setInterval(() => {
            if (!world.hero.gameOver && !world.hero.gameWon && world.hero.bubblesForShoot < 5) {
                let poison = new Poison();
                this.poison.push(poison);
            }
        }, Math.floor(Math.random() * 2000) + 2000);
    }

/**
 * 
 * This function is used to remove all enemies when fighting against endboss
 * 
 * @param {array} array 
 */
    removeObjects(array) {
        setInterval(() => {
            array.forEach(element => {
                if (element.position_x < 0 || element.position_x > 1110) {
                    array.splice(array.indexOf(element), 1)
                }
            });
        }, 100);
    }

/**
 * 
 * This function is used to draw the content on canvas
 * 
 */
    drawAll() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.addHeroToMap(this.endscreenWon);
        this.addBackgroundToMap(this.background);
        this.addHeroToMap(this.hero);
        this.addToMap(this.endboss);
        this.addHeroToMap(this.rotateIcon);
        this.addHeroToMap(this.healthbar);
        this.addHeroToMap(this.coinbar);
        this.addHeroToMap(this.poisonbar);
        this.addToMap(this.enemies);
        this.addToMap(this.bubble);
        this.addToMap(this.poison);
        this.addToMap(this.coins);
        this.addHeroToMap(this.endscreenLost);
        let self = this;
        requestAnimationFrame(function () {
            self.drawAll();
        });
    }

/**
 * 
 * This function is used to draw the background on canvas
 * 
 */
    addBackgroundToMap(array) {
        if (!this.hero.gameOver) {
            this.hero.distance++
        }
        if (!this.hero.gameWon) {
            array.forEach(element => {
                element.drawBackground(this.ctx);
            });
        }
    }

/**
 * 
 * This function is used to draw the enemies and other moving objects on canvas
 * 
 */
    addToMap(array) {
        array.forEach(element => {
            if (element.mirroredImage) {
                this.flipImage(element)
                element.draw(this.ctx)
            }
            element.draw(this.ctx)
            // element.drawHitBox(this.ctx)
            if (element.mirroredImage) {
                this.undoFlipImage(element);
            }
        });
    }

/**
 * 
 * This function is used to draw the hero on canvas
 * 
 */
    addHeroToMap(element) {
        if (element.mirroredImage) {
            this.flipImage(element)
            element.draw(this.ctx)
        }
        element.draw(this.ctx)
        if (element.mirroredImage) {
            this.undoFlipImage(element);
        }
    }

/**
 * 
 * This function is used to change hero viewing direction
 * 
 */
    flipImage(element) {
        this.ctx.save();
        this.ctx.translate(element.width, 0);
        this.ctx.scale(-1, 1);
        element.position_x = element.position_x * -1;
    }

/**
 * 
 * This function is used to change hero viewing direction
 * 
 */
    undoFlipImage(element) {
        element.position_x = element.position_x * -1;
        this.ctx.restore();
    }

/**
 * 
 * This function is used to check different collisions
 * 
 */
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

/**
 * 
 * This function is used to collection poison with the hero
 * 
 */
    collectingPoison() {
        this.poison.forEach(element => {
            if (this.hero.isColliding(element)) {
                if (element.tagged == false && this.hero.bubblesForShoot < 5) {
                    if (sound) { this.poison_sound.play(); }
                    this.hero.bubblesForShoot++
                    element.tagged = true
                    this.poison.splice(this.poison.indexOf(element), 1)
                    setTimeout(() => {
                        this.poison_sound.pause();
                        this.poison_sound.currentTime = 0;
                    }, 600);
                }
            }
        });
    }

/**
 * 
 * This function is used to collection coins with the hero
 * 
 */
    collectingCoins() {
        this.coins.forEach(element => {
            if (this.hero.isColliding(element)) {
                if (element.tagged == false) {
                    if (sound) {
                        this.coin_sound.play();
                    }
                    this.hero.coins++
                    element.tagged = true
                    this.coins.splice(this.coins.indexOf(element), 1)
                }
            }
        });
    }

/**
 * 
 * This function is used to check collision with the endboss
 * 
 */
    endbossCollision() {
        this.endboss.forEach(element => {
            if (this.hero.isInLineEndboss(element))
                element.lineOfSight = true;
            else
                element.lineOfSight = false;
            if (this.hero.isCollidingEndboss(element))
                this.heroCollisionEndboss(element);
            if (this.hero.energy == 0)
                this.hero.deadByPoison = true;
        });
    }

/**
 * 
 * This function is used to check collision with the endboss
 * 
 */
    heroCollisionEndboss(element) {
        if (element.tagged == false) {
            this.hero.hit(element.attack)
            element.tagged = true;
            setTimeout(() => {
                element.tagged = false;
            }, 1000);
        }
    }

/**
 * 
 * This function is used to check collision with the enemies
 * 
 */
    enemieCollision() {
        this.enemies.forEach(element => {
            if (this.hero.isInLine(element))
                element.lineOfSight = true;
            else
                element.lineOfSight = false;
            if (this.hero.isColliding(element))
                this.heroCollisionEnemie(element);
            if (this.hero.gameOver)
                element.tagged = true;
        });
    }

/**
 * 
 * This function is used to check collision with the endboss
 * 
 */
    heroCollisionEnemie(element) {
        if (this.hero.heroFinslap) {
            element.tagged = true
            element.gotHit = true;
        }
        if (!element.tagged) {
            this.hero.hit(element.attack)
            element.tagged = true
        }
        if (this.hero.energy == 0)
            this.initializeDeadAnimation(element);
    }

/**
 * 
 * This function is used to get the dead animation for hero depending on last hit
 * 
 */
    initializeDeadAnimation(element) {
        if (element.attack == 'poison') {
            this.hero.deadByPoison = true;
        } else if (element.attack == 'electroshock') {
            this.hero.deadByElectroshock = true;
        }
    }

/**
 * 
 * This function is used to check collision endboss with hero bubble attack
 * 
 */
    bubbleCollisionEndboss() {
        this.endboss.forEach(element => {
            for (let i = 0; i < this.bubble.length; i++) {
                if (this.bubble[i].isCollidingBubble(element) && !element.tagged) {
                    element.tagged = true;
                    element.gotHit = true;
                    element.energy--
                    this.bubble.splice(i, 1)
                    element.tagged = false;
                }
            }
        });
    }

/**
 * 
 * This function is used to check collision enemies with hero bubble attack
 * 
 */
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

/**
 * 
 * This function is used to coordinate the hero bubble attack
 * 
 */
    shootBubble() {
        setInterval(() => {
            if (this.keyboard.SPACE && this.hero.bubblesForShoot > 0 && this.hero.bubbleShot) {
                if (!this.bubbleTimer) {
                    this.bubbleTimer = true;
                    if (world.hero.mirroredImage)
                        this.shootBubbleToLeft();
                    else if (!world.hero.mirroredImage)
                        this.shootBubbleToRight();
                    setTimeout(() => {
                        this.bubbleTimer = false;
                    }, 1000);
                }
            }
        }, 10);
    }

/**
 * 
 * This function is used to shoot the bubble to left when hero view is left
 * 
 */
    shootBubbleToLeft() {
        let bubble = new Bubbleattack(this.hero.position_x + 25, this.hero.position_y + 130)
        this.bubble.push(bubble)
        this.hero.bubblesForShoot--
        setTimeout(() => {
            this.movingBubble = true;
        }, 1000);
    }

/**
 * 
 * This function is used to shoot the bubble to right when hero view is right
 * 
 */
    shootBubbleToRight() {
        let bubble = new Bubbleattack(this.hero.position_x + 155, this.hero.position_y + 130)
        this.bubble.push(bubble)
        this.hero.bubblesForShoot--
        setTimeout(() => {
            this.movingBubble = true;
        }, 1000);
    }

/**
 * 
 * This function is used to stop music
 * 
 */
    stopMusic() {
        this.game_sound.pause();
        this.endboss_sound.pause();
        this.gamewon_sound.pause();
        this.gameover_sound.pause();
    }

/**
 * 
 * This function is used to play music
 * 
 */
    playMusic() {
        setInterval(() => {
            if (sound)
                this.playSounds();
            else if (!sound)
                this.dontPlaySounds();
        }, 100);
    }

/**
 * 
 * This function is used to play sounds
 * 
 */
    playSounds() {
        if (this.hero.distance < world.hero.endPosition)
            this.game_sound.play();
        if (this.hero.distance > world.hero.endPosition)
            this.endpositionSound();
        if (this.hero.gameOver)
            this.actionsGameOverSounds();
        if (this.hero.gameWon)
            this.actionsGameWonSounds();
    }

/**
 * 
 * This function is used to play sound for endboss fight
 * 
 */
    endpositionSound() {
        this.game_sound.pause();
        this.endboss_sound.play();
    }

/**
 * 
 * This function is used to stop music
 * 
 */
    dontPlaySounds() {
        this.endboss_sound.pause();
        this.game_sound.pause();
        this.gamewon_sound.pause();
        this.gameover_sound.pause();
    }

/**
 * 
 * This function is used to initialize functions when the game is lost
 * 
 */
    actionsGameOverSounds() {
        this.game_sound.pause();
        this.endboss_sound.pause();
        this.gameover_sound.play();
        setTimeout(() => {
            this.gameover_sound.pause();
            this.gameover_sound.currentTime = 0;
        }, 4000);
    }

/**
 * 
 * This function is used to initialize functions when the game is won
 * 
 */
    actionsGameWonSounds() {
        this.endboss_sound.pause();
        this.gamewon_sound.play();
    }

} 
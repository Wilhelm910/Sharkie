class Hero extends MovingObjects {
    pufferfish_sound = new Audio('audio/pufferfish.mp3');
    shooting_bubble_sound = new Audio('audio/shooting_bubble.mp3');
    electroshock_sound = new Audio('audio/electroshock.mp3');
    // test = new Audio('audio/test.wav');
    world;
    //speed = 5;
    bubbleShot = false;
    deadByPoison = false;
    deadByElectroshock = false;
    deadByNormal = false;
    bubblesForShoot = 10;
    heroFinslap = false;
    coins = 0;
    gameWon = false;
    IMAGES_IDLE = [
        'img/1.Sharkie/1.IDLE/1.png',
        'img/1.Sharkie/1.IDLE/2.png',
        'img/1.Sharkie/1.IDLE/3.png',
        'img/1.Sharkie/1.IDLE/4.png',
        'img/1.Sharkie/1.IDLE/5.png',
        'img/1.Sharkie/1.IDLE/6.png',
        'img/1.Sharkie/1.IDLE/7.png',
        'img/1.Sharkie/1.IDLE/8.png',
        'img/1.Sharkie/1.IDLE/9.png',
        'img/1.Sharkie/1.IDLE/10.png',
        'img/1.Sharkie/1.IDLE/11.png',
        'img/1.Sharkie/1.IDLE/12.png',
        'img/1.Sharkie/1.IDLE/13.png',
        'img/1.Sharkie/1.IDLE/14.png',
        'img/1.Sharkie/1.IDLE/15.png',
        'img/1.Sharkie/1.IDLE/16.png',
        'img/1.Sharkie/1.IDLE/17.png',
        'img/1.Sharkie/1.IDLE/18.png'
    ]

    IMAGES_SWIM = [
        'img/1.Sharkie/3.Swim/1.png',
        'img/1.Sharkie/3.Swim/2.png',
        'img/1.Sharkie/3.Swim/3.png',
        'img/1.Sharkie/3.Swim/4.png',
        'img/1.Sharkie/3.Swim/5.png',
        'img/1.Sharkie/3.Swim/6.png'
    ]

    IMAGES_POISONED = [
        'img/1.Sharkie/5.Hurt/1.Poisoned/1.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/2.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/3.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/4.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/5.png',
    ]

    IMAGES_ELECTROSHOCK = [
        'img/1.Sharkie/5.Hurt/2.Electric shock/1.png',
        'img/1.Sharkie/5.Hurt/2.Electric shock/2.png',
        'img/1.Sharkie/5.Hurt/2.Electric shock/3.png'
    ]

    IMAGES_NORMAL = [
        'img/1.Sharkie/5.Hurt/1.Poisoned/1.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/3.png'
    ]

    IMAGES_DEAD_POISONED = [
        'img/1.Sharkie/6.dead/1.Poisoned/1.png',
        'img/1.Sharkie/6.dead/1.Poisoned/2.png',
        'img/1.Sharkie/6.dead/1.Poisoned/3.png',
        'img/1.Sharkie/6.dead/1.Poisoned/4.png',
        'img/1.Sharkie/6.dead/1.Poisoned/5.png',
        'img/1.Sharkie/6.dead/1.Poisoned/6.png',
        'img/1.Sharkie/6.dead/1.Poisoned/7.png',
        'img/1.Sharkie/6.dead/1.Poisoned/8.png',
        'img/1.Sharkie/6.dead/1.Poisoned/9.png',
        'img/1.Sharkie/6.dead/1.Poisoned/10.png',
        'img/1.Sharkie/6.dead/1.Poisoned/11.png',
        'img/1.Sharkie/6.dead/1.Poisoned/12.png'
    ]

    IMAGES_DEAD_ELECTROSHOCK = [
        'img/1.Sharkie/6.dead/2.Electro_shock/1.png',
        'img/1.Sharkie/6.dead/2.Electro_shock/2.png',
        'img/1.Sharkie/6.dead/2.Electro_shock/3.png',
        'img/1.Sharkie/6.dead/2.Electro_shock/4.png',
        'img/1.Sharkie/6.dead/2.Electro_shock/5.png',
        'img/1.Sharkie/6.dead/2.Electro_shock/6.png',
        'img/1.Sharkie/6.dead/2.Electro_shock/7.png',
        'img/1.Sharkie/6.dead/2.Electro_shock/8.png',
        'img/1.Sharkie/6.dead/2.Electro_shock/9.png',
        'img/1.Sharkie/6.dead/2.Electro_shock/10.png',
    ]

    IMAGES_BUBBLEATTACK = [
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/1.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/2.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/3.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/4.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/5.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/6.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/7.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/8.png',
    ]

    IMAGES_FINSLAP = [
        'img/1.Sharkie/4.Attack/Fin slap/1.png',
        // 'img/1.Sharkie/4.Attack/Fin slap/2.png',
        // 'img/1.Sharkie/4.Attack/Fin slap/3.png',
        'img/1.Sharkie/4.Attack/Fin slap/4.png',
        'img/1.Sharkie/4.Attack/Fin slap/5.png',
        'img/1.Sharkie/4.Attack/Fin slap/6.png',
        'img/1.Sharkie/4.Attack/Fin slap/7.png',
        'img/1.Sharkie/4.Attack/Fin slap/8.png'
    ]


    constructor() {
        super().loadImage(this.IMAGES_IDLE[0]);
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_SWIM);
        this.loadImages(this.IMAGES_POISONED);
        this.loadImages(this.IMAGES_ELECTROSHOCK);
        this.loadImages(this.IMAGES_DEAD_POISONED);
        this.loadImages(this.IMAGES_DEAD_ELECTROSHOCK);
        this.loadImages(this.IMAGES_BUBBLEATTACK);
        this.loadImages(this.IMAGES_FINSLAP);
        this.loadImages(this.IMAGES_NORMAL);
        this.position_x = 200;
        this.position_y = 200;
        this.width = 815 / 4
        this.height = 1000 / 4
        this.energy = 100;
        this.animate();
        this.bubbleAttack();
    }



    animate() {
        setInterval(() => {

            if (!this.deadByPoison && !this.deadByNormal && !this.deadByElectroshock) {
                if (!this.gameWon) {
                    if (this.world.hero.world.keyboard.RIGHT) {
                        this.swimRight();
                    }
                    if (this.world.hero.world.keyboard.LEFT) {
                        this.swimLeft();
                        this.mirroredImage = true;

                    }
                    if (this.world.hero.world.keyboard.UP) {
                        this.swimUp();
                        this.swimmingUp = true;

                    }
                    if (this.world.hero.world.keyboard.DOWN) {
                        this.swimDown();
                        this.swimmingDown = true;

                    }
                }

            }

            // Hiermit kann ich das Bild auf dem Helden mittig zentrieren
            //this.world.camera_x = -this.position_x
        }, 1000 / 60);

        setInterval(() => {
            if (!this.deadByPoison && !this.deadByNormal && !this.deadByElectroshock) {
                this.aliveAnimations();
            } else {
                this.deadAnimations();
            }
        }, 1000 / 7);
    }

    aliveAnimations() {
        if (!this.gameWon) {
            if (this.isHurtPoison()) {
                this.playAnimation(this.IMAGES_POISONED);
                this.pufferfish_sound.play();
            }
            else if (this.isHurtElectroshock()) {
                this.playAnimation(this.IMAGES_ELECTROSHOCK);
                this.electroshock_sound.currentTime = 1;
                this.electroshock_sound.play();
                setTimeout(() => {
                    this.electroshock_sound.pause();
                }, 500);
            }
            else if (this.isHurtNormal()) {
                this.playAnimation(this.IMAGES_NORMAL);
            }
            else if (this.moving()) {
                this.playAnimation(this.IMAGES_SWIM)
            }
            else if (this.world.hero.world.keyboard.D && !this.heroFinslap) {
                this.finAttack();
            }
            else if (this.world.hero.world.keyboard.SPACE && this.bubblesForShoot > 0 && !this.bubbleShot) {
                this.bubbleShot = true;

            }
            else {
                this.playAnimation(this.IMAGES_IDLE)
            }
        } else {
            this.playAnimation(this.IMAGES_IDLE)
        }
    }

    deadAnimations() {
        if (this.deadByPoison) {
            this.playAnimation(this.IMAGES_DEAD_POISONED);
            this.gameOver = true;
            this.swimUp();
            this.gamespeed = 0;
        } else if (this.deadByElectroshock) {
            this.playAnimation(this.IMAGES_DEAD_ELECTROSHOCK);
            this.gameOver = true;
            this.swimDown();
            this.gamespeed = 0;
        } else if (this.deadByNormal) {
            this.playAnimation(this.IMAGES_DEAD_POISONED);
            this.gameOver = true;
            this.swimUp();
            this.gamespeed = 0;
        }
        setTimeout(() => {
            // document.getElementById('end-screen').classList.remove('d-none')
        }, 3);
    }

    finAttack() {
        this.heroFinslap = true;
        this.playAnimation(this.IMAGES_FINSLAP);
        setTimeout(() => {
            this.heroFinslap = false;
        }, 100);
    }

    bubbleAttack() {
        setInterval(() => {
            if (this.bubbleShot) {
                this.playAnimation(this.IMAGES_BUBBLEATTACK);
                this.shooting_bubble_sound.play();
                setTimeout(() => {
                    this.bubbleShot = false;
                    this.shooting_bubble_sound.pause();
                    this.shooting_bubble_sound.currentTime = 0;
                }, 400);
            }
        }, 1000 / 7);


    }

    moving() {
        return this.world.hero.world.keyboard.RIGHT ||
            this.world.hero.world.keyboard.LEFT ||
            this.world.hero.world.keyboard.UP ||
            this.world.hero.world.keyboard.DOWN
    }
}
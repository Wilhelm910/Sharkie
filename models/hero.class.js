class Hero extends MovingObjects {

    world;
    //speed = 5;
    energy = 100;
    deadByPoison = false;
    deadByElectroshock = false;
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

    constructor() {
        super().loadImage(this.IMAGES_IDLE[0]);
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_SWIM);
        this.loadImages(this.IMAGES_POISONED);
        this.loadImages(this.IMAGES_ELECTROSHOCK);
        this.loadImages(this.IMAGES_DEAD_POISONED);
        this.loadImages(this.IMAGES_DEAD_ELECTROSHOCK);
        this.positionHero_x = 200;
        this.positionHero_y = 200;
        this.width = 815 / 4
        this.height = 1000 / 4
        this.animate();

    }


    animate() {
        setInterval(() => {
            if (this.world.hero.world.keyboard.RIGHT) {
                this.swimRight();
            }
            if (this.world.hero.world.keyboard.LEFT) {
                this.swimLeft();
                this.mirroredImage = true;
            }
            if (this.world.hero.world.keyboard.UP) {
                this.swimUp();
                // this.swimmingUp = true;
            }
            if (this.world.hero.world.keyboard.DOWN) {
                this.swimDown();
                // this.swimmingDown = true;
            }
            this.world.camera_x = -this.positionHero_x
        }, 1000 / 60);

        setInterval(() => {
            if (!this.isDead_poisoned && !this.isDead_electroshock) {
                if (this.isHurtPoison()) {
                    this.playAnimation(this.IMAGES_POISONED);
                }
                else if (this.isHurtElectroshock()) {
                    console.log(this.IMAGES_ELECTROSHOCK)
                    this.playAnimation(this.IMAGES_ELECTROSHOCK);
                }
                else if (this.world.hero.world.keyboard.RIGHT ||
                    this.world.hero.world.keyboard.LEFT ||
                    this.world.hero.world.keyboard.UP ||
                    this.world.hero.world.keyboard.DOWN) {
                    this.playAnimation(this.IMAGES_SWIM)
                } else {
                    this.playAnimation(this.IMAGES_IDLE)
                }
            } else {
                if (this.isDead_poisoned) {
                    this.playAnimation(this.IMAGES_DEAD_POISONED);
                    this.gameOver = true;
                    gamespeed = 0;
                } else {
                    this.playAnimation(this.IMAGES_DEAD_ELECTROSHOCK);
                    this.gameOver = true;
                    gamespeed = 0;
                }

            }


        }, 1000 / 7);
    }
}
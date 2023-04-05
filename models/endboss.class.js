class Endboss extends MovingObjects {
    swimming_sound = new Audio('audio/swimming.mp3');

    isDead = false;
    introduced = false;
    turnRight = false;

    IMAGES_FLOATING = [
        'img/2.Enemy/3 Final Enemy/2.floating/1.png',
        'img/2.Enemy/3 Final Enemy/2.floating/2.png',
        'img/2.Enemy/3 Final Enemy/2.floating/3.png',
        'img/2.Enemy/3 Final Enemy/2.floating/4.png',
        'img/2.Enemy/3 Final Enemy/2.floating/5.png',
        'img/2.Enemy/3 Final Enemy/2.floating/6.png',
        'img/2.Enemy/3 Final Enemy/2.floating/7.png',
        'img/2.Enemy/3 Final Enemy/2.floating/8.png',
        'img/2.Enemy/3 Final Enemy/2.floating/9.png',
        'img/2.Enemy/3 Final Enemy/2.floating/10.png',
        'img/2.Enemy/3 Final Enemy/2.floating/11.png',
        'img/2.Enemy/3 Final Enemy/2.floating/12.png',
        'img/2.Enemy/3 Final Enemy/2.floating/13.png'
    ]

    IMAGES_INTRODUCE = [
        'img/2.Enemy/3 Final Enemy/1.Introduce/1.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/2.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/3.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/4.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/5.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/6.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/7.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/8.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/9.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/10.png',
    ]

    IMAGES_ATTACK = [
        'img/2.Enemy/3 Final Enemy/Attack/1.png',
        'img/2.Enemy/3 Final Enemy/Attack/2.png',
        'img/2.Enemy/3 Final Enemy/Attack/3.png',
        'img/2.Enemy/3 Final Enemy/Attack/4.png',
        'img/2.Enemy/3 Final Enemy/Attack/5.png',
        'img/2.Enemy/3 Final Enemy/Attack/6.png'
    ]

    IMAGES_HURT = [
        'img/2.Enemy/3 Final Enemy/Hurt/1.png',
        'img/2.Enemy/3 Final Enemy/Hurt/2.png',
        'img/2.Enemy/3 Final Enemy/Hurt/3.png',
        'img/2.Enemy/3 Final Enemy/Hurt/4.png'
    ]

    IMAGES_DEAD = [
        'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 6.png',
        'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 7.png',
        'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 8.png',
        'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 8.png',
        'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 9.png',
        'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 9.png',
        'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 8.png',
        'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 8.png',
        'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 9.png',
        'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 9.png'
    ]

    constructor() {
        super().loadImage(this.IMAGES_INTRODUCE[0]);
        this.loadImages(this.IMAGES_FLOATING);
        this.loadImages(this.IMAGES_INTRODUCE);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.position_x = 700;
        this.position_y = 0;
        this.width = 1041 / 3;
        this.height = 1216 / 3;
        this.attack = 'normal';
        this.energy = 2;
        this.animate();
    }


/**
 * 
 * This function is used to animate the movement
 * 
 */
    animate() {
        setInterval(() => {
            this.endbossMovement();
        }, 1000 / 60);


        setInterval(() => {
            this.endbossAnimations();
        }, 1000 / 6);
    }

/**
 * 
 * This function is used to initialize the endboss movement
 * 
 */
    endbossMovement() {
        this.swimming_sound.pause();
        if (!world.hero.gameOver) {
            if (this.energy < 0)
                this.endbossIsDead();
            if (this.introduced && this.lineOfSight && this.position_x > 0 && !this.turnRight)
                this.swimToLeft();
            else if (this.turnRight && this.lineOfSight)
                this.swimToRight();
            if (this.introduced && !this.lineOfSight && !this.isDead)
                this.moveInDirectionOfHero();
        }
    }

/**
 * 
 * This function is used to let the endboss move in direction of hero
 * 
 */
    moveInDirectionOfHero() {
        setTimeout(() => {
            if (sound) {
                this.swimming_sound.play();
            }
            this.attackHero();
        }, 2000);
    }

/**
 * 
 * This function is used to let the endboss move to the right
 * 
 */
    swimToRight() {
        this.swimRightEndboss();
        if (sound) {
            this.swimming_sound.play();
        }
        this.mirroredImage = true;
        if (this.position_x > 750) {
            this.turnRight = false;
            this.mirroredImage = false;
        }
    }

/**
 * 
 * This function is used to let the endboss move to the left
 * 
 */
    swimToLeft() {
        this.swimLeftEndboss();
        if (sound) {
            this.swimming_sound.play();
        }
        if (this.position_x < 0) {
            this.turnRight = true;
        }
    }

/**
 * 
 * This function is used to get the dead movement for endboss
 * 
 */
    endbossIsDead() {
        if (sound) {
            this.swimming_sound.pause();
        }
        this.swimUpEndboss();
    }

/**
 * 
 * This function is used to animate the movement
 * 
 */
    endbossAnimations() {
        if (!world.hero.gameOver) {
            if (this.energy < 0 && !this.isDead)
                this.deadAnimations();
            else if (this.gotHit)
                this.hurtAnimations();
            else if (!this.introduced)
                this.introduceAnimations();
            else if (this.lineOfSight && this.introduced)
                this.playAnimation(this.IMAGES_ATTACK);
            else
                this.playAnimation(this.IMAGES_FLOATING);
        }
    }

/**
 * 
 * This function is used to animate the movement
 * 
 */
    deadAnimations() {
        this.playAnimation(this.IMAGES_DEAD);
        if (sound) {
            this.swimming_sound.pause();
        }
        setTimeout(() => {
            world.hero.gameWon = true;
            this.isDead = true;
        }, 1500);
    }

/**
 * 
 * This function is used to animate the movement
 * 
 */
    hurtAnimations() {
        this.playAnimation(this.IMAGES_HURT);
        setTimeout(() => {
            this.gotHit = false;
        }, 1000);
    }

/**
 * 
 * This function is used to animate the movement
 * 
 */    
    introduceAnimations() {
        this.playAnimation(this.IMAGES_INTRODUCE);
        setTimeout(() => {
            this.introduced = true;
        }, 1000);
    }
}
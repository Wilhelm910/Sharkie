class Endboss extends MovingObjects {
    endboss_sound = new Audio('audio/music_Endboss.mp3');
    isDead = false;
    introduced = false;
    //  lineOfSight = false;
    turnRight = false;
    //  tagged = false;
    //  gotHit = false;
    //  energy = 2;
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

    animate() {

        setInterval(() => {
            this.endboss_sound.play();
            if (!world.hero.gameOver) {
                if (this.energy < 0) {
                    this.swimUpEndboss();
                    this.endboss_sound.pause();
                }
               
                if (this.introduced && this.lineOfSight && this.position_x > 0 && !this.turnRight) {
                    this.swimLeftEndboss();
                  
                    if (this.position_x < 0) {
                        this.turnRight = true;
                    }
                } else if (this.turnRight && this.lineOfSight) {
                    this.swimRightEndboss();
                  
                    this.mirroredImage = true;
                    if (this.position_x > 750) {
                        this.turnRight = false;
                        this.mirroredImage = false;
                    }
                }
                if (this.introduced && !this.lineOfSight) {
                  
                    setTimeout(() => {
                        this.attackHero();
                    }, 2000);
                }

            }
        }, 1000 / 60);


        setInterval(() => {
            if (!world.hero.gameOver) {
                if (this.energy < 0 && !this.isDead) {
                    this.playAnimation(this.IMAGES_DEAD);
                    
                    setTimeout(() => {
                        world.hero.gameWon = true;
                        this.isDead = true;
                    }, 2000); 
                } else if (this.gotHit) {
                    this.playAnimation(this.IMAGES_HURT);

                    setTimeout(() => {
                        this.gotHit = false;
                    }, 1000);
                } else if (!this.introduced) {
                    this.playAnimation(this.IMAGES_INTRODUCE);
                    setTimeout(() => {
                        this.introduced = true;
                    }, 1000);
                } else if (this.lineOfSight && this.introduced) {
                    this.playAnimation(this.IMAGES_ATTACK);
                } else {
                    this.playAnimation(this.IMAGES_FLOATING);
                }

            }
        }, 1000 / 6);

    }
}
class Hero extends MovingObjects {

    world;
    //speed = 5;

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

    constructor() {
        super().loadImage(this.IMAGES_IDLE[0]);
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_SWIM);
        this.positionHero_x = 200;
        this.position_y = 200;
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
                this.swimmingUp = true;
            }
            if (this.world.hero.world.keyboard.DOWN) {
                this.swimDown();
                this.swimmingDown = true;
            }
            this.world.camera_x = -this.position_x 
        }, 1000 / 60);

        setInterval(() => {
            if (this.world.hero.world.keyboard.RIGHT || this.world.hero.world.keyboard.LEFT) {
                this.playAnimation(this.IMAGES_SWIM)
            } else {
                this.playAnimation(this.IMAGES_IDLE)
            }
            
        }, 1000 / 7);
    }
}
class Jellyfish extends MovingObjects {
    world;
    IMAGES_SWIM = [
        'img/2.Enemy/2 Jelly fish/1.Swim/Yellow 1.png',
        'img/2.Enemy/2 Jelly fish/1.Swim/Yellow 2.png',
        'img/2.Enemy/2 Jelly fish/1.Swim/Yellow 3.png',
        'img/2.Enemy/2 Jelly fish/1.Swim/Yellow 4.png'
    ]

    IMAGES_DEAD_JELLYFISH = [
        'img/2.Enemy/2 Jelly fish/2.Dead/Yellow/y1.png',
        'img/2.Enemy/2 Jelly fish/2.Dead/Yellow/y2.png',
        'img/2.Enemy/2 Jelly fish/2.Dead/Yellow/y3.png',
        'img/2.Enemy/2 Jelly fish/2.Dead/Yellow/y4.png'
    ]


    constructor() {
        super().loadImage(this.IMAGES_SWIM[0]);
        this.loadImages(this.IMAGES_SWIM);
        this.loadImages(this.IMAGES_DEAD_JELLYFISH);
        this.position_x = 1100;
        this.position_y = Math.floor(Math.random() * 470) + 40;
        this.width = 211 / 4
        this.height = 300 / 4
        this.attack = 'electroshock';
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.jellyfishMovement();
        }, 1000 / 60);
        setInterval(() => {
            this.jellyfishAnimations();
        }, 1000 / 7);
    }


    jellyfishMovement() {
        if (this.gotHit)
            this.swimUpEnemie();
        else
            this.swimLeftEnemie();
    }


    jellyfishAnimations() {
        if (this.gotHit)
            this.playAnimation(this.IMAGES_DEAD_JELLYFISH);
        else
            this.playAnimation(this.IMAGES_SWIM);
    }
}


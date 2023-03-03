class Pufferfish extends MovingObjects {
    world;
    IMAGES_SWIM = [
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim5.png'
    ];

    IMAGES_DEAD_PUFFERFISH = [
        'img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1.Dead1.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1.Dead1.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1.Dead1.png'
    ];

    IMAGES_TRANSITION = [
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition1.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition2.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition4.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition5.png'

    ]

    IMAGES_BUBBLESWIM = [
        'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim1.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim2.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim4.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim5.png'
    ]


    constructor() {
        super().loadImage(this.IMAGES_SWIM[0]);
        this.loadImages(this.IMAGES_SWIM);
        this.loadImages(this.IMAGES_DEAD_PUFFERFISH);
        this.loadImages(this.IMAGES_TRANSITION);
        this.loadImages(this.IMAGES_BUBBLESWIM);
        this.position_x = 1100
        this.position_y = Math.floor(Math.random() * 470) + 40;
        this.width = 241 / 4
        this.height = 198 / 4
        this.attack = 'poison';
        this.animate();
    }


    animate() {
        setInterval(() => {
            if (this.gotHit) {
                this.swimUpEnemie();
            } else {
                this.swimLeftEnemie();
            }
        }, 1000 / 60);
        setInterval(() => {
            if (this.gotHit) {
                this.playAnimation(this.IMAGES_DEAD_PUFFERFISH);
            } else if (this.lineOfSight) {
                this.playAnimation(this.IMAGES_TRANSITION);
                this.playAnimation(this.IMAGES_BUBBLESWIM);
            }  else {
                this.playAnimation(this.IMAGES_SWIM);
            }
        }, 1000 / 10);
    }
}
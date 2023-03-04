class Bubbleattack extends MovingObjects {
    IMAGES_BUBBLE = [
        'img/1.Sharkie/4.Attack/Bubble trap/Bubble.png',
        'img/1.Sharkie/4.Attack/Bubble trap/Bubble.png',
        'img/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png',
        'img/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png'
    ]


    constructor(position_x, position_y) {
        super().loadImage(this.IMAGES_BUBBLE[0])
        this.loadImages(this.IMAGES_BUBBLE);
        this.width = 172 / 4;
        this.height = 171 / 4;
        this.position_x = position_x;
        this.position_y = position_y;
        this.bubbleSpeed = 5;
        this.acceleration = 0.5;
        this.animate();
        this.throw();
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_BUBBLE);
        }, 1000 / 10);
    }


    throw() {
        setInterval(() => {
            if (world.hero.mirroredImage) {
                this.position_x -= this.bubbleSpeed;
                this.bubbleSpeed += this.acceleration;
            } else if (!world.hero.mirroredImage) {
                this.position_x += this.bubbleSpeed;
                this.bubbleSpeed += this.acceleration;
            }
        }, 25);
    }

}
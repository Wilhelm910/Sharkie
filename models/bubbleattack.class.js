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


/**
 * 
 * This function is used to animate the movement
 * 
 */
    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_BUBBLE);
        }, 1000 / 10);
    }

/**
 * 
 * This function is used to get the direction of bubble attack
 * 
 */
    throw() {
        setInterval(() => {
            if (world.hero.mirroredImage) {
                this.toLeft();
            } else if (!world.hero.mirroredImage) {
                this.toRight();
            }
        }, 25);
    }

/**
 * 
 * This function is used to get the direction of bubble attack
 * 
 */
    toLeft() {
        this.position_x -= this.bubbleSpeed;
        this.bubbleSpeed += this.acceleration;
    }


/**
 * 
 * This function is used to get the direction of bubble attack
 * 
 */
    toRight() {
        this.position_x += this.bubbleSpeed;
        this.bubbleSpeed += this.acceleration;
    }

}
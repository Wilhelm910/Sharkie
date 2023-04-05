class EndscreenLost extends DrawingObjects {

    IMAGE_LOST = [
        'img/6.Buttons/Tittles/Game Over/Recurso 9.png'
    ]


    constructor() {
        super().loadImage(this.IMAGE_LOST);
        this.position_x = 1335 / 6
        this.position_y = 300;
        this.animate();
    }

/**
 * 
 * This function is used to animate the movement
 * 
 */
    animate() {
        setInterval(() => {
            if (world.hero.gameOver && !world.endboss.isDead) {
                this.width = 1335 / 2;
                this.height = 187 / 2;
            }
        }, 1000);
    }
}
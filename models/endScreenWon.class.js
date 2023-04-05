class EndscreenWon extends DrawingObjects {

    IMAGE_WON = [
        'img/6.Buttons/Tittles/You win/Mesa de trabajo 1.png'
    ]

    constructor() {
        super().loadImage(this.IMAGE_WON);
        this.position_x = 0;
        this.position_y = 0;
        this.animate();
    }


/**
 * 
 * This function is used to animate the movement
 * 
 */    
    animate() {
        setInterval(() => {
            if (world.finalScreen) {
                if (world.endboss[0].isDead) {
                    this.width = this.CANVAS_WIDTH;
                    this.height = this.CANVAS_HEIGHT;
                }
            }
        }, 600);
    }
}
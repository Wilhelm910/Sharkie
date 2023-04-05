class RotateIcon extends FixedObjects {

    IMAGES = [
        'icons/rotate.png',
    ]

    constructor() {
        super().loadImage(this.IMAGES[0]);
        this.position_x = (1080 / 2) - (512 / 8);
        this.position_y = (320 / 2) - (512 / 8);
        this.showIcon()

    }

/**
 * 
 * This function is used to show the Rotate icon
 * 
 */
    showIcon() {
        setInterval(() => {
            if (window.innerWidth < window.innerHeight && window.innerWidth < 500) {
                this.width = 512 / 4;
                this.height = 512 / 4;
                this.loadImage(this.IMAGES[0]);
            } else {
                this.width = 0;
                this.height = 0;
            }
        }, 250);
    }
}
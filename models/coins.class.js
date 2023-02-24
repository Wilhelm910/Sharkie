class Coins extends FixedObjects {
  //  tagged = false;
    IMAGES = [
        'img/4. Objects/1. Coins/1.png',
        'img/4. Objects/1. Coins/2.png',
        'img/4. Objects/1. Coins/3.png',
        'img/4. Objects/1. Coins/4.png'
    ]

    constructor() {
        super().loadImage(this.IMAGES[0]);
        this.loadImages(this.IMAGES);
        this.width = 99 / 2
        this.height = 93 / 2
        this.position_x = Math.floor(Math.random() * 1000) + 1000;
        this.position_y = Math.floor(Math.random() * 400) + 150;
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.sticky()
        }, 1000/60);
        setInterval(() => {
            this.playAnimation(this.IMAGES);
        }, 1000 / 7);
    }
}
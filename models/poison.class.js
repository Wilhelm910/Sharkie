class Poison extends FixedObjects {
    IMAGES_POISON = [
        'img/4. Objects/Posión/animated/1.png',
        'img/4. Objects/Posión/animated/2.png',
        'img/4. Objects/Posión/animated/3.png',
        'img/4. Objects/Posión/animated/4.png',
        'img/4. Objects/Posión/animated/5.png',
        'img/4. Objects/Posión/animated/6.png',
        'img/4. Objects/Posión/animated/7.png',
        'img/4. Objects/Posión/animated/8.png'
    ]


    constructor() {
        super().loadImage(this.IMAGES_POISON[0]);
        this.loadImages(this.IMAGES_POISON);
        this.width = 178 / 4
        this.height = 243 / 4
        this.position_x = Math.floor(Math.random() * 700) + 400;
        this.position_y = Math.floor(Math.random() * 400) + 150;
        this.animate();
    }

/**
 * 
 * This function is used to animate the movement
 * 
 */    
    animate() {
        setInterval(() => {
            this.sticky()
        }, 1000/60);
        setInterval(() => {
            this.playAnimation(this.IMAGES_POISON);
        }, 1000 / 10);
    }
}
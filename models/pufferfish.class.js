class Pufferfish extends MovingObjects {

    IMAGES_SWIM = [
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim5.png'
    ]


    constructor() {
        super().loadImage(this.IMAGES_SWIM[0])
        this.loadImages(this.IMAGES_SWIM)
        this.position_x = 2000;
        this.position_y = 200;
        this.width = 241 / 4
        this.height = 198 / 4
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.swimLeft();
        }, 1000 / 60);
      
        setInterval(() => {
            this.playAnimation(this.IMAGES_SWIM)

        }, 1000 / 5);
    }

}
class Jellyfish extends MovingObjects {
    world;
    tagged = false;
    IMAGES_SWIM = [
        'img/2.Enemy/2 Jelly fish/1.Swim/Yellow 1.png',
        'img/2.Enemy/2 Jelly fish/1.Swim/Yellow 2.png',
        'img/2.Enemy/2 Jelly fish/1.Swim/Yellow 3.png',
        'img/2.Enemy/2 Jelly fish/1.Swim/Yellow 4.png'
    ]


    constructor() {
        super().loadImage(this.IMAGES_SWIM[0])
        this.loadImages(this.IMAGES_SWIM)
        this.positionEnemie_x = Math.floor(Math.random() * 4400) + 1600;
        console.log(this.positionEnemie_x)
        this.positionEnemie_y = Math.floor(Math.random() * 470) + 40;
        this.width = 211 / 4
        this.height = 300 / 4
        this.attack = 'electroshock';
        this.animate();
    }

    animate() {

        setInterval(() => {
            //  console.log(this.world)
            this.swimLeftEnemie();
        }, 1000 / 60);

        setInterval(() => {
            this.playAnimation(this.IMAGES_SWIM)

        }, 1000 / 7);



    }

}

class Pufferfish extends MovingObjects {
    world;
    tagged = false;
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
        this.positionEnemie_x = Math.floor(Math.random() * 4400) + 600;
        console.log(this.positionEnemie_x)
        this.positionEnemie_y = Math.floor(Math.random() * 470) + 40;
        this.width = 241 / 4
        this.height = 198 / 4
        this.attack = 'poison';
        this.animate();
    }

    animate() {
       
        setInterval(() => {
          //  console.log(this.world)
            this.swimLeftEnemie();
        }, 1000 / 60);
      
        setInterval(() => {
            this.playAnimation(this.IMAGES_SWIM)

        }, 1000 / 10);
    }

}
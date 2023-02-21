class Pufferfish extends MovingObjects {
    world;
    tagged = false;
    gotHit = false;
    IMAGES_SWIM = [
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim5.png'
    ];

    IMAGES_DEAD_PUFFERFISH = [
       'img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1.Dead1.png',
       'img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1.Dead1.png',
       'img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1.Dead1.png'
    ];


    constructor() {
        super().loadImage(this.IMAGES_SWIM[0]);
        this.loadImages(this.IMAGES_SWIM);
        this.loadImages(this.IMAGES_DEAD_PUFFERFISH);
        this.positionEnemie_x = 1000//Math.floor(Math.random() * 4400) + 600;
        this.positionEnemie_y = 330//Math.floor(Math.random() * 470) + 40;
        this.width = 241 / 4
        this.height = 198 / 4
        this.attack = 'poison';
        this.animate();
    }

    animate() {
       
        setInterval(() => {
          //  console.log(this.world)
            this.swimLeftEnemie();
            if (this.gotHit) {
                this.swimUpEnemie();
            }
        }, 1000 / 60);
      
        setInterval(() => {
            
            if (this.gotHit) {
                console.log("test")
                this.playAnimation(this.IMAGES_DEAD_PUFFERFISH)
            } else {
                this.playAnimation(this.IMAGES_SWIM)
            }

        }, 1000 / 10);
    }

}
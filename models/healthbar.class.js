class Healthbar extends FixedObjects {
    IMAGES = [
        'img/4. Objects/green/Life/0.png',
        'img/4. Objects/green/Life/20.png',
        'img/4. Objects/green/Life/40.png',
        'img/4. Objects/green/Life/60.png',
        'img/4. Objects/green/Life/80.png',
        'img/4. Objects/green/Life/100.png'
    ]


    constructor() {
        super().loadImage(this.IMAGES[5]);
        this.positionHero_x = 0;
        this.positionHero_y = 0;
        this.width = 595 / 4;
        this.height = 158 / 4;
        this.setPercentage()
     
    }

    setPercentage() {
        setInterval(() => {
            if (world.hero.energy == 100) {
                this.loadImage(this.IMAGES[5]);
            } else if (world.hero.energy == 80) {
                this.loadImage(this.IMAGES[4]);
            } else if (world.hero.energy == 60) {
                this.loadImage(this.IMAGES[3]);
            } else if (world.hero.energy == 40) {
                this.loadImage(this.IMAGES[2]);
            } else if (world.hero.energy == 20) {
                this.loadImage(this.IMAGES[1]);
            } else {
                this.loadImage(this.IMAGES[0]);
            }
        }, 1000 / 60);

    }

}
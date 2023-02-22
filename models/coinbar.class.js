class Coinbar extends FixedObjects {
    IMAGES = [
        'img/4. Objects/green/Coin/0.png',
        'img/4. Objects/green/Coin/20.png',
        'img/4. Objects/green/Coin/40.png',
        'img/4. Objects/green/Coin/60.png',
        'img/4. Objects/green/Coin/80.png',
        'img/4. Objects/green/Coin/100.png'
    ]

    constructor() {
        super().loadImage(this.IMAGES[0]);
        this.positionHero_x = 0;
        this.positionHero_y = 158 / 4;
        this.width = 595 / 4;
        this.height = 158 / 4;
        this.setPercentage()
     
    }

    setPercentage() {
        setInterval(() => {
            if (world.hero.coins == 0) {
                this.loadImage(this.IMAGES[0]);
            } else if (world.hero.coins == 1) {
                this.loadImage(this.IMAGES[1]);
            } else if (world.hero.coins == 2) {
                this.loadImage(this.IMAGES[2]);
            } else if (world.hero.coins == 3) {
                this.loadImage(this.IMAGES[3]);
            } else if (world.hero.coins == 4) {
                this.loadImage(this.IMAGES[4]);
            } else {
                this.loadImage(this.IMAGES[5]);
            }
        }, 1000 / 60);

    }
}
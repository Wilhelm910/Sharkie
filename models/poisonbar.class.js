class Poisonbar extends FixedObjects {

    IMAGES = [
        'img/4. Objects/green/poisoned bubbles/0.png',
        'img/4. Objects/green/poisoned bubbles/20.png',
        'img/4. Objects/green/poisoned bubbles/40.png',
        'img/4. Objects/green/poisoned bubbles/60.png',
        'img/4. Objects/green/poisoned bubbles/80.png',
        'img/4. Objects/green/poisoned bubbles/100.png'
    ]

    constructor() {
        super().loadImage(this.IMAGES[5]);
        this.position_x = 0;
        this.position_y = 158 / 1.5;
        this.width = 595 / 3;
        this.height = 158 / 3;
        this.setPercentage()

    }

    setPercentage() {
        setInterval(() => {
            if (world.hero.bubblesForShoot == 0)
                this.loadImage(this.IMAGES[0]);
            else if (world.hero.bubblesForShoot == 1)
                this.loadImage(this.IMAGES[1]);
            else if (world.hero.bubblesForShoot == 2)
                this.loadImage(this.IMAGES[2]);
            else if (world.hero.bubblesForShoot == 3)
                this.loadImage(this.IMAGES[3]);
            else if (world.hero.bubblesForShoot == 4)
                this.loadImage(this.IMAGES[4]);
            else
                this.loadImage(this.IMAGES[5]);
        }, 1000 / 60);
    }
}
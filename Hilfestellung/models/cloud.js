class Cloud extends MovingObject {


    constructor() {
        super().loadImage('../img/5_background/layers/4_clouds/1.png');
        this.position_x = 400
        this.position_y = 100
        this.height = 1080 / 3;
        this.width = 1920 / 3;
    }

    animate() {
        if (this.world.hero.world.keyboard.RIGHT) {
            this.moveLeft();
        }
        if (this.world.hero.world.keyboard.LEFT) {
            this.moveRight()
        }

    }



}
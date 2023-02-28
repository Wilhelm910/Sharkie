class FixedObjects extends DrawingObjects {
    healthBarPercentage = 100

    sticky() {
        if (!world.hero.gameOver && !world.finalScreen) {
            this.position_x -= this.gamespeed - 0.12;
        } 
        if (world.finalScreen) {
            this.position_x -= 0;
        }

    }
}
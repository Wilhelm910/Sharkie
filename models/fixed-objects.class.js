class FixedObjects extends DrawingObjects {
    healthBarPercentage = 100
    
    sticky() {
        if (!world.hero.gameOver && !this.finalScreen) {
            this.position_x -= gamespeed - 0.12;
        } else {
            this.position_x -= gamespeed - 0.15;
        }
        
    }
}
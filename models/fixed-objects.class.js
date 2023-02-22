class FixedObjects extends DrawingObjects {
    healthBarPercentage = 100
    
    sticky() {
        this.positionEnemie_x -= gamespeed - 0.12;
    }
}
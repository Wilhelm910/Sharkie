class Background extends MovingObject {

    canvasWidth = document.getElementById('canvas').width
    canvasHeight = document.getElementById('canvas').height

    constructor(imagePath, x, y) {
        super().loadImage(imagePath);
        this.position_x = x
        this.position_y = y
        this.height = this.canvasHeight;
        this.width = this.canvasWidth
    }
}
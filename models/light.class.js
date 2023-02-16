class Light extends MovingObjects {

    IMAGES = [
        'img/3. Background/Layers/1. Light/COMPLETO.png'
    ]
    speedModifier = 1
    constructor() {
        super().loadImage(this.IMAGES[0]);
    }
}
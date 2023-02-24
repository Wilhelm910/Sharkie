class SecondLayer extends MovingObjects {

    IMAGES = [
        'img/3. Background/Layers/3. Layer 2/D.png'
    ]
    speedModifier = 0.8
    constructor() {
        super().loadImage(this.IMAGES[0]);
    }
}
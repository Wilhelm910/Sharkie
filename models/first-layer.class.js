class FirstLayer extends MovingObjects {

    IMAGES = [
        'img/3. Background/Layers/2. Layer 1/D.png'
    ]
    speedModifier = 1
    constructor() {
        super().loadImage(this.IMAGES[0]);
    }
}
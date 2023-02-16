class ThirdLayer extends MovingObjects {
    IMAGES = [
        'img/3. Background/Layers/4. Layer 3/D.png'
    ]
    speedModifier = 0.6

    constructor() {
        super().loadImage(this.IMAGES[0]);
    }
}
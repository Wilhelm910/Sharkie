class Water extends MovingObjects {
    IMAGES = [
        'img/3. Background/Layers/5. Water/D.png'
    ]
    speedModifier = 0.4

    constructor() {
        super().loadImage(this.IMAGES[0]);
    }
}
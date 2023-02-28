class Endboss extends MovingObject {
  
    
    IMAGES_WALK = [
        '../img/4_enemie_boss_chicken/1_walk/G1.png',
        '../img/4_enemie_boss_chicken/1_walk/G2.png',
        '../img/4_enemie_boss_chicken/1_walk/G3.png',
        '../img/4_enemie_boss_chicken/1_walk/G4.png'
    ]
    
  
    constructor() {
        super().loadImage('../img/4_enemie_boss_chicken/1_walk/G1.png');
        this.loadImages(this.IMAGES_WALK)
        this.position_x = Math.floor(Math.random() * 800) + 1000
        this.position_y = 0
        this.height = 1217 / 2;
        this.width = 1045 / 2;
        this.speed = 0.15 + Math.random() * 1
        this.animateWalk()
    }

    animateWalk() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);
        setInterval(() => {
         this.playAnimation(this.IMAGES_WALK)

        }, 1000 / 10);
    }
}
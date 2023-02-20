class Chicken extends MovingObject {
    IMAGES_WALK = [
        '../img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        '../img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        '../img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ]
    
  
    constructor() {
        super().loadImage('../img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.loadImages(this.IMAGES_WALK)
        this.position_x = Math.floor(Math.random() * 100) + 100
        this.position_y = 450
        this.height = 241 / 3;
        this.width = 198 / 3;
        this.speed = 0.15 + Math.random() * 0.5
        this.animateWalk()
    }

    animateWalk() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);
      
        setInterval(() => {
            this.playAnimation(this.IMAGES_WALK)

        }, 1000 / 5);
    }
}
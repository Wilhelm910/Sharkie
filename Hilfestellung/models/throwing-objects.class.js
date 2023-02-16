class ThrowingObejcts extends MovingObject {
    IMAGES_BOTTLE = [
        '../img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        '../img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        '../img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        '../img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png'
    ]

    
    world;

    constructor(position_x,position_y) {
        super().loadImage('../img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png')
        this.loadImages(this.IMAGES_BOTTLE);
        this.width = 400 / 4;
        this.height = 400 / 4;
        this.position_x = position_x
        this.position_y = position_y
        this.animate();
        this.throw();
    }


    animate() {
        
        setInterval(() => {
           // if(this.world.keyboard.D) {
                this.playAnimation(this.IMAGES_BOTTLE);
           // }
            
        }, 1000 / 10);
    }

    throw() {
        //speedX = 20;
        this.speedY = 40;
        this.applyGravity();
        setInterval(() => {
            this.position_x += 10
        }, 25);
    }
}
class MovingObjects extends DrawingObjects {
    enemieSpeed = 3;
    heroSpeed = 15;
    speed = 5;
    mirroredImage = false;
    swimmingUp = false;
    swimmingDown = false;

    playAnimation(images) {
        let i = this.currentImage % images.length
        let path = images[i]
        this.img = this.imageCache[path]
        this.currentImage++
    }
// Draw muss auch an position Hero X geschehen. ALso extra draw methode für Hero und für enemies!

    swimRight() {
        this.positionHero_x += this.heroSpeed;
        console.log(this.positionHero_x)
        this.mirroredImage = false;
    }

    swimLeft() {
        this.position_x -= this.enemieSpeed;
    }

    swimUp() {
        this.position_y -= this.speed;
        this.swimmingDown = false;
    }

    swimDown() {
        this.position_y += this.speed;
        this.swimmingUp = false;
    }



}
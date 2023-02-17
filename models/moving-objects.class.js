class MovingObjects extends DrawingObjects {
    enemieSpeed = 3;
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


    swimRight() {
        this.position_x += this.herospeed;
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
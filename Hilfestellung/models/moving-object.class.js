    class MovingObject extends DrawingObjects {
    speed = 0.5;
    speedY = 0;
    acceleration = 2.5;
    mirroredImage = false;
    energy = 100;
    isDead = false;
    lastHit = 0;

  


    hit() {
        if (!this.energy == 0) {
            this.energy -= 1;
            this.lastHit = new Date().getTime();
        }
    }


    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit
        return timepassed < 100
    }


    moveRight() {
        this.position_x += this.speed;
        this.mirroredImage = false;
    }

    moveLeft() {
        this.position_x -= this.speed;
    }

    playAnimation(images) {
        let i = this.currentImage % images.length
        let path = images[i]
        this.img = this.imageCache[path]
        this.currentImage++
    }

    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.position_y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }

    isAboveGround() {
        if (this instanceof ThrowingObejcts) {
            return true 
        } else {
            return this.position_y < 145
        }
    }

    jump() {
        this.speedY = 30
    }

    isColliding(obj) {
        return (this.position_x + this.width > obj.position_x 
            && this.position_y + this.height > obj.position_y 
            && this.position_x < obj.position_x
            && this.position_y < obj.position_y + obj.height);
        /*return (this.position_x + this.width) >= obj.position_x && this.position_x <= (obj.position_x + obj.width) &&
            (this.position_y + this.offsetY + this.height) >= obj.Y &&
            (this.position_y + this.offsetY) <= (obj.position_y + obj.height) &&
            obj.onCollisionCourse; // Optional: hiermit könnten wir schauen, ob ein Objekt sich in die richtige Richtung bewegt. Nur dann kollidieren wir. Nützlich bei Gegenständen, auf denen man stehen kann.
    */
        }
    

}
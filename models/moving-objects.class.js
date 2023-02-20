class MovingObjects extends DrawingObjects {
    enemieSpeed = Math.floor(Math.random() * 2) + 3;
    // heroSpeed = 5;
    speed = 5;
    mirroredImage = false;
    swimmingUp = false;
    swimmingDown = false;
    lastHit = 0;
    moveUp = true;
    moveDown = false;
    
    playAnimation(images) {
        let i = this.currentImage % images.length
        let path = images[i]
        this.img = this.imageCache[path]
        this.currentImage++
    }
    // Draw muss auch an position Hero X geschehen. ALso extra draw methode für Hero und für enemies!

    swimRight() {
        if (this.positionHero_x < 900) {
            this.positionHero_x += this.heroSpeed;
            this.mirroredImage = false;
        }
    }

    swimLeft() {
        if (this.positionHero_x > 0) {
            this.positionHero_x -= this.heroSpeed;
        }
    }

    swimUp() {
        if (this.positionHero_y > -100) {
            this.positionHero_y -= this.heroSpeed;
        }

        //  this.swimmingDown = false;
    }

    swimDown() {
        if (this.positionHero_y < 380) {
            this.positionHero_y += this.heroSpeed;
        }

        //  this.swimmingUp = false;
    }

    swimLeftEnemie() {
       // console.log(world.pufferfish[0].positionEnemie_x)
        this.positionEnemie_x -= this.enemieSpeed + (gamespeed / 2);
        if (this instanceof Jellyfish) {
            if (this.moveUp) {
                this.positionEnemie_y -= this.enemieSpeed / 2;
            }
            if (this.positionEnemie_y < 50) {
                this.moveUp = false;
                this.moveDown = true;
            }
            if (this.moveDown) {
                this.positionEnemie_y += this.enemieSpeed / 2;
            }
            if (this.positionEnemie_y > 500) {
                this.moveUp = true;
                this.moveDown = false;
            }
        }
    }


    isColliding(obj) {
        return (this.positionHero_x + 30 + this.width - 65 > obj.positionEnemie_x
            && this.positionHero_y + 110 + this.height - 160 > obj.positionEnemie_y
            && this.positionHero_x + 30 < obj.positionEnemie_x
            && this.positionHero_y + 110 < obj.positionEnemie_y + obj.height - 10);
        /*return (this.position_x + this.width) >= obj.position_x && this.position_x <= (obj.position_x + obj.width) &&
            (this.position_y + this.offsetY + this.height) >= obj.Y &&
            (this.position_y + this.offsetY) <= (obj.position_y + obj.height) &&
            obj.onCollisionCourse; // Optional: hiermit könnten wir schauen, ob ein Objekt sich in die richtige Richtung bewegt. Nur dann kollidieren wir. Nützlich bei Gegenständen, auf denen man stehen kann.
    */
    }


    hit() {
        if (!this.energy == 0) {
            this.energy -= 20;
            console.log(this.energy)
            this.lastHit = new Date().getTime();
        }
    }


    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit
        return timepassed < 500
    }



}
class MovingObjects extends DrawingObjects {
    enemieSpeed = Math.floor(Math.random() * 2) + 3;
    speed = 5;
    mirroredImage = false;
    swimmingUp = false;
    swimmingDown = false;
    lastHitPoison = 0;
    lastHitElectroshock = 0;
    lastHitNormal = 0;
    moveUp = true;
    moveDown = false;
    gameOver = false;
    gotHit = false;
    lineOfSight = false;
    energy;
    attack;
    bubbleSpeed;

/**
 * 
 * This function is used to move objects to right
 * 
 */
    swimRight() {
        if (!this.gameOver) {
            if (this.position_x < 900) {
                this.position_x += this.speed;
                this.mirroredImage = false;
            }
        }
    }

/**
 * 
 * This function is used to move objects to left
 * 
 */
    swimLeft() {
        if (!this.gameOver && !world.finalScreen) {
            if (this.position_x > 0) {
                this.position_x -= this.speed * 2;
            }
        }
        if (world.finalScreen) {
            if (this.position_x > 0) {
                this.position_x -= this.speed;
            }
        }
    }

/**
 * 
 * This function is used to move objects up
 * 
 */
    swimUp() {
        if (!this.gameOver) {
            if (this.position_y > -100) {
                this.position_y -= this.speed;
            }
        } else if (this.gameOver) {
            this.position_y -= this.speed * 2;
        }
    }

/**
 * 
 * This function is used to move objects down
 * 
 */
    swimDown() {
        if (!this.gameOver) {
            if (this.position_y < 380) {
                this.position_y += this.speed;
            }
        } else if (this.gameOver && this.position_y < 380) {
            this.position_y += this.speed * 2;
        }
    }

/**
 * 
 * This function is used to move endboss to left
 * 
 */    
    swimLeftEndboss() {
        if (!this.gotHit) {
            this.position_x -= this.speed / 1.5;
        }
    }

/**
 * 
 * This function is used to move endboss up
 * 
 */
    swimUpEndboss() {
        this.position_y -= this.speed;
    }

/**
 * 
 * This function is used to move endboss to right
 * 
 */
    swimRightEndboss() {
        if (!this.gotHit) {
            this.position_x += this.speed / 1.5;
        }
    }

/**
 * 
 * This function is used to animate the endboss attack
 * 
 */
    attackHero() {
        // Hero unter Endboss
        if (world.hero.position_y - 100 > this.position_y) {
            this.position_y += this.speed / 2;
        }
        // Hero über Endboss
        if (world.hero.position_y < this.position_y + 100) {
            this.position_y -= this.speed / 2;
        }
    }

/**
 * 
 * This function is used to move objects to left
 * 
 */
    swimLeftEnemie() {
        if (!this.gameOver) {
            this.position_x -= this.enemieSpeed + (this.gamespeed / 2);
            if (this instanceof Pufferfish && this.lineOfSight) {
                this.position_x -= this.speed / 2.2
            }
            if (this instanceof Jellyfish) {
                this.movementOfJellyfish();
            }
        }
    }

/**
 * 
 * This function is used to get special movement of jellyfish
 * 
 */
    movementOfJellyfish() {
        if (this.moveUp) {
            this.position_y -= this.enemieSpeed / 2;
        }
        if (this.position_y < 50) {
            this.moveUp = false;
            this.moveDown = true;
        }
        if (this.moveDown) {
            this.position_y += this.enemieSpeed / 2;
        }
        if (this.position_y > 500) {
            this.moveUp = true;
            this.moveDown = false;
        }
    }

/**
 * 
 * This function is used to move the enemies up when dead
 * 
 */
    swimUpEnemie() {
        this.position_y -= this.enemieSpeed
    }

/**
 * 
 * This function is used to check the collision
 * 
 * @param {object} obj 
 * @returns 
 */
    isColliding(obj) {
        return (this.position_x + 30 + this.width - 65 > obj.position_x
            && this.position_y + 110 + this.height - 160 > obj.position_y
            && this.position_x + 30 < obj.position_x
            && this.position_y + 110 < obj.position_y + obj.height);
    }

/**
 * 
 * This function is used to check the collision
 * 
 * @param {object} obj 
 * @returns 
 */    
    isCollidingEndboss(obj) {
        if (world.hero.mirroredImage) {
            return (this.position_x + 30 < obj.position_x + obj.width - 25
                && this.position_y + 110 + this.height - 160 > obj.position_y + 190
                && this.position_x + 30 > obj.position_x + 10
                && this.position_y + 110 < obj.position_y + 190 + obj.height - 260);
        } else {
            return (this.position_x + 30 + this.width - 65 > obj.position_x + 10
                && this.position_y + 110 + this.height - 160 > obj.position_y + 190
                && this.position_x + 30 < obj.position_x + 10
                && this.position_y + 110 < obj.position_y + 190 + obj.height - 260);
        }
    }

/**
 * 
 * This function is used to check the horizontal "collision"
 * 
 * @param {object} obj 
 * @returns 
 */
    isInLine(obj) {
        return (this.position_y + 110 + this.height - 160 > obj.position_y
            && this.position_y + 110 < obj.position_y + obj.height);
    }

/**
 * 
 * This function is used to check the horizontal "collision"
 * 
 * @param {object} obj 
 * @returns 
 */
    isInLineEndboss(obj) {
        return (this.position_y + 110 + this.height - 160 > obj.position_y + 190
            && this.position_y + 110 < obj.position_y + 190 + obj.height - 260);
    }

/**
 * 
 * This function is used to check the collision
 * 
 * @param {object} obj 
 * @returns 
 */   
    isCollidingBubble(obj) {
        if (world.hero.mirroredImage) {
            return (this.position_x < obj.position_x + obj.width
                && this.position_y + this.height > obj.position_y
                && this.position_x > obj.position_x
                && this.position_y < obj.position_y + obj.height);
        } else {
            return (this.position_x + this.width > obj.position_x
                && this.position_y + this.height > obj.position_y
                && this.position_x < obj.position_x
                && this.position_y < obj.position_y + obj.height);
        }
    }

/**
 * 
 * This function is used to get different animations when hit
 * 
 * @param {string} attack 
 */
    hit(attack) {
        if (!this.energy == 0) {
            this.energy -= 20;
            if (attack == 'poison') {
                this.lastHitPoison = new Date().getTime();
            } else if (attack == 'electroshock') {
                this.lastHitElectroshock = new Date().getTime();
            } else {
                this.lastHitNormal = new Date().getTime();
            }
        }
    }

/**
 * 
 * This function is used to initialize the poision animations
 * 
 * @returns 
 */
    isHurtPoison() {
        let timepassed = new Date().getTime() - this.lastHitPoison
        return timepassed < 500
    }

/**
 * 
 * This function is used to initialize the electric animations
 * 
 * @returns 
 */
    isHurtElectroshock() {
        let timepassed = new Date().getTime() - this.lastHitElectroshock
        return timepassed < 500
    }

/**
 * 
 * This function is used to initialize the normal animations
 * 
 * @returns 
 */
    isHurtNormal() {
        let timepassed = new Date().getTime() - this.lastHitNormal
        return timepassed < 500
    }
}
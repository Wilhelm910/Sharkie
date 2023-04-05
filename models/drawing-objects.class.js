class DrawingObjects {
    CANVAS_WIDTH = document.getElementById('canvas').width
    CANVAS_HEIGHT = document.getElementById('canvas').height
    background_width = 3840 / (1080 / this.CANVAS_HEIGHT)
    background_height = 1080 / (1080 / this.CANVAS_HEIGHT)
    endPosition = 1500;
    position_x = 0;
    position_x2 = this.background_width;
    position_y = 0;
    img;
    imageCache = {}
    width;
    height;
    currentImage = 0;
    tagged = false;
    distance = 0;
    gamespeed = 5;


/**
 * 
 * This function is used to animate the movement
 * 
 */
    playAnimation(images) {
        if (this instanceof Jellyfish) {
        }
        if (!this.gameOver) {
            let i = this.currentImage % images.length
            let path = images[i]
            this.img = this.imageCache[path]
            this.currentImage++
        } else if (this.gameOver) {
            for (let i = 0; i < images.length; i++) {
                let path = images[i]
                this.img = this.imageCache[path]
                this.currentImage++
            }
        }
    }


/**
 * 
 * This function is used to load the first img from every class
 * 
 */
    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

/**
 * 
 * This function is used to load all images from every class
 * 
 */
    loadImages(imgArray) {
        imgArray.forEach(path => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

/**
 * 
 * This function is used to draw the hit box for collision detection
 * 
 */
    drawHitBox(ctx) {
        if (this instanceof Hero) {
           this.heroHitbox(ctx);
        } else if (this instanceof Endboss) {
           this.endbossHitbox(ctx);
        } else if (this instanceof Pufferfish
            || this instanceof Jellyfish
            || this instanceof Poison
            || this instanceof Coins
            || this instanceof Bubbleattack) {
            this.remainingObjectsHitbox(ctx);
        }
    }

/**
 * 
 * This function is used to draw the hit box for collision detection
 * 
 */
    heroHitbox(ctx) {
        ctx.beginPath();
        ctx.lineWidth = '5';
        ctx.strokeStyle = 'red';
        ctx.rect(this.position_x + 30, this.position_y + 110, this.width - 65, this.height - 160);
        ctx.stroke();
    }

/**
 * 
 * This function is used to draw the hit box for collision detection
 * 
 */
    endbossHitbox(ctx) {
        ctx.beginPath();
        ctx.lineWidth = '5';
        ctx.strokeStyle = 'red';
        ctx.rect(this.position_x + 10, this.position_y + 190, this.width - 25, this.height - 260);
        ctx.stroke();
    }

/**
 * 
 * This function is used to draw the hit box for collision detection
 * 
 */
    remainingObjectsHitbox(ctx) {
        ctx.beginPath();
        ctx.lineWidth = '5';
        ctx.strokeStyle = 'red';
        ctx.rect(this.position_x, this.position_y, this.width, this.height);
        ctx.stroke();
    }

/**
 * 
 * This function is used to draw objects on canvas
 * 
 */
    draw(ctx) {
        try {
            ctx.drawImage(this.img, this.position_x, this.position_y, this.width, this.height);
        } catch(e) {
            console.log(e)
            console.log(this.img.src)
        }
      
    }

/**
 * 
 * This function is used to draw objects on canvas
 * 
 */
    drawBackground(ctx) {
        if (this.distance > this.endPosition) {
            this.gamespeed = 0
        }
        ctx.drawImage(this.img, this.position_x, this.position_y, this.background_width, this.background_height);
        ctx.drawImage(this.img, this.position_x2, this.position_y, this.background_width, this.background_height);
        if (!(world == undefined)) {
            if (!world.hero.gameOver) {
                if (world.endboss.length <= 0) {
                    this.alignBackground()
                }
            }
        }
    }

/**
 * 
 * This function is used to draw objects on canvas
 * 
 */
    alignBackground() {
        if (this.position_x < -this.background_width) {
            this.position_x = this.background_width + this.position_x2 - (this.gamespeed * this.speedModifier)
        } else {
            this.position_x -= this.gamespeed * this.speedModifier;
        }
        if (this.position_x2 < -this.background_width) {
            this.position_x2 = this.background_width + this.position_x - (this.gamespeed * this.speedModifier)
        } else {
            this.position_x2 -= this.gamespeed * this.speedModifier;
        }
    }
}
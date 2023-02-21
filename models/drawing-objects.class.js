class DrawingObjects {
    CANVAS_WIDTH = document.getElementById('canvas').width
    CANVAS_HEIGHT = document.getElementById('canvas').height
    background_width = 3840 / (1080 / this.CANVAS_HEIGHT)
    background_height = 1080 / (1080 / this.CANVAS_HEIGHT)
    endPosition = 4000;
    position_x = 0;
    position_x2 = this.background_width;
    //   position_x0 = -this.background_width;
    position_y = 0;
    img;
    imageCache = {}
    width;
    height;
    currentImage = 0;
    heroSpeed = 5;
    attack;
    bubbleSpeed;


    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(imgArray) {
        imgArray.forEach(path => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    drawHitBox(ctx) {
        ctx.beginPath();
        ctx.lineWidth = '5';
        ctx.strokeStyle = 'red';
        ctx.rect(this.positionHero_x + 30, this.positionHero_y + 110, this.width - 65, this.height - 160);
        ctx.stroke();
    }

    drawEnemieHitBox(ctx) {
        ctx.beginPath();
        ctx.lineWidth = '5';
        ctx.strokeStyle = 'red';
        ctx.rect(this.positionEnemie_x, this.positionEnemie_y, this.width, this.height-10);
        ctx.stroke();
    }

    drawBubbleHitBox(ctx) {
        ctx.beginPath();
        ctx.lineWidth = '5';
        ctx.strokeStyle = 'red';
        ctx.rect(this.positionBubble_x, this.positionBubble_y, this.width, this.height);
        ctx.stroke();
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.positionHero_x, this.positionHero_y, this.width, this.height);
    }

    drawBubble(ctx) {
        ctx.drawImage(this.img, this.positionBubble_x, this.positionBubble_y, this.width, this.height);
    }

    drawEnemie(ctx) {
        ctx.drawImage(this.img, this.positionEnemie_x, this.positionEnemie_y, this.width, this.height);
    }


    drawBackground(ctx) {
        if (this.position_x > this.endPosition) {
            gamespeed = 0
        }
        //  ctx.drawImage(this.img, this.position_x0, this.position_y, this.background_width, this.background_height);
        ctx.drawImage(this.img, this.position_x, this.position_y, this.background_width, this.background_height);
        ctx.drawImage(this.img, this.position_x2, this.position_y, this.background_width, this.background_height);
        this.alignBackground()
        // console.log(this.position_x)

    }


    alignBackground() {
        /*
         if (this.position_x0 < -this.background_width) {
             this.position_x0 = -this.background_width - this.position_x - (gamespeed * this.speedModifier)
         } /*else {
             this.position_x0 -= this.herospeed + gamespeed * this.speedModifier;
         } */


        if (this.position_x < -this.background_width) {
            this.position_x = this.background_width + this.position_x2 - (gamespeed * this.speedModifier)
        } else {
            this.position_x -= /*this.heroSpeed +*/ gamespeed * this.speedModifier;
        }
        if (this.position_x2 < -this.background_width) {
            this.position_x2 = this.background_width + this.position_x - (gamespeed * this.speedModifier)
        } else {
            this.position_x2 -= /*this.heroSpeed +*/ gamespeed * this.speedModifier;
        }
    }
}
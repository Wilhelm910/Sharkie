class DrawingObjects {
    CANVAS_WIDTH = document.getElementById('canvas').width
    CANVAS_HEIGHT = document.getElementById('canvas').height
    background_width = 3840 / (1080/this.CANVAS_HEIGHT)
    background_height = 1080 / (1080/this.CANVAS_HEIGHT)
    position_x = 0;
    position_x2 = this.background_width
    position_y = 0;
    img;
    imageCache = {}
    width;
    height;
   

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


    drawBackground(ctx) {
        ctx.drawImage(this.img, this.position_x, this.position_y, this.background_width, this.background_height);
        ctx.drawImage(this.img, this.position_x2, this.position_y, this.background_width, this.background_height);
        this.alignBackground()
    }


    alignBackground() {
        if (this.position_x < -this.background_width) {
            this.position_x = this.background_width + this.position_x2 - (gamespeed * this.speedModifier)
        } else {
            this.position_x -= gamespeed * this.speedModifier;
        }
        if (this.position_x2 < -this.background_width) {
            this.position_x2 = this.background_width + this.position_x - (gamespeed * this.speedModifier)
        } else {
            this.position_x2 -= gamespeed * this.speedModifier;
        } 
    }
}
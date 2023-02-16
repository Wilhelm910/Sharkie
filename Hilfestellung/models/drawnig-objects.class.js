class DrawingObjects {
    position_x;
    position_y;
    height;
    width;
    img;
    imageCache = {};
    currentImage = 0;

    draw(ctx) {
        ctx.drawImage(this.img, this.position_x, this.position_y, this.width, this.height)
    }

    drawHitBox(ctx) {
        if (this instanceof Hero || this instanceof Chicken || this instanceof Endboss) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'red';
            ctx.rect(this.position_x, this.position_y, this.width, this.height);
            ctx.stroke();
        }
    }

    loadImage(path) {
        this.img = new Image(); // Das gleiche wie: this.img = document.getElementById('img') --> <img id="img">
        this.img.src = path;
    }
    

    loadImages(imgArray) {
        imgArray.forEach(path => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img
        });
    }
}



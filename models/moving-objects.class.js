class MovingObjects extends DrawingObjects {
    speed = 0.5;



    playAnimation(images) {
        let i = this.currentImage % images.length
        let path = images[i]
        this.img = this.imageCache[path]
        this.currentImage++
    }


    swimRight() {
        this.position_x += this.speed;
    }

}
class Jellyfish extends MovingObjects {
    world;
    //tagged = false;
    jellyDistance = 0;
    IMAGES_SWIM = [
        'img/2.Enemy/2 Jelly fish/1.Swim/Yellow 1.png',
        'img/2.Enemy/2 Jelly fish/1.Swim/Yellow 2.png',
        'img/2.Enemy/2 Jelly fish/1.Swim/Yellow 3.png',
        'img/2.Enemy/2 Jelly fish/1.Swim/Yellow 4.png'
    ]

    IMAGES_DEAD_JELLYFISH = [
        'img/2.Enemy/2 Jelly fish/2.Dead/Yellow/y1.png',
        'img/2.Enemy/2 Jelly fish/2.Dead/Yellow/y2.png',
        'img/2.Enemy/2 Jelly fish/2.Dead/Yellow/y3.png',
        'img/2.Enemy/2 Jelly fish/2.Dead/Yellow/y4.png'
    ]


    constructor() {
        super().loadImage(this.IMAGES_SWIM[0]);
        this.loadImages(this.IMAGES_SWIM);
        this.loadImages(this.IMAGES_DEAD_JELLYFISH);
        this.position_x = 1100;
        this.position_y = Math.floor(Math.random() * 470) + 40;
        this.width = 211 / 4
        this.height = 300 / 4
        this.attack = 'electroshock';
        this.animate();
        //this.setStopInterval(this.swim,1000/60)
       // this.setStopInterval(this.animate,1000/7)
       // this.stopGame()
    }
    
    animate() {
        setInterval(this.xyz(), 1000/60);
       // setInterval(this.playAnimation(this.IMAGES_SWIM), 1000/7);
    }

    xyz() {
        this.swimLeftEnemie()
        this.playAnimation(this.IMAGES_SWIM)
    }

/*
    animate() {
        setInterval(() => {
           // this.jellyDistance++
           // console.log(this.jellyDistance)
            if (this.gotHit) {
                this.swimUpEnemie();
            } else {
                this.swimLeftEnemie();
            }
        }, 1000 / 60);

        setInterval(() => {
            if (this.gotHit) {
                this.playAnimation(this.IMAGES_DEAD_JELLYFISH);
            } else {
                this.playAnimation(this.IMAGES_SWIM);
            }
        }, 1000 / 7);
    }
*/

    /*

    setStopInterval(fn,time) {
        let id = setInterval(fn,time);
        intervalIDs.push(id)
    }

    swim() {
        if (this.gotHit) {
            this.swimUpEnemie();
        } else {
            this.swimLeftEnemie();
        }
    }

    animate() {
        if (this.gotHit) {
            this.playAnimation(this.IMAGES_DEAD_JELLYFISH);
        } else {
            this.playAnimation(this.IMAGES_SWIM);
        }
    }

    stopGame() {
        intervalIDs.forEach(clearInterval)
    }
    */
/*
    
*/
}


/*

function setStopInterval(fn,time) {
    let id = setInterval(fn,time);
    intervalIDs.push(id)
}

setStopInterval(sayHello,1000)

function sayHello() {
    console.log("hello")
}

function stopGame() {
    intervalIDs.forEach(clearInterval)
}
*/


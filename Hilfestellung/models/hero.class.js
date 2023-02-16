class Hero extends MovingObject {
    world;
    speed = 5;
    walking_sound = new Audio('./audio/walking.mp3');

    IMAGES_IDLE = [
        '../img/2_character_pepe/1_idle/idle/I-1.png',
        '../img/2_character_pepe/1_idle/idle/I-2.png',
        '../img/2_character_pepe/1_idle/idle/I-3.png',
        '../img/2_character_pepe/1_idle/idle/I-4.png',
        '../img/2_character_pepe/1_idle/idle/I-5.png',
        '../img/2_character_pepe/1_idle/idle/I-6.png',
        '../img/2_character_pepe/1_idle/idle/I-7.png',
        '../img/2_character_pepe/1_idle/idle/I-8.png',
        '../img/2_character_pepe/1_idle/idle/I-9.png',
        '../img/2_character_pepe/1_idle/idle/I-10.png',
    ];

    IMAGES_WALK = [
        '../img/2_character_pepe/2_walk/W-21.png',
        '../img/2_character_pepe/2_walk/W-22.png',
        '../img/2_character_pepe/2_walk/W-23.png',
        '../img/2_character_pepe/2_walk/W-24.png',
        '../img/2_character_pepe/2_walk/W-25.png',
        '../img/2_character_pepe/2_walk/W-26.png'
    ]

    IMAGES_JUMP = [
        '../img/2_character_pepe/3_jump/J-31.png',
        '../img/2_character_pepe/3_jump/J-32.png',
        '../img/2_character_pepe/3_jump/J-33.png',
        '../img/2_character_pepe/3_jump/J-34.png',
        '../img/2_character_pepe/3_jump/J-35.png',
        '../img/2_character_pepe/3_jump/J-36.png',
        '../img/2_character_pepe/3_jump/J-37.png',
        '../img/2_character_pepe/3_jump/J-38.png',
        '../img/2_character_pepe/3_jump/J-39.png'
    ]

    IMAGES_DEAD = [
        '../img/2_character_pepe/5_dead/D-51.png',
        '../img/2_character_pepe/5_dead/D-52.png',
        '../img/2_character_pepe/5_dead/D-53.png',
        '../img/2_character_pepe/5_dead/D-54.png',
        '../img/2_character_pepe/5_dead/D-55.png',
        '../img/2_character_pepe/5_dead/D-56.png',
        '../img/2_character_pepe/5_dead/D-57.png'
    ]

    IMAGES_HURT = [
        '../img/2_character_pepe/4_hurt/H-41.png',
        '../img/2_character_pepe/4_hurt/H-42.png',
        '../img/2_character_pepe/4_hurt/H-43.png'
    ]

    // Funktion, die immer ausgeführt wird, sobald ein neuer Hero geladen wird
    constructor() {
        super().loadImage('../img/2_character_pepe/1_idle/idle/I-1.png'); // nur bei Methoden wird super benötigt
        this.loadImages(this.IMAGES_WALK);
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_JUMP);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT);
        this.position_x = 280; // Bei variablen wird super nicht benötigt
        this.position_y = 145;
        this.height = 1200 / 3;
        this.width = 610 / 3;
        this.animateIdle();
        this.applyGravity();
    }

    animateIdle() {
        setInterval(() => {
            this.walking_sound.pause();
            if (this.world.keyboard.RIGHT && this.position_x < this.world.level_end) {
                this.moveRight()
                this.walking_sound.play();
            }
            if (this.world.keyboard.LEFT && this.position_x > 0) {
                this.moveLeft()
                this.mirroredImage = true;
                this.walking_sound.play();
            }
            if (this.world.keyboard.SPACE && !this.isAboveGround()) {
                this.jump();
            }
            this.world.camera_x = -this.position_x + 300
        }, 1000 / 60)

        setInterval(() => {
            if (!this.isDead) {
                if (this.isAboveGround()) {
                    this.playAnimation(this.IMAGES_JUMP);
                } else if (this.isHurt()) {
                    this.playAnimation(this.IMAGES_HURT);
                }
                else if (this.world.keyboard.RIGHT ||
                    this.world.keyboard.LEFT) {
                    this.playAnimation(this.IMAGES_WALK);
                } else {
                    this.playAnimation(this.IMAGES_IDLE)
                }
            } else {
                this.playAnimation(this.IMAGES_DEAD);
                //this.isDead = false;
            }


        }, 1000 / 10);
    }



}
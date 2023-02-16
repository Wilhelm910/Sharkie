let canvas;
let world;
let keyboard = new Keyboard();


function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);

    console.log('my character is', world.hero)
    //character.src = '../img/1.Sharkie/1.IDLE/1.png';
    // ctx.drawImage(character,20,20,50,150); // in Pixel: x-Position,y-Position,Breite,Höhe
}
/*
function drawThisShit() {
    world.drawHero();
    for (let i = 0; i < world.enemies.length; i++) {
        world.drawEnemies(i);
    }
}
*/


window.addEventListener('keydown', (event) => {
    let key = event.keyCode
    if (key == 37) {
        keyboard.LEFT = true;
    }
    if (key == 38) {
        keyboard.UP = true;
    }
    if (key == 39) {
        keyboard.RIGHT = true;
    }
    if (key == 40) {
        keyboard.DOWN = true;
    }
    if (key == 32) {
        keyboard.SPACE = true;
    }
    if (key == 68) {
        keyboard.D = true;
    }
});


window.addEventListener('keyup', (event) => {
    let key = event.keyCode
    if (key == 37) {
        keyboard.LEFT = false;
    }
    if (key == 38) {
        keyboard.UP = false;
    }
    if (key == 39) {
        keyboard.RIGHT = false;
    }
    if (key == 40) {
        keyboard.DOWN = false;
    }
    if (key == 32) {
        keyboard.SPACE = false;
    }
    if (key == 68) {
        keyboard.D = false;
    }
});
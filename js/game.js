let canvas;
let world;
let gamespeed =  5;
let keyboard = new Keyboard();

function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas,keyboard);
}

function changeSpeed() {
    let slider = document.getElementById('slider');
    document.getElementById('showGamespeed').innerHTML = slider.value
    gamespeed = slider.value
}

window.addEventListener('keydown', (event) => {
    let key = event.keyCode
    if (key == 37) {
        keyboard.LEFT = true;
      //  gamespeed = 0;
    }
    if (key == 38) {
        keyboard.UP = true;
    }
    if (key == 39) {
        keyboard.RIGHT = true;
      //  gamespeed = 15;
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
      // gamespeed = 0;
    }
    if (key == 38) {
        keyboard.UP = false;
    }
    if (key == 39) {
        keyboard.RIGHT = false;
      // gamespeed = 0;
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



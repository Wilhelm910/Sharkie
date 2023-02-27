let canvas;
let world;
let gamespeed =  5;
let keyboard = new Keyboard();
let intervalIDs = []

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


function startGame() {
    let container = document.getElementById('container');
    container.classList.remove('d-none');
    let buttons = document.getElementById('buttons-section');
    buttons.classList.add('d-none');
    init();
}


function enterFullscreen(element) {
    if(element.requestFullscreen) {
      element.requestFullscreen();
    } else if(element.msRequestFullscreen) {      // for IE11 (remove June 15, 2022)
      element.msRequestFullscreen();
    } else if(element.webkitRequestFullscreen) {  // iOS Safari
      element.webkitRequestFullscreen();
    }
  }

  function exitFullscreen() {
    if(document.exitFullscreen) {
      document.exitFullscreen();
    } else if(document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }

  function fullScreen() {
    console.log("test")
    enterFullscreen(document.getElementById('container'));
  }



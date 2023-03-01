let canvas;
let world;
//let gamespeed = 5;
let keyboard = new Keyboard();
let intervalIDs = []
//let distance = 0;
let gameStart = false;
let test123 = false;

function init() {
    gameStart = true;
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
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

// distance zurücksetzen

function startGame() {
    let container = document.getElementById('canvas-container');
    container.classList.remove('d-none');
    let startScreen = document.getElementById('start-screen');
    startScreen.classList.add('d-none');
    test123 = true;
    init();
}


function enterFullscreen(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.msRequestFullscreen) {      // for IE11 (remove June 15, 2022)
        element.msRequestFullscreen();
    } else if (element.webkitRequestFullscreen) {  // iOS Safari
        element.webkitRequestFullscreen();
    }
}

function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
}

function fullScreen() {
    alert('Not yet implemented')
   // enterFullscreen(document.getElementById('container'));
}


function showControllKeys() {
    document.getElementById('game-navigation').classList.add('d-none')
    document.getElementById('controll-keys').classList.remove('d-none')
    document.getElementById('return-btn').classList.remove('d-none')
}

function returnToNavigation() {
    document.getElementById('game-navigation').classList.remove('d-none')
    document.getElementById('return-btn').classList.add('d-none')
    if (document.getElementById('controll-keys').classList.contains('d-none')) {
        document.getElementById('credit-section').classList.add('d-none')
    }
    if (document.getElementById('credit-section').classList.contains('d-none')) {
        document.getElementById('controll-keys').classList.add('d-none')
    }
}

function showCredits() {
    document.getElementById('game-navigation').classList.add('d-none')
    document.getElementById('credit-section').classList.remove('d-none')
    document.getElementById('return-btn').classList.remove('d-none')
}


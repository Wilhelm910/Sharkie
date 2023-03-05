let canvas;
let world;
let keyboard = new Keyboard();
let gameStart = false;
let mainMenu = false;
let sound = true;

function init() {
    gameStart = true;
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
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
    let container = document.getElementById('canvas-container');
    container.classList.remove('d-none');
    let startScreen = document.getElementById('start-screen');
    startScreen.classList.add('d-none');
    mainMenu = false;
    init();
    updateInGameSoundIcons()
}

function updateInGameSoundIcons() {
    if (sound) {
        document.getElementById('in-game-sound-on').classList.remove('d-none')
        document.getElementById('in-game-sound-off').classList.add('d-none')
    } else if (!sound) {
        document.getElementById('in-game-sound-on').classList.add('d-none')
        document.getElementById('in-game-sound-off').classList.remove('d-none')
    }
}


function soundOptions() {
    if (sound) {
        sound = false;
        console.log(sound)
        document.getElementById('sound-on').classList.remove('d-none')
        document.getElementById('sound-off').classList.add('d-none')
    } else if (!sound) {
        sound = true;
        console.log(sound)
        document.getElementById('sound-on').classList.add('d-none')
        document.getElementById('sound-off').classList.remove('d-none')
    }
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


function backToMainMenu() {
    document.getElementById('canvas-container').classList.add('d-none')
    document.getElementById('start-screen').classList.remove('d-none')
    mainMenu = true;
    checkSoundOptions()
}


function checkSoundOptions() {
    if (sound) {
        document.getElementById('sound-on').classList.add('d-none')
        document.getElementById('sound-off').classList.remove('d-none')
    } else if (!sound) {
        document.getElementById('sound-on').classList.remove('d-none')
        document.getElementById('sound-off').classList.add('d-none')
    }
}


function soundOptionsInGame() {
    if (sound) {
        sound = false;
        console.log(sound)
        document.getElementById('in-game-sound-on').classList.add('d-none')
        document.getElementById('in-game-sound-off').classList.remove('d-none')
    } else if (!sound) {
        sound = true;
        console.log(sound)
        document.getElementById('in-game-sound-on').classList.remove('d-none')
        document.getElementById('in-game-sound-off').classList.add('d-none')
    }
}

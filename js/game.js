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

/**
 * 
 * This funcion is used to set variales on true, when buttons on the pad are pressed
 * 
 */
window.addEventListener('touchstart', (event) => {
    if (event.srcElement.className == 'mobile-icon up') {
        keyboard.UP = true;
    }
    if (event.srcElement.className == 'mobile-icon down') {
        keyboard.DOWN = true;
    }
    if (event.srcElement.className == 'mobile-icon left') {
        keyboard.LEFT = true;
    }
    if (event.srcElement.className == 'mobile-icon right') {
        keyboard.RIGHT = true;
    }
    if (event.srcElement.className == 'mobile-icon bubbleattack') {
        keyboard.SPACE = true;
    }
    if (event.srcElement.className == 'mobile-icon finattack') {
        keyboard.D = true;
    }
})

/**
 * 
 * This funcion is used to set variales on true, when buttons on the pad are pressed
 * 
 */
window.addEventListener('touchend', (event) => {
    if (event.srcElement.className == 'mobile-icon up') {
        keyboard.UP = false;
    }
    if (event.srcElement.className == 'mobile-icon down') {
        keyboard.DOWN = false;
    }
    if (event.srcElement.className == 'mobile-icon left') {
        keyboard.LEFT = false;
    }
    if (event.srcElement.className == 'mobile-icon right') {
        keyboard.RIGHT = false;
    }
    if (event.srcElement.className == 'mobile-icon bubbleattack') {
        keyboard.SPACE = false;
    }
    if (event.srcElement.className == 'mobile-icon finattack') {
        keyboard.D = false;
    }
})

/**
 * 
 * This funcion is used to set variales on true, when buttons on the keyboard are pressed
 * 
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

/**
 * 
 * This funcion is used to set variales on true, when buttons on the keyboard are pressed
 * 
 */
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


/**
 * 
 * This function is used to show the game screen and start the game
 * 
 */
function startGame() {
    document.getElementById('canvas-container').classList.remove('d-none');
    document.getElementById('start-screen').classList.add('d-none');
    document.getElementById('h1-container').classList.add('d-none')
    mainMenu = false;
    init();
    updateInGameSoundIcons();
    checkScreenRatio();
}

/**
 * 
 * This function is used to update the sound icon if user pressed it
 * 
 */
function updateInGameSoundIcons() {
    if (sound) {
        document.getElementById('in-game-sound-on').classList.remove('d-none')
        document.getElementById('in-game-sound-off').classList.add('d-none')
    } else if (!sound) {
        document.getElementById('in-game-sound-on').classList.add('d-none')
        document.getElementById('in-game-sound-off').classList.remove('d-none')
    }
}

/**
 * 
 * This function is used to activate or deactivate sound 
 * 
 */
function soundOptions() {
    if (sound) {
        sound = false;
        document.getElementById('sound-on').classList.remove('d-none')
        document.getElementById('sound-off').classList.add('d-none')
    } else if (!sound) {
        sound = true;
        document.getElementById('sound-on').classList.add('d-none')
        document.getElementById('sound-off').classList.remove('d-none')
    }
}

/**
 * 
 * This function is used to show the control keys in menu
 * 
 */
function showControllKeys() {
    document.getElementById('game-navigation').classList.add('d-none')
    document.getElementById('controll-keys').classList.remove('d-none')
    document.getElementById('return-btn').classList.remove('d-none')
}

/**
 * 
 * This function is used to get back to main menu
 * 
 */
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

/**
 * 
 * This function is used to show the credits in menu
 * 
 */
function showCredits() {
    document.getElementById('game-navigation').classList.add('d-none')
    document.getElementById('credit-section').classList.remove('d-none')
    document.getElementById('return-btn').classList.remove('d-none')
}

/**
 * 
 * This function is used to get back to main menu
 * 
 */
function backToMainMenu() {
    document.getElementById('canvas-container').classList.add('d-none')
    document.getElementById('start-screen').classList.remove('d-none')
    document.getElementById('h1-container').classList.remove('d-none')
    mainMenu = true;
    checkSoundOptions()
}

/**
 * 
 * This function is used to update the sound icon if user pressed it
 * 
 */
function checkSoundOptions() {
    if (sound) {
        document.getElementById('sound-on').classList.add('d-none')
        document.getElementById('sound-off').classList.remove('d-none')
    } else if (!sound) {
        document.getElementById('sound-on').classList.remove('d-none')
        document.getElementById('sound-off').classList.add('d-none')
    }
}

/**
 * 
 * This function is used to activate or deactivate sound 
 * 
 */
function soundOptionsInGame() {
    if (sound) {
        sound = false;
        document.getElementById('in-game-sound-on').classList.add('d-none')
        document.getElementById('in-game-sound-off').classList.remove('d-none')
    } else if (!sound) {
        sound = true;
        document.getElementById('in-game-sound-on').classList.remove('d-none')
        document.getElementById('in-game-sound-off').classList.add('d-none')
    }
}

/**
 * 
 * This function is used show the control keys for mobile 
 * 
 */
window.onresize = function () {
    console.log(window.innerHeight)
    if (window.innerHeight < 500) {
        document.getElementById('mobile-action-btn-container').classList.remove('d-none');
    } else {
        document.getElementById('mobile-action-btn-container').classList.add('d-none');
    }
}


/**
 * 
 * This function is used show the mobile action buttons
 * 
 */
function checkScreenRatio() {
setInterval(() => {
    if (window.innerHeight < 500 && mainMenu == false) {
        document.getElementById('mobile-action-btn-container').classList.remove('d-none');
    } else {
        document.getElementById('mobile-action-btn-container').classList.add('d-none');
    }
}, 500);
}


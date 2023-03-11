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


function mobielActionBtn(btn) {
    console.log(btn)
}

window.addEventListener('touchstart', (event) => {
    if (event.srcElement.className == 'mobile-icon up') {
        keyboard.UP = true;
    }
    console.log(event.srcElement.className)
})

window.addEventListener('touchend', (event) => {
    if (event.srcElement.className == 'mobile-icon up') {
        keyboard.UP = false;
    }
    console.log(event.srcElement.className)
})

/*
window.addEventListener('touchstart', () => {
    document.getElementById('btn-up').addEventListener('touchstart', () => {
        keyboard.UP = true;
    })
})


window.addEventListener('touchend', () => {
    document.getElementById('btn-up').addEventListener('touchend', () => {
        keyboard.UP = false;
    })
})

window.addEventListener('touchstart', () => {
    document.getElementById('btn-down').addEventListener('touchstart', () => {
        keyboard.DOWN = true;
    })
})


window.addEventListener('touchend', () => {
    document.getElementById('btn-down').addEventListener('touchend', () => {
        keyboard.DOWN = false;
    })
})

window.addEventListener('touchstart', () => {
    document.getElementById('btn-left').addEventListener('touchstart', () => {
        keyboard.LEFT = true;
    })
})


window.addEventListener('touchend', () => {
    document.getElementById('btn-left').addEventListener('touchend', () => {
        keyboard.LEFT = false;
    })
})

window.addEventListener('touchstart', () => {
    document.getElementById('btn-right').addEventListener('touchstart', () => {
        keyboard.RIGHT = true;
    })
})


window.addEventListener('touchend', () => {
    document.getElementById('btn-right').addEventListener('touchend', () => {
        keyboard.RIGHT = false;
    })
})

window.addEventListener('touchstart', () => {
    document.getElementById('btn-bubbleattack').addEventListener('touchstart', () => {
        keyboard.SPACE = true;
    })
})


window.addEventListener('touchend', () => {
    document.getElementById('btn-bubblettack').addEventListener('touchend', () => {
        keyboard.SPACE = false;
    })
})

window.addEventListener('touchstart', () => {
    document.getElementById('btn-finattack').addEventListener('touchstart', () => {
        keyboard.D = true;
    })
})


window.addEventListener('touchend', () => {
    document.getElementById('btn-finattack').addEventListener('touchend', () => {
        keyboard.D = false;
    })
})

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


function startGame() {
    document.getElementById('canvas-container').classList.remove('d-none');
    document.getElementById('start-screen').classList.add('d-none');
    document.getElementById('h1-container').classList.add('d-none')
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
        document.getElementById('sound-on').classList.remove('d-none')
        document.getElementById('sound-off').classList.add('d-none')
    } else if (!sound) {
        sound = true;
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
    document.getElementById('h1-container').classList.remove('d-none')
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
        document.getElementById('in-game-sound-on').classList.add('d-none')
        document.getElementById('in-game-sound-off').classList.remove('d-none')
    } else if (!sound) {
        sound = true;
        document.getElementById('in-game-sound-on').classList.remove('d-none')
        document.getElementById('in-game-sound-off').classList.add('d-none')
    }
}


window.onresize = function () {
    if (window.innerHeight < 500) {
        document.getElementById('mobile-action-btn-container').classList.remove('d-none');
    } else {
        document.getElementById('mobile-action-btn-container').classList.add('d-none');
    }
}

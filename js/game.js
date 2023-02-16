let canvas;
let world;
let gamespeed = 0;


function changeSpeed() {
    let slider = document.getElementById('slider');
    document.getElementById('showGamespeed').innerHTML = slider.value
    gamespeed = slider.value
}


function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas);
}


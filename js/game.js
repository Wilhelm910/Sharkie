let canvas;
let world;
let gamespeed = 5;
let slider = document.getElementById('slider');
console.log(slider)


function changeSpeed() {
    let slider = document.getElementById('slider');
    document.getElementById('showGamespeed').innerHTML = slider.value
    console.log("test")
    console.log(slider.value)
}
// Änderungen in slider.value an gamespeed übergeben und dann an init

function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas);
}


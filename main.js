import{birb} from './birb.js';


//Variables and constants.
let frames = 0;

loop();

//Draw
function draw() {
    birb.draw();
    //bg.draw();
    //Här lägger vi våra nya classer. Se BIRB för hur man gör med import/export.
}

//Update
function update() {

}

//Gameloop
function loop() {
    update();
    draw();
    frames++;

    requestAnimationFrame(loop);
}
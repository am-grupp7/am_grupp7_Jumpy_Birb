import { Birb } from './birb.js';
import { Background } from './background.js';
import { Pipes } from './pipes.js';
import { Foreground } from './foreground.js';
import { Controls } from './controls.js';
import { StartScreen } from './startScreen.js';
import { GameOver } from './gameOver.js';

class Main {
  
    constructor(cvs, ctx, body, state, frames) {
        this.cvs = cvs;
        this.ctx = ctx;
        this.state = state;
        this.frames = frames;
        this.pipes = new Pipes(cvs, ctx, state);
        this.background = new Background(ctx);
        this.foreground = new Foreground(ctx, state);
        this.startScreen = new StartScreen(cvs, ctx, state);
        this.gameOver = new GameOver(cvs, ctx, state);
        this.collisions = {
            fgCollision : this.cvs.height-this.foreground.h       
        }
        this.birb = new Birb(cvs, ctx, this.frames, this.collisions);
        this.controls = new Controls(body, this.birb);
       
    }

    //Draw
    draw() {
        this.background.draw();
        this.birb.draw();
        this.pipes.draw();
        this.foreground.draw();
        this.startScreen.draw(state);
        this.gameOver.draw(state);
        //Här lägger vi våra nya classer. Se BIRB för hur man gör med import/export.
    }

    //Update
    update() {
        this.birb.update();
        this.foreground.update(state);
        this.pipes.update(state, frames);
    }

    //Gameloop
    loop() {
        this.update();
        this.draw();
        this.frames++;
        requestAnimationFrame(() => this.loop());
    }

    start() {
        this.loop();
    }
}

const cvs = document.getElementById("canvas");
const ctx = cvs.getContext("2d");
const body = document.body;
let frames = 0;
const state = {
    current : 1,
    getReady : 0,
    game : 1,
    over : 2
}
let app = new Main(cvs, ctx, body, state, frames);
app.start()
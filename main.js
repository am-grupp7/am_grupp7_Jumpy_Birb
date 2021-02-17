import { Birb } from './birb.js';
import { Background } from './background.js';
import { Pipes } from './pipes.js';
import { Foreground } from './foreground.js';
import { Controls } from './controls.js';
import { StartScreen } from './startScreen.js';
import { GameOver } from './gameOver.js';

class Main {
    constructor(cvs, ctx, state) {
        this.cvs = cvs;
        this.ctx = ctx;
        this.state = state;
        this.frames = 0;
        this.birb = new Birb(cvs, ctx, this.frames);
        this.pipes = new Pipes(cvs, ctx);
        this.background = new Background(ctx);
        this.foreground = new Foreground(ctx);
        this.controls = new Controls(cvs);
        this.startScreen = new StartScreen(cvs, ctx, state);
        this.gameOver = new GameOver(cvs, ctx, state);
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
    }

    //Gameloop
    loop() {
        this.update();
        this.draw();
        requestAnimationFrame(() => this.loop());
    }

    start() {
        this.loop();
    }
}

const cvs = document.getElementById("canvas");
const ctx = cvs.getContext("2d");
const state = {
    current : 2,
    getReady : 0,
    game : 1,
    over : 2
}
let app = new Main(cvs, ctx, state);
app.start()


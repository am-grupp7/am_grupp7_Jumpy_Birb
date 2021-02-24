import { Birb } from './birb.js';
import { Background } from './background.js';
import { Pipes } from './pipes.js';
import { Foreground } from './foreground.js';
import { Controls } from './controls.js';
import { StartScreen } from './startScreen.js';
import { Score } from './score.js';
import { GameOver } from './gameOver.js';


class Main {
  
    constructor(cvs, ctx, state, score) {
        this.cvs = cvs;
        this.ctx = ctx;
        this.frames = 0;
        
        this.background = new Background(ctx);
        this.foreground = new Foreground(ctx, state);
        this.startScreen = new StartScreen(cvs, ctx, state);
        this.gameOver = new GameOver(cvs, ctx, state);
        this.collisions = {
            fgCollision : this.cvs.height-this.foreground.h       
        }
        this.birb = new Birb(cvs, ctx, this.collisions, state);
        this.pipes = new Pipes(cvs, ctx, state, score);
        this.controls = new Controls(this.birb, state);
        this.score = new Score(score, ctx, cvs, state);
       
    }

    //Draw
    draw() {
        this.background.draw();
        this.pipes.draw();
        this.foreground.draw();
        this.birb.draw();
        this.startScreen.draw(state);
        this.gameOver.draw(state);
        this.score.draw(score, cvs, state);
        //Här lägger vi våra nya classer. Se BIRB för hur man gör med import/export.
    }

    //Update
    update() {
        this.birb.update();
        this.foreground.update(state);
        this.pipes.update(state, this.frames, score, this.birb);

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
const state = {
    current : 0,
    getReady : 0,
    game : 1,
    over : 2
}
const score = {
    best : 0,
    value : 0
}
let app = new Main(cvs, ctx, state, score);
app.start()
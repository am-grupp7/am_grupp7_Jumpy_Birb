import { Birb } from './birb.js';
import { Background } from './background.js';
import { Pipes } from './pipes.js';
import { Foreground } from './foreground.js';
import { Controls } from './controls.js';

class Main {
    constructor(cvs, ctx) {
        this.cvs = cvs;
        this.ctx = ctx;
        this.frames = 0;
        this.birb = new Birb(cvs, ctx, this.frames);
        this.pipes = new Pipes(cvs, ctx);
        this.controls = new Controls(cvs);
        this.background = new Background(ctx);
        this.foreground = new Foreground(ctx);
        this.controls = new Controls(cvs)
    }

    //Draw
    draw() {
        this.background.draw();
        this.birb.draw();
        //bg.draw();
        this.pipes.draw();
        this.foreground.draw();
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
let app = new Main(cvs, ctx);
app.start()


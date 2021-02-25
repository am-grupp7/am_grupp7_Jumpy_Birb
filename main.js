import { Birb } from './birb.js';
import { Background } from './background.js';
import { Pipes } from './pipes.js';
import { Foreground } from './foreground.js';
import { Controls } from './controls.js';
import { StartScreen } from './startScreen.js';
import { Score } from './score.js';
import { GameOver } from './gameOver.js';


class Main {

    constructor(canvas, canvasContext, state, score, highScore) {
        this.canvas = canvas;
        this.canvasContext = canvasContext;
        this.frames = 0;
        this.pipes = new Pipes(canvas, canvasContext, state, score);
        this.background = new Background(canvasContext);
        this.foreground = new Foreground(canvasContext, state);
        this.startScreen = new StartScreen(canvas, canvasContext, state);
        this.gameOver = new GameOver(canvas, canvasContext, state);

        this.collisionsCoordinates = {
            fg: this.canvas.height - this.foreground.height + 35,
            top: 0,
            pipes: this.pipes.positions,
            gap: this.pipes.gap
        }
        this.birb = new Birb(canvas, canvasContext, this.collisionsCoordinates, state);
        this.controls = new Controls(this.birb, state);
        this.score = new Score(score, canvasContext, canvas, state, highScore);

    }

    //Draw
    draw() {
        this.background.draw();
        this.pipes.draw();
        this.foreground.draw();
        this.birb.draw();
        this.startScreen.draw(state);
        this.gameOver.draw(state);
        this.score.draw(score, canvas, state, highScore);

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

const canvas = document.getElementById("canvas");
const canvasContext = canvas.getContext("2d");
const state = {
    current: 0,
    start: 0,
    game: 1,
    over: 2
}
const score = {
    best: 0,
    value: 0
}

const highScore = []


let app = new Main(canvas, canvasContext, state, score, highScore);
app.start()

//skiss
/*function toHighScoreArr() {
    highScore.push(score.value);
    highScore.sort();

    highScore.forEach(element => {
        div = document.createElement('div')
        div.innerText = element
        text.appendChild(div)
    });

    if (highScore.length === 11) {
        highScore.pop();
    }
    //ta in något i listan 
    //sortera listan -
    //ta bort något från listan -
    //skriva in namn
    //omvandla från sträng till int
    //visa listan
}*/
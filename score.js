export class Score {
    constructor(score, canvasContext, canvas) {
        this.score = score;
        this.canvasContext = canvasContext;
        this.canvas = canvas;

    }

    draw() {
        this.canvasContext.fillStyle = "green";
        this.canvasContext.strokeStyle = "#000";
        this.canvasContext.font = "35px Verdana";
        this.canvasContext.fillText(this.score.value, 50, 50);
        this.canvasContext.strokeText(this.score.value, 50, 50);
        

    }

}


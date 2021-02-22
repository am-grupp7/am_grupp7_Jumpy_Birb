export class Score {
    constructor(score, ctx, cvs) {
        this.score = score;
        this.ctx = ctx;
        this.cvs = cvs;

    }

    draw() {
        this.ctx.fillStyle = "green";
        this.ctx.strokeStyle = "#000";
        this.ctx.font = "35px Verdana";
        this.ctx.fillText(this.score.value, 50, 50);
        this.ctx.strokeText(this.score.value, 50, 50);
        

    }

}


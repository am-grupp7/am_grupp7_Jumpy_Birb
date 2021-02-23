export class Score {
    constructor(score, ctx, cvs, state) {
        this.score = score;
        this.ctx = ctx;
        this.cvs = cvs;
        this.state = state;

    }

    draw() {
        

        if (this.state.current == this.state.game) {
            this.ctx.fillStyle = "white";
            this.ctx.strokeStyle = "#000";
            this.ctx.font = "35px Verdana";
            this.ctx.fillText(this.score.value, this.cvs.width/2, 50);
            this.ctx.strokeText(this.score.value, this.cvs.width/2, 50);
        }
        else if(this.state.current == this.state.over) {
            this.ctx.fillStyle = "black";
            this.ctx.strokeStyle = "#000";
            this.ctx.font = "35px Verdana";
            this.ctx.fillText(this.score.value, 250, 215);
            this.ctx.strokeText(this.score.value, 250, 215);

            this.ctx.fillText(this.score.best, 370, 215);
            this.ctx.strokeText(this.score.best, 370, 215);
        }
    }
}


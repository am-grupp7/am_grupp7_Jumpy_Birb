export class Score {
    constructor(score, canvasContext, canvas, state, highScore) {
        this.score = score;
        this.canvasContext = canvasContext;
        this.canvas = canvas;
        this.state = state;
        this.highScore = highScore;
        this.text = document.getElementsByClassName('highScore')[0]
        this.showedHighScore = false;
    }

    toHighScoreArr() {
        this.highScore.push(this.score.value);
        this.highScore.sort();
        
        this.highScore.forEach(element => {
            let div = document.createElement('div')
            div.innerText = element
            this.text.appendChild(div)
        });
    
        if(this.highScore.length == 11) {
            this.highScore.pop();
        }
        console.log("Heja Frölunda");
       this.showedHighScore = true;
    }

    draw() {

        if (this.state.current == this.state.game) {
            this.canvasContext.fillStyle = "white";
            this.canvasContext.strokeStyle = "#000";
            this.canvasContext.font = "35px Verdana";
            this.canvasContext.fillText(this.score.value, this.canvas.width / 2, 50);
            this.canvasContext.strokeText(this.score.value, this.canvas.width / 2, 50);
        }
        else if (this.state.current == this.state.over) {

            this.canvasContext.fillStyle = "black";
            this.canvasContext.strokeStyle = "#000";
            this.canvasContext.font = "35px Verdana";
            this.canvasContext.fillText(this.score.value, 250, 215);
            this.canvasContext.strokeText(this.score.value, 250, 215);

            // HighScore
            let storedBestScore = localStorage.getItem("bestScore");
            if (storedBestScore != null) {

                if (this.score.value > parseInt(storedBestScore)) {
                    localStorage.setItem("bestScore", this.score.value);
                }
                else {
                    this.score.best = localStorage.getItem("bestScore");
                }
            }
            else {
                localStorage.setItem("bestScore", this.score.value);

            }
            this.canvasContext.fillText(this.score.best, 370, 215);
            this.canvasContext.strokeText(this.score.best, 370, 215);



    }

    
   
}

}


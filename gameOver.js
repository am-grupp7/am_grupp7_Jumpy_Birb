export class GameOver {
    constructor(canvas, canvasContext, state) {
        this.canvasContext = canvasContext,
        this.canvas = canvas,           
        this.state = state,   
        this.spriteX = 0,
        this.spriteY = 0,
        this.xPos = canvas.width/2 - 225/2,
        this.yPos = 100,
        this.width = 225,
        this.height = 200;

        this.gameOverSprite = new Image();
        this.gameOverSprite.src = "images/gameover.png"; 
    }
    
    draw(state) {
        if(state.current === state.over) {
        this.canvasContext.drawImage(this.gameOverSprite, this.spriteX, this.spriteY, this.width, this.height, this.xPos, this.yPos, this.width, this.height);
        }
    }
}

export class StartScreen {
    constructor(canvas, canvasContext, state) {
        this.canvasContext = canvasContext,
        this.canvas = canvas, 
        this.state = state,             
        this.spriteX = 0,
        this.spriteY = 0,
        this.xPos = canvas.width/2 - 200/2,
        this.yPos = 175,
        this.width = 200,
        this.height = 150;

        this.startSprite = new Image();
        this.startSprite.src = "images/Start.png"; 
    }
    
    draw(state) {
        if(state.current === state.start){
        this.canvasContext.drawImage(this.startSprite, this.spriteX, this.spriteY, this.width, this.height, this.xPos, this.yPos, this.width, this.height);
        }
    }
}

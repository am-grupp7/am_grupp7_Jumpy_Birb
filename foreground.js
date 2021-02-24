export class Foreground {
    constructor(canvasContext, state) {
        this.canvasContext = canvasContext;
        this.state = state;               
        this.spriteX = 0,
        this.spriteY = 0,
        this.xPos = 0,
        this.yPos = 345,
        this.width = 720,
        this.height = 105;
        this.speedDeltaX = 2;

        this.foregroundSprite = new Image();
        this.foregroundSprite.src = "images/foreground.png"; 
    }
    
    draw() {
        this.canvasContext.drawImage(this.foregroundSprite, this.spriteX, this.spriteY, this.width, this.height, this.xPos, this.yPos, this.width, this.height);
        this.canvasContext.drawImage(this.foregroundSprite, this.spriteX, this.spriteY, this.width, this.height, this.xPos + (this.width - 5), this.yPos, this.width, this.height);
    }

    update(state) {
        if(state.current === state.game) {
            //Move foreground to the left by this.speedDeltaX
            this.xPos = (this.xPos - this.speedDeltaX)%(this.width);
        }
    }
}

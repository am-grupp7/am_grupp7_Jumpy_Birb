export class GameOver {
    constructor(cvs, ctx, state) {
        this.ctx = ctx,
        this.cvs = cvs,           
        this.state = state,   
        this.sX = 175,
        this.sY = 228,
        this.x = cvs.width/2 - 225/2,
        this.y = 90,
        this.w = 225,
        this.h = 202;

        this.gameOverSprite = new Image();
        this.gameOverSprite.src = "images/sprite.png"; 
    }
    
    draw(state) {
        if(state.current === state.over)
        this.ctx.drawImage(this.gameOverSprite, this.sX, this.sY, this.w, this.h, this.x, this.y, this.w, this.h);
        }
}

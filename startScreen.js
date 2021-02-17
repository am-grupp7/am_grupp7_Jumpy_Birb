export class StartScreen {
    constructor(cvs, ctx, state) {
        this.ctx = ctx,
        this.cvs = cvs, 
        this.state = state,             
        this.sX = 0,
        this.sY = 228,
        this.x = cvs.width/2 - 173/2,
        this.y = 80,
        this.w = 173,
        this.h = 152;

        this.startSprite = new Image();
        this.startSprite.src = "images/sprite.png"; 
    }
    
    draw(state) {
        if(state.current === state.getReady){
        this.ctx.drawImage(this.startSprite, this.sX, this.sY, this.w, this.h, this.x, this.y, this.w, this.h);
        }
    }
}

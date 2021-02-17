export class StartScreen {
    constructor(cvs, ctx, state) {
        this.ctx = ctx,
        this.cvs = cvs, 
        this.state = state,             
        this.sX = 0,
        this.sY = 0,
        this.x = cvs.width/2 - 200/2,
        this.y = 175,
        this.w = 200,
        this.h = 150;

        this.startSprite = new Image();
        this.startSprite.src = "images/Start.png"; 
    }
    
    draw(state) {
        if(state.current === state.getReady){
        this.ctx.drawImage(this.startSprite, this.sX, this.sY, this.w, this.h, this.x, this.y, this.w, this.h);
        }
    }
}

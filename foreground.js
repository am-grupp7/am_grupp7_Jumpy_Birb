export class Foreground {
    constructor(ctx, state) {
        this.ctx = ctx;
        this.state = state;               
        this.sX = 0,
        this.sY = 0,
        this.x = 0,
        this.y = 345,
        this.w = 720,
        this.h = 105;
        this.dx = 2;

        this.foregroundSprite = new Image();
        this.foregroundSprite.src = "images/foreground.png"; 
    }
    
    draw() {
        this.ctx.drawImage(this.foregroundSprite, this.sX, this.sY, this.w, this.h, this.x, this.y, this.w, this.h);
        this.ctx.drawImage(this.foregroundSprite, this.sX, this.sY, this.w, this.h, this.x + (this.w - 5), this.y, this.w, this.h);
    }

    update(state) {
        if(state.current === state.game) {
            this.x = (this.x - this.dx)%(this.w);
        }
    }
}

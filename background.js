export class Background {
    constructor(ctx) {
        this.ctx = ctx;

                
        this.sX = 0,
        this.sY = 0,
        this.x = 0,
        this.y = 0,
        this.w = 720,
        this.h = 449;

        this.backgroundSprite = new Image();
        this.backgroundSprite.src = "images/background.png"; 
    }
    
    draw() {
        this.ctx.drawImage(this.backgroundSprite, this.sX, this.sY, this.w, this.h, this.x, this.y, this.w, this.h);
    }
}

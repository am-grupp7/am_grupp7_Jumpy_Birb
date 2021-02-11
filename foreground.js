export class Foreground {
    constructor(ctx) {
        this.ctx = ctx;

                
        this.sX = 0,
        this.sY = 0,
        this.x = 0,
        this.y = 345,
        this.w = 720,
        this.h = 105;

        this.foregroundSprite = new Image();
        this.foregroundSprite.src = "images/foreground.png"; 
    }
    
    draw() {
        this.ctx.drawImage(this.foregroundSprite, this.sX, this.sY, this.w, this.h, this.x, this.y, this.w, this.h);
        }
}

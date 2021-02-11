<<<<<<< HEAD
behövs ej?
=======

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
        //this.ctx.fillStyle = "#70c5ce"
        //this.ctx.fillRect(0, 0, 720, 449);
        this.ctx.drawImage(this.backgroundSprite, this.sX, this.sY, this.w, this.h, this.x, this.y, this.w, this.h);
        
    }
}
>>>>>>> bfe531a28e3bbc1f3944a2d9fc4f16a8aa6d18ec

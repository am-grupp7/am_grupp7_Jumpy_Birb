export class Pipes {
    constructor(cvs, ctx) {
        this.cvs = cvs;
        this.ctx = ctx;

                
        this.sX = 0,
        this.sY = 0,
        this.x = 500,
        this.y = -80,
        this.w = 100,
        this.h = 249;

        this.pipes = new Image();
        this.pipes.src = "images/TopPipe.png"; 

        // Testing

        //once more
    }
    
    draw() {
      this.ctx.drawImage(this.pipes, this.sX, this.sY, this.w, this.h, this.x, this.y, this.w, this.h);
        
    }
}

export class Pipes {
    constructor(cvs, ctx) {
        this.cvs = cvs;
        this.ctx = ctx;
             
        this.topsX = 0,
        this.topsY = 0,
        
        this.topx = 500,
        this.topy = -80,

        this.topw = 100,
        this.toph = 249;

        this.pipeTop = new Image();
        this.pipeTop.src = "images/TopPipe.png"; 
      
        this.btmsX = 0,
        this.btmsY = 0,
        
        this.btmx = 500,
        this.btmy = 240,

        this.btmw = 100,
        this.btmh = 249;

        this.pipeBottom = new Image();
        this.pipeBottom.src = "images/BottomPipe.png"; 

    }
    
    draw() {
        
      this.ctx.drawImage(this.pipeTop, this.topsX, this.topsY, this.topw, this.toph, this.topx, this.topy, this.topw, this.toph);
      this.ctx.drawImage(this.pipeBottom, this.btmsX, this.btmsY, this.btmw, this.btmh, this.btmx, this.btmy, this.btmw, this.btmh);

    }

    

}

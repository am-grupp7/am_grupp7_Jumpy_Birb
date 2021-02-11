<<<<<<< HEAD
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
    }
    
    draw() {
      this.ctx.drawImage(this.pipes, this.sX, this.sY, this.w, this.h, this.x, this.y, this.w, this.h);
        
    }
}
=======
const topPipe = new Image();
topPipe.src = "TopPipe.png";

const pipes = {
    position : [],

    top : {
        sX : 0,
        sY : 0
    },
    bottom : {
        sX : 0,
        sY : 0
    },

    w : 50,
    h : 327,
    gap : 85,
    maxYPos : -150,
    dx : 2,

    draw : function(){
        for(let i = 0; i < this.position.length; i++){
            let p = this.position[i];

            let topYPos = p.y;
            let bottomYPos = p.y + this.h + this.gap;

            //top pipe
            ctx.drawImage(TopPipe, this.top.sX, this.top.sY, this.w, this.h, p.x, topYPos, this.w, this.h);

            //bottom pipe
            ctx.drawImage(TopPipe, this.bottom.sX, this.bottom.sY, this.w, this.h, p.x, bottomYPos, this.w, this.h);
        }
    },

    update: function(){
        if(state.current !== state.game) return;
        
        if(frames%100 == 0){
            this.position.push({
                x : cvs.width,
                y : this.maxYPos * ( Math.random() + 1)
            });
        }
        for(let i = 0; i < this.position.length; i++){
            let p = this.position[i];
            
            let bottomPipeYPos = p.y + this.h + this.gap;
            
            //Collision detection, Top Pipe
            if(birb.x + birb.radius > p.x && birb.x - birb.radius < p.x + this.w && birb.y + birb.radius > p.y && birb.y - birb.radius < p.y + this.h){
                state.current = state.over;
                HIT.play();
            }
            //Bottom pipe
            if(birb.x + birb.radius > p.x && birb.x - birb.radius < p.x + this.w && birb.y + birb.radius > bottomPipeYPos && birb.y - birb.radius < bottomPipeYPos + this.h){
                state.current = state.over;
                HIT.play();
            }
            //Moves the pipe to the left
            p.x -= this.dx;
            
            //If the pipes go beyond canvas, we delete them from array
            if(p.x + this.w <= 0){
                this.position.shift();
                score.value += 1;
                SCORE_S.play();
                score.best = Math.max(score.value, score.best);
                localStorage.setItem("best", score.best);
            }
        }
    },
    
    reset : function(){
        this.position = [];
    }
}

export { draw, update };
>>>>>>> baca7b5a1ec9f6f58fad6772c32096cc594b68d7

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


}

export { draw };
//Visuell representation av Birb.
export class Birb {
        constructor(cvs, ctx) {
            this.cvs = cvs;
            this.ctx = ctx;

            this.animation = [
                {sX: 0, sY: 0},
                {sX: 0, sY: 26}, 
                {sX: 0, sY: 52},
                {sX: 0, sY: 26}
            ],
            this.x = 50, 
            this.y = 50, 
            this.w = 50, 
            this.h = 26;
            this.frames = 0;
            this.frame = 0;
            this.birbSprite = new Image();  
            this.birbSprite.src = "images/birb.png"
           
    }
    
    draw() {
        //let birb = this.animation[this.frame];
        let animation = this.animation[this.frame];
        this.ctx.drawImage(this.birbSprite, animation.sX, animation.sY, this.w, this.h, this.x, this.y, 
            this.w, this.h);

    }

    update() {
        let period = 10;
        this.frame += this.frames% period == 0 ? 1 : 0;
        this.frame = this.frame%this.animation.length;
        this.frames++;
    }
}




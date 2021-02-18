//Visuell representation av Birb.
export class Birb {
    constructor(cvs, ctx, collisions) {
        this.cvs = cvs;
        this.ctx = ctx;
        this.collisions = collisions;
        this.animation = [
            { sX: 0, sY: 0 },
            { sX: 0, sY: 24 },
            { sX: 0, sY: 50 },
            { sX: 0, sY: 24 }
        ];
            this.x = 50;
            this.y = 0;
            this.w = 50;
            this.h = 26;
            this.frames = 0;
            this.frame = 0;
            this.birbSprite = new Image();
            this.birbSprite.src = "images/birb.png";
            this.speed = 0;
            this.gravity = 0.05;
            this.jump = 2.3;

    }

    draw() {
        //let birb = this.animation[this.frame];
        let animation = this.animation[this.frame];
        this.ctx.drawImage(this.birbSprite, animation.sX, animation.sY, this.w, this.h, this.x, this.y,
            this.w, this.h);

    }

    update() {

        //Animation
        let period = 5;
        this.frame += this.frames % period == 0 ? 1 : 0;
        this.frame = this.frame % this.animation.length;
        this.speed += this.gravity;
        this.y += this.speed;

        
        //if(state.current == state.getReady()){this.y = 150} else {
        //Movement 
       
        if(this.y + this.h/2 >= this.collisions.fgCollision) {
             this.y = this.collisions.fgCollision - this.h/2;
          if(state.current == state.game) {state.current = state.over}

         
        }

        this.frames++;
    }

    flap() {
        this.speed -= this.jump;
    }


}




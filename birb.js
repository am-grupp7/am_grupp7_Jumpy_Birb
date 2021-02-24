//Visuell representation av Birb.
export class Birb {
    constructor(cvs, ctx, collisions, state) {
        this.cvs = cvs;
        this.ctx = ctx;
        this.collisions = collisions;
        this.animation = [
            { sX: 0, sY: 0 },
            { sX: 0, sY: 24 },
            { sX: 0, sY: 50 },
            { sX: 0, sY: 24 }
        ],
            this.x = 50,
            this.y = 0,
            this.w = 33,
            this.h = 26,
            this.frames = 0,
            this.frame = 0,
            this.birbSprite = new Image(),
            this.birbSprite.src = "images/birb.png",
            this.rotation = 0;
        this.speed = 2.5,
            this.gravity = 0.03,
            this.jump = 1;
        this.state = state;

    }

    draw() {
        //let birb = this.animation[this.frame];
        let animation = this.animation[this.frame];
        this.ctx.save();
        this.ctx.translate(this.x, this.y);
        this.ctx.rotate(this.rotation);
        this.ctx.drawImage(
            this.birbSprite,
            animation.sX,
            animation.sY,
            this.w,
            this.h,
            -this.w / 2,
            -this.h / 2,
            this.w,
            this.h
        );
        this.ctx.restore();
    }

    update() {
        const DEGREE = Math.PI / 180;
        //Animation
        let period = this.state.current == 0 ? 10 : 5;

        this.frame += this.frames % period == 0 ? 1 : 0;
        this.frame = this.frame % this.animation.length;


        if (this.state.current == this.state.getReady) {
            this.y = 150
            this.rotation = 0 * DEGREE;

        } else {

            this.speed += this.gravity;
            this.y += this.speed;

            if (this.y + this.h / 2 >= this.collisions.fg) {
                this.y = this.collisions.fg - this.h / 2;
                if (this.state.current == this.state.game) {
                    this.state.current = this.state.over;
                }
            }

            if (this.y + this.h / 2 <= this.collisions.top) {
                this.y = this.collisions.top - this.h / 2;
                if (this.state.current == this.state.game) {
                    this.state.current = this.state.over;
                    return;
                }

            }


            function frame() {
                console.log("hello")
                if (this.x == 1) {
                    clearInterval(id);
                } else {
                    console.log("minus x", this.x)
                    this.x--;
                }
            }

            //pipes
            if (this.collisions.pipes.length > 0) {
                let id = null;
                if (this.y + this.h / 2 > this.collisions.pipes[0].y || this.y + this.h / 2 < this.collisions.pipes[0].y + this.collisions.gap + 100 &&
                    this.x + this.w / 2 >= this.collisions.pipes[0].x  // the pipes in x 
                       //the lower pipe
                     // the top pipe
                    ) 
                     {

                    console.log("just nu")
                    this.state.current = this.state.over;
                    this.collisions.pipes = [];

                /*if (this.x + this.w/2 > this.collisions.pipes[0].x && this.x -this.w/2 < this.collisions.pipes[0].x) */
                    
                    //clearInterval(id);
                    //id = setInterval(frame, 10)
                   







                }
            }





            /*             if ( birdX >= pipeMinX && birdX <= pipeMaxX && birdY >= pipeMinY && birdY <= pipeMaxY) { ... }
             */
            /*     if (frames % 150 == 0) {
                    this.positions.push({
                      x: this.cvs.width,
                      y: this.maxYPos * (Math.random() + 1)
              
                    });
              
                  } */

            /*    this.collisions = {
                   fg : this.cvs.height-this.foreground.h + 35,
                   top : 0,
                   pipe : this.pipes.positions[0].x
               } */





            //Bird is falling:
            if (this.speed >= this.jump) {
                this.rotation = 90 * DEGREE;
                this.frame = 1;
            } else {
                this.rotation = -25 * DEGREE;
            }
        }

        this.frames++;
    }

    flap() {
        if (this.state.current == this.state.over) {
            return;
        }
        this.speed -= this.jump;
    }
}

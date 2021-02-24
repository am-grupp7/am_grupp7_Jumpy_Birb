//Visuell representation av Birb.
export class Birb {
    constructor(canvas, canvasContext, collisionsCoordinates, state) {
        this.canvas = canvas;
        this.canvasContext = canvasContext;
        this.collisionsCoordinates = collisionsCoordinates;
        this.animation = [
            { spriteX: 0, spriteY: 0 },
            { spriteX: 0, spriteY: 24 },
            { spriteX: 0, spriteY: 50 },
            { spriteX: 0, spriteY: 24 }
        ],
            this.xPos = 50,
            this.yPos = 0,
            this.width = 33,
            this.height = 26,
            this.frames = 0,
            this.frame = 0,
            this.birbSprite = new Image(),
            this.birbSprite.src = "images/birb.png",
            this.rotation = 0;
            this.fallingSpeed = 2.5,
            this.fallAcceleration = 0.03,
            this.jump = 1.5;
            this.state = state;

    }

    draw() {
        //let birb = this.animation[this.frame];
        let animation = this.animation[this.frame];
        this.canvasContext.save();
        this.canvasContext.translate(this.xPos, this.yPos);
        this.canvasContext.rotate(this.rotation);
        this.canvasContext.drawImage(
            this.birbSprite,
            animation.spriteX,
            animation.spriteY,
            this.width,
            this.height,
            -this.width / 2,
            -this.height / 2,
            this.width,
            this.height
        );
        this.canvasContext.restore();
    }

    update() {
        const DEGREE = Math.PI / 180;
        //Animation
        let period = this.state.current == 0 ? 10 : 5;
        this.frame += this.frames % period == 0 ? 1 : 0;
        this.frame = this.frame % this.animation.length;
        //

        //Reset bird to original position
        if (this.state.current == this.state.start) {
            this.yPos = 150
            this.rotation = 0;
        } else {

            this.fallingSpeed += this.fallAcceleration;
            this.yPos += this.fallingSpeed;

            if (this.birbIsOutsidePlayArea()) {
                this.gameOver();
            }

            //Rotate bird in motion:
            if (this.fallingSpeed + 0.5 >= this.jump) {
                this.rotation = 75 * DEGREE;
                this.frame = 1;
            } else if (this.fallingSpeed + 1 <= this.jump) {
                this.rotation = -25 * DEGREE;
            } else {
                this.rotation = 0;
            }
        }

        this.frames++;
    }

    gameOver() {
        if (this.state.current == this.state.game) {
            this.state.current = this.state.over;
        }
    }

    birbIsOutsidePlayArea() {
        if (this.yPos + this.height / 2 >= this.collisionsCoordinates.fg) {
            this.yPos = this.collisionsCoordinates.fg - this.height / 2;
            return true;
        }

        if (this.yPos + this.height / 2 <= this.collisionsCoordinates.top) {
            this.yPos = this.collisionsCoordinates.top - this.height / 2;
            return true;

        }

        return false;
    }

    flap() {
        if (this.state.current == this.state.over) {
            return;
        }
        this.fallingSpeed -= this.jump;
    }
}

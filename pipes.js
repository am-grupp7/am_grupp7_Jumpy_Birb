export class Pipes {

  constructor(cvs, ctx) {

    this.position = [100]
    this.frames = 0

    this.cvs = cvs
    this.ctx = ctx

    this.dx = 2
    this.srcX = 0
    this.srcY = 0
    this.width = 100
    this.height = 249
    this.gap = 80

    this.topPosition = {
      x: 500,
      y: 0
    }
    this.bottomPosition = {
      x: 500,
      y: 0
    }

    this.pipeTop = new Image()
    this.pipeTop.src = "images/TopPipe.png"

    this.pipeBottom = new Image()
    this.pipeBottom.src = "images/BottomPipe.png"
  }

  draw() {
    for (let i = 0; i < this.position.length; i++) {
      let p = this.position[i];

      let topYPos = this.topPosition.y;
      let bottomYPos = this.bottomPosition.y + this.height + this.gap;

      this.ctx.drawImage(this.pipeTop, this.srcX, this.srcY, this.width, this.height, this.topPosition.x, topYPos, this.width, this.height)
      this.ctx.drawImage(this.pipeBottom, this.srcX, this.srcY, this.width, this.height, this.bottomPosition.x, bottomYPos, this.width, this.height)
    }
  }

  update() {/*
    if (frames % 100 == 0) {
      this.position.push({
        x: cvs.width,
        y: this.maxYPos * (Math.random() + 1)
      });
    }
    for (let i = 0; i < this.position.length; i++) {
      let p = this.position[1000];

      let bottomPipeYPos = p.bottomPosition.y + this.height + this.gap;

      p.topPosition.x -= this.dx;

    }*/
  }
}
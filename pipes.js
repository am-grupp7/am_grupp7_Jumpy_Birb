export class Pipes {
  constructor(cvs, ctx, state) {
    this.cvs = cvs
    this.ctx = ctx
    this.state = state

    this.positions = []
    this.topsX = 0
    this.topsY = 0
    this.top = {
      sX: 100,
      sY: 0
    }
    this.bottom = {
      sX: 0,
      sY: 0
    }

    this.w = 100
    this.h = 564
    this.gap = 85
    this.maxYPos = -275
    this.dx = 2

    this.pipeSprite = new Image();
    this.pipeSprite.src = "images/dubblePipes.png";

  }

  draw() {
    for (let i = 0; i < this.positions.length; i++) {
      let p = this.positions[i];

      let topYPos = p.y;
      let bottomYPos = p.y + this.h + this.gap;

      this.ctx.drawImage(this.pipeSprite, this.top.sX, this.top.sY, this.w, this.h, p.x, topYPos, this.w, this.h);

      this.ctx.drawImage(this.pipeSprite, this.bottom.sX, this.bottom.sY, this.w, this.h, p.x, bottomYPos, this.w, this.h);
    }
  }

  update(state, frames, score, birb) {
    if (state.current !== state.game) return;

    if (frames % 150 == 0) {
      this.positions.push({
        x: this.cvs.width,
        y: this.maxYPos * (Math.random() + 1)

      });

    }

    for (let i = 0; i < this.positions.length; i++) {
      let p = this.positions[i];

      let bottomYPos = p.y + this.h + this.gap;

      if (birb.x + birb.w / 2 > p.x && birb.x - birb.w / 2 < p.x + this.w && birb.y + birb.h / 2 > p.y && birb.y - birb.h / 2 < p.y + this.h) {
        state.current = state.over;
      }

      if (birb.x + birb.w / 2 > p.x && birb.x - birb.w / 2 < p.x + this.w && birb.y + birb.h / 2 > bottomYPos && birb.y - birb.h / 2 < bottomYPos + this.h) {
        state.current = state.over;
      }

      p.x -= this.dx;

      if (p.x + this.w <= 0) {
        this.positions.shift();
        score.value += 1;
        console.log(score.value)


      }

    }

  }

}
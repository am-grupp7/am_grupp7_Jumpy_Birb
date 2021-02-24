export class Pipes {
  constructor(canvas, canvasContext, state) {
    this.canvas = canvas
    this.canvasContext = canvasContext
    this.state = state

    this.positions = []
    this.topSpriteX = 0
    this.topSpriteY = 0
    this.top = {
      spriteX: 100,
      spriteY: 0
    }
    this.bottom = {
      spriteX: 0,
      spriteY: 0
    }

    this.width = 100
    this.height = 564
    this.gap = 85
    this.maxYPos = -275
    this.speedDeltaX = 2

    this.pipeSprite = new Image();
    this.pipeSprite.src = "images/dubblePipes.png";

  }

  draw() {
    for (let i = 0; i < this.positions.length; i++) {
      let p = this.positions[i];

      let topYPos = p.y;
      let bottomYPos = p.y + this.height + this.gap;

      this.canvasContext.drawImage(this.pipeSprite, this.top.spriteX, this.top.spriteY, this.width, this.height, p.x, topYPos, this.width, this.height);

      this.canvasContext.drawImage(this.pipeSprite, this.bottom.spriteX, this.bottom.spriteY, this.width, this.height, p.x, bottomYPos, this.width, this.height);
    }
  }

  update(state, frames, score, birb) {
    if (state.current !== state.game) return;

    if (frames % 150 == 0) {
      this.positions.push({
        x: this.canvas.width,
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

      p.x -= this.speedDeltaX;

      if (p.x + this.width <= 0) {
        this.positions.shift();
        score.value += 1;
        


      }

    }

  }

}
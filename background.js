import {cvs, ctx} from './main.js';

const bgSprite = new Image()
bgSprite.src = "images/background.png";

const background = {
    sX : 0,
    sY : 0,
    w : 720,
    h : 449,
    x : 0,
    y : 0,

    draw : function() {
        ctx.drawImage(bgSprite, this.sX, this.sY, this.w, this.h, this.x, this.y, this.w, this.h);
    }
}

export {background};
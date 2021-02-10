//Visuell representation av Birb.
const cvs = document.getElementById("canvas");
const ctx = cvs.getContext("2d");
const birbSprite = new Image();


class Birb {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    draw() {
        // ctx.fillStyle = "#70c5ce";
        // ctx.beginPath();
        // ctx.arc(75, 75, 10, 0, 2 * Math.PI);
        // ctx.stroke
        // ctx.stroke();
        // ctx.fill();

        let circle = new Path2D();
        circle.arc(75, 75, 10, 0, 2 * Math.PI);
        ctx.fillStyle = "#70c5ce";
        ctx.fill(circle);
    }
}

const birb = new Birb(10, 10)

export { birb };
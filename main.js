/*import { add, ett } from './birb.js';
let a = 1,
    b = 1

//let sum = add(a, b)

let sum = add(a, ett)

console.log(sum)*/



const cvs = document.getElementById("canvas")
const ctx = cvs.getContex("2d")
function draw() {
    ctx.fillStyle ="#70c5ce"
    ctx.fillRect(0, 0, cvs.width, cvs.height)

    pipes.draw();
}

export { ctx, draw };
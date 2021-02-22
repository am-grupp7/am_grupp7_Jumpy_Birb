export class Controls {
  constructor (birb) {
    body.addEventListener('keyup', event => {
      if (event.code === 'Space') {
        birb.flap()
      }
    }) 
  }
  
  draw() {
  }

}
export class Controls {
  constructor(body, birb) {
    body.addEventListener('keyup', event => {
      if (event.code === 'Space') {
        birb.flap()
      }
    }) 
  }
  
  draw() {
  }

}

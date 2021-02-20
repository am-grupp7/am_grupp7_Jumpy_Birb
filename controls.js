export class Controls {
  constructor(birb) {
    document.body.addEventListener('keyup', event => {
      if (event.code === 'Space') {
        birb.flap()
      }
    }) 
  }
  
  draw() {
  }

}

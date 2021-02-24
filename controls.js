export class Controls {
  constructor(birb, state) {
    document.body.addEventListener('keyup', event => {
      if (event.code === 'Space') {
        if(state.current == state.getReady ) {
          state.current = 1;
        }
        birb.flap()
      }
    }) 
  }
  
  draw() {
  }

}
export class Controls {
  constructor(birb, state) {
    document.body.addEventListener('keyup', event => {
      if (event.code === 'Space') {
        if(state.current == state.start ) {
          state.current = state.game;
        }
        birb.flap()
      }
    }) 
  }
  
  draw() {
  }

}
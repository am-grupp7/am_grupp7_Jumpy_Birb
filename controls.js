export class Controls {
  constructor(birb, state) {
    document.body.addEventListener('keyup', event => {
      if (event.code === 'Space') {
        //console.log("state", state)
        if(state.current == state.getReady ) {
          state.current = 1;
          //console.log("Yipeee")
        }
        birb.flap()
      }
    }) 
  }
  
  draw() {
  }

}
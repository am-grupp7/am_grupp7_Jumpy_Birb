export class Controls {
  constructor(cvs, body) {
    body.addEventListener('keyup', event => {
      if (event.code === 'Space') {
        console.log('Hej allihopa')
      }
    }) 
  }

  draw() {
  }

}

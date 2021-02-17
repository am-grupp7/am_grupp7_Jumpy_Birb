export class Controls {
  constructor(body) {
    body.addEventListener('keyup', event => {
      if (event.code === 'Space') {
        console.log('Hej allihopa')
      }
    }) 
  }

  draw() {
  }

}

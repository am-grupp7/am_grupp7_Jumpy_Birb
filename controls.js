export class Controls {
    constructor(cvs, birb) {
        
        cvs.addEventListener('click', function () {
            birb.flap();
        }, false);
    }

    draw() {
        
    }

}
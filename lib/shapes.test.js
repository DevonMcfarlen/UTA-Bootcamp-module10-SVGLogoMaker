const {Triangle, Circle, Square} = require('../lib/Shapes.js')

describe('Triangle', ()=>{
    it('render should output a triangle', () => {
        const shape = new Triangle('tri', 'purple', 'green');
        expect(shape.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <polygon points="90 10, 180 150, 0 150" fill="purple"/> <text x="90" y="115" font-size="60" text-anchor="middle" fill="green">tri</text> </svg>`)
    });                                               
});

describe('Circle', ()=>{
    it('render should output a circle', () => {
        const shape = new Circle('cir', 'yellow', 'black');
        expect(shape.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <circle cx="150" cy="100" r="80" fill="yellow"/> <text x="150" y="125" font-size="60" text-anchor="middle" fill="black">cir</text> </svg>`)
    });                                               
});

describe('Square', ()=>{
    it('render should output a square', () => {
        const shape = new Square('sqr', 'pink', 'blue');
        expect(shape.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <rect width="100%" height="100%" fill="pink"/> <text x="150" y="100" font-size="60" text-anchor="middle" fill="blue">sqr</text> </svg>`)
    });                                               
});
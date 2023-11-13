const {Triangle, Circle, Square} = require('../lib/Shapes.js')

function generateSVG(data){
    let shape;
    if(data.userShape === "Triangle"){
        shape = new Triangle(data.userText, data.userShapeColor, data.userTextColor)
    }else if (data.userShape === "Circle"){
        shape = new Circle(data.userText, data.userShapeColor, data.userTextColor)    
    }else{
        shape = new Square(data.userText, data.userShapeColor, data.userTextColor)
    }
    return shape.render();
}
    
module.exports = generateSVG;
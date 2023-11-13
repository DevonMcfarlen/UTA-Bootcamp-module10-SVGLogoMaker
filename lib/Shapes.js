class Shape{
    constructor(text, shapeColor, textColor){
        this.text = text;
        this.color = shapeColor;
        this.textColor = textColor;
    }
}

class Triangle extends Shape{
    render(){ return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <polygon points="90 10, 180 150, 0 150" fill="${this.color}"/> <text x="90" y="115" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text> </svg>` }
}

class Circle extends Shape{
    render(){ return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <circle cx="150" cy="100" r="80" fill="${this.color}"/> <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text> </svg>` }
}

class Square extends Shape{
    render(){ return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <rect width="100%" height="100%" fill="${this.color}"/> <text x="150" y="100" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text> </svg>` }
}

module.exports = { Triangle, Circle, Square };
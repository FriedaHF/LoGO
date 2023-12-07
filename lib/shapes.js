class Shape {
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
}

//defines Circle with position, size, and fill color
class Circle extends Shape {
    render(){
        return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.shapeColor}">`
    }
}
//defines Triangle with position, size, and fill color
class Triangle extends Shape{
    render(){
        return `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.shapeColor}">`;
    }
}
//defines Square with position, size, and fill color
class Square extends Shape{
    render(){
        return `<rect x="50" height="200" width="200" fill="${this.shapeColor}">`;
    }
}
//defines Triangle with position, size, and fill color
class Triangle extends Shape{
    render(){
        return `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.shapeColor}">`;
    }
};

module.exports = { Circle, Square, Triangle };
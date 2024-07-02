class Shape{
    constructor(){
        this.textColor=''
        this.text=''
        this.shapeColor=''
    }
    setTextColor(textColor){
        this.textColor=(textColor);
    }
    setText(text){
        this.text=(text);
    }
    setShapeColor(shapeColor){
        this.shapeColor=(shapeColor);
    }
}

class Circle extends Shape{
    constructor(){
        super()
    }
    render(){
        return `
        <svg width="300" height="200">
        <circle cx="150" cy="100" r="80" fill="${this.shapeColor}"/>
        <text x="50%" y="50%" fill="${this.textColor}" font-size="70" text-anchor="middle" alignment-baseline="middle" font-family="monospace">${this.text}</text>
        </svg>`;
    }
}
class Square extends Shape{
    constructor(){
        super()
    }
    render(){
        return `
        <svg width="300" height="200">
        <rect x="50" y="10" width="200" height="200" fill="${this.shapeColor}"/>
         <text x="50%" y="50%" fill="${this.textColor}" font-size="80" text-anchor="middle" alignment-baseline="middle" font-family="monospace">${this.text}</text>
        </svg>`;
    }
}

class Triangle extends Shape{
    constructor(){
        super()
    }
    render(){
        return `
        <svg width="300" height="200">
        <polygon points="150,10 10,300 250,200" fill="${this.shapeColor}"/>
        <text x="50%" y="63%" fill="${this.textColor}" font-size="50" text-anchor="middle" alignment-baseline="middle" font-family="monospace">${this.text}</text>
        </svg>`;
    }
}

module.exports = {Circle, Square, Triangle}
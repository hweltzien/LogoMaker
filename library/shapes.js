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
    setshapeColor(shapeColor){
        this.shapeColor=(shapeColor);
    }
}

class Circle extends Shape{
    constructor(){
        super()
    }
    render(){
        return `<svg width="100" height="100"><circle cx="50" cy="50" r="40" fill="${this.shapeColor}"/></svg>`;
    }
}
class Square extends Shape{
    render(){
        return `<rect x="10" y="10" width="80" height="80" fill="${this.shapeColor}"/>`
    }
}

class Triangle extends Shape{
    render(){
        return `<polygon points="100,10 10,190 190,190" fill="${this.shapeColor}" width="200" height="200"/>`
    }
}

module.exports = {Circle, Square, Triangle}
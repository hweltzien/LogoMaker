class shape{
    constructor(){
        this.color=''
    }
    setColor(color){
        this.color=(color);
    }
}

class circle extends shape{
    render(){
        return  `<circle cx="50" cy="50" r="100" width="100" height="100" fill="${this.color}"/>`
    }
}
class square extends shape{
    render(){
        return `<rect x="10" y="10" width="80" height="80" fill="${this.color}"/>`
    }
}

class triangle extends shape{
    render(){
        return ``
    }
}

module.exports = {circle, square, triangle}
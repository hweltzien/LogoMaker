//Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const {Circle, Square, Triangle} = require("./library/shapes");

class svg{
    constructor(){
        this.textElement = ''
        this.shapeElement = ''
    }
    render(){
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`
    }
    setTextElement(text,color){
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
    }
    setShapeElement(shape){
        this.shapeElement = shape.render()

    }
}


// Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "text",
        message: "What three characters would like for your logo?",
    },
    {
        type: "input",
        name: "textColor",
        message: "Please enter the color keyword (OR a hexadecimal number) for the text",
    },
    {
        type: "checkbox",
        name: "shape",
        message: "Please select the shape for your logo.",
        choices: ["circle", "square", "triangle", ]
    },
    {
        type: "input",
        name: "shapeColor",
        message: "Please enter the color keyword (OR a hexxidecimal number) for the shape color",
    },
];

    // Create a function to write SVG file
function writeSvgFile(fileName, data) {
    let logo = ''
    if(data.shape === "circle"){
        logo = new Circle()
        logo.setTextColor(data.textColor)
        logo.setText(data.text)
        logo.setShapeColor(data.shapeColor)
    }
    fs.writeFileSync(fileName, logo.render(), (err) => {
        if (err) {
            console.error('Error writing file:', err);
        } else {
            console.log('SVG file created successfully.');
        }
        });
}

// Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log("Creating SVG File...");
        writeSvgFile("./dist/logo.svg", responses);
    });
}


// Function call to initialize app
init();
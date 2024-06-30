//Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");
const {circle, square, triangle, hexagon} = require("./library/shapes");

class svg{
    constructor(){
        this.textElement = ''
        this.shapeElement = ''
    }
    render(){
        return <svg version="_______"></svg>
    }
}


// Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "characters",
        message: "What three characters would like for your logo?",
    },
    {
        type: "input",
        name: "text color",
        message: "Please enter the color keyword (OR a hexxidecimal number) for the text",
    },
    {
        type: "checkbox",
        name: "shape",
        message: "Please select the shape for your logo.",
        choices: ["circle", "square", "hexagon", "_____", ]
    },
    {
        type: "input",
        name: "shape color",
        message: "Please enter the color keyword (OR a hexxidecimal number) for the shape",
    },
];

    // Create a function to write SVG file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data)
}

// Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log("Creating SVG File...");
        writeToFile("./dist/logo.svg", generateMarkdown({ ...responses }));
    });
}


// Function call to initialize app
init();
const inquirer = require("inquirer");
const { Circle, Triangle, Square } = require("./shapes");
const { writeFile } = require("fs/promises");

class CLI {
    run() {
        return inquirer
        .prompt([
            {
                name: "type",
                type: "list",
                message: "Select a shape.",
                choices: [ 'Circle', 'Triange', 'Square' ],
            },
            {
                name: "text",
                type: "input",
                message: "Enter text at a maximum of 3 characters.",
                validate: (text) => 
                text.length <= 3 || "Must not exceed 3 characters.",
            },
            {
                name: "shapeColor",
                type: "input",
                message: "Enter a color for the SHAPE.",
            },
            {
                name: "textColor",
                type: "input",
                message: "Enter a color for the TEXT.",
            },
        ])
        })
    }
}
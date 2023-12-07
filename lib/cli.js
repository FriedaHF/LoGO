const inquirer = require("inquirer");
//require the shape dimensions from shapes.js file
const { Circle, Square, Triangle } = require("lib/shapes.js");
const { writeFile } = require("fs/promises");

//command prompt questionaire to create logo
class CLI {
    run() {
        return inquirer
        .prompt([
            {
                name: "type",
                type: "list",
                message: "Select a shape.",
                choices: [ 'Circle', 'Square', 'Triangle' ],
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
        //put together the choices
        .then(({type, text, shapeColor, textColor}) => {
            let shape;
            switch (type) {
              case "circle":
                shape = new Circle(text, shapeColor, textColor);
                break;

              case "square":
                shape = new Square(text, shapeColor, textColor);
                break;
    
              default:
                shape = new Triangle(text, shapeColor, textColor);
                break;
            }
            //create a file called loGO.svg with logo dimensions to open with live server and view logo
            writeFile("loGO.svg", shape.render())

            console.log("Created.");

        })
        .catch((error) => {
            console.log(error);
            console.log("error.");
        });
    }
}
module.exports = CLI
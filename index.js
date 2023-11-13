const inquirer = require('inquirer');
const fs = require('fs');
const generateSVG = require('./utils/generateSVG');

const shapes = [ "Triangle", "Circle", "Square"];

const questions = [
    {type: 'input', message: 'Please enter a name for your logo.', name: 'userLogoName' },
    { type: 'list', message: 'Please select a shape for the logo.', choices: shapes, name: 'userShape' },
    { type: 'input', message: 'Please enter no more than 3 characters for your logo.', name: 'userText' },
    { type: 'input', message: 'Please enter a color or hex code for your shape.', name: 'userShapeColor' },
    { type: 'input', message: 'Please enter a color or hex code for your text.', name: 'userTextColor' }
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateSVG(data), (err) =>
    err ? console.error(err) : console.log('Logo Created!'));
}

function init() {
    inquirer
        .prompt(questions)
        .then((response) => writeToFile(`${response.userLogoName}.svg`, response));
}

init();
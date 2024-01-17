// TODO: Include packages needed for this application
const inquirer = require('inquirer')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter a title for this project'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a short description for the project'
    },
    {
        type: 'input',
        name: 'isntallation instructions',
        message: 'Enter installation instructions'
    },
    {
        type: 'input',
        name: 'usage guidelines',
        message: 'Enter the usage guidlines for this project'
    },
    {
        type: 'input',
        name: 'test instrucitons',
        message: 'Enter instructions for testing'
    }
    {
        type: 'list',
        name: 'license',
        message: 'Pick a license for this project',
        choices: ['MIT',]

    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

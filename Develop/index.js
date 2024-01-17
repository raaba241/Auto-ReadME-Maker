// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')

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
    },
    {
        type: 'list',
        name: 'license',
        message: 'Pick a license for this project',
        choices: ['MIT', 'GNU General Public License', 'Mozilla Public License', 'The Unlincense']
    },
    {
        type: 'input',
        name: 'username',
        message: 'Enter your username',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address'
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) => {
        if (error) {
            console.log("Error");
        }
        else {
            console.log("Success");
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log (answers)
    })
}

// Function call to initialize app
init();

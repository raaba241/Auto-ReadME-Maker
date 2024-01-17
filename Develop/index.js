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
        name: 'installation',
        message: 'Enter installation instructions'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter the usage guidlines for this project'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'How will users contribute to your project'
    },
    {
        type: 'input',
        name: 'test',
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
    // Prompts the questions to users and then executes a function to fill in the gaps
    inquirer.prompt(questions).then((answers) => {
        // creating a variable that will store all my text data for the readME
        const readMe = `
# ${answers.title}

## Description 
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
       
## Installation
${answers.installation}

## Usage
${answers.usage}

## License
This project is licensed under the ${answers.license} License.

## Contributing
${answers.contribution}

## Tests
${answers.tests}
       
## Questions
Please contact me [${answers.username}] at (github.com/${answers.username}) or email me at ${answers.email}`
       writeToFile('README.md',readMe)
    })
}

// Function call to initialize app
init();

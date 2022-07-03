// TODO: Include packages needed for this application
const inquirer = require('inquirer')

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input', 
    name: 'name',
    message: 'What is the name of your project?:'
  },
  {
    type: 'input', 
    name: 'Purpose',
    message: 'Why did you create this project?:'
  },
  {
    type: 'input', 
    name: 'Description',
    message: 'Describe your project:'
  }
];

inquirer.prompt(questions).then(answers => console.log(answers))
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
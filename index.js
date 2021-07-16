const inquirer = require('inquirer');
const Employee = require('./lib/employee');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');

//Global array to store the team Objects
const teamObjs = [];

//Function that prompts the user for team size and returns that number
function runPrompt() {
    let teamSize = 0;
    inquirer
        .prompt([{
            name: 'size',
            type: 'input',
            message: 'How many team members do you have?'
        }])
        .then((answers) => {
            teamSize = answers.size;
        });
    return teamSize;
};

//Function that uses teamSize in a for loop to create the team member objects
function createTeam(size) {
    for (let i = size; i <= size; i++) {
        let memberType;
        inquirer
            .prompt([
                {
                    name: 'position',
                    type: 'list',
                    message: 'What is this team members position?',
                    options: ['Employee', 'Engineer', 'Intern', 'Manager']
                }])
            .then((answers) => {
                memberType = answers.position;
            });
        switch (memberType) {
            case 'Employee':
                
                break;
            case 'Engineer':

                break;

            case 'Intern':

                break;

            default:

                break;
        }
    }
};
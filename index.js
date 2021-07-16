const inquirer = require('inquirer');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');

//Global array to store the team Objects
const teamObjs = [];
//Variable to store the answers
let answersObj;

//Function that creates the team member objects and pushes them into a global array
function createTeam() {
    //Variable for the while loop
    let run = true;

    //Get input for the team manager
    inquirer.prompt([
        {
            name: 'name',
            type: 'input',
            message: 'Enter team managers name.'
        },
        {
            name: 'id',
            type: 'number',
            message: 'Enter team managers employee ID.'
        },
        {
            name: 'email',
            type: 'input',
            message: 'Enter team managers email address.'
        },
        {
            name: 'office',
            type: 'number',
            message: 'Enter team managers office number.'
        }
    ]).then((answers) => {
        const Manager = new Manager(answers.name, answers.id, answers.email, answers.office);
        teamObjs.push(Manager);
    })

    //Keep looping employee creation prompts until user selects to stop
    while (run = true) {
        inquirer.prompt([
            {
                name: 'position',
                type: 'list',
                message: 'Select team member position:',
                options: ['Engineer','Intern']
            }]).then((answers) => {
                if(answers.position === 'Engineer'){
                    inquirer.prompt([
                        {
                            name: 'name',
                            type: 'input',
                            message: ''
                        },
                        {
                            name: '',
                            type: '',
                            message: ''
                        },
                        {
                            name: '',
                            type: '',
                            message: ''
                        },
                        {
                            name: '',
                            type: '',
                            message: ''
                        }
                    ])
                } else {

                }
            })
    }
};
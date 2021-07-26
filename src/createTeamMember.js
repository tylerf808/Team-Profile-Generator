const Engineer = require('../lib/engineer');
const Intern = require('../lib/intern');
const inquirer = require('inquirer');

async function createTeamMember() {
    let teamMember;
    const teamMemberChoice = await inquirer.prompt([
        {
            name: 'position',
            type: 'list',
            message: 'Select team member position:',
            choices: ['Engineer', 'Intern']
        }]).then((answers) => {
            return answers.position
        }
        );
    if (teamMemberChoice === 'Engineer') {
        teamMember = inquirer.prompt([
            {
                name: 'name',
                type: 'input',
                message: 'Enter the employees name:'
            },
            {
                name: 'id',
                type: 'number',
                message: 'Enter the employees ID:'
            },
            {
                name: 'email',
                type: 'input',
                message: 'Enter the employees email:'
            },
            {
                name: 'github',
                type: 'input',
                message: 'Enter the employees GitHub username:'
            }
        ]).then((answers) => {
            const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
            return engineer;
        })
    } else {
        teamMember = inquirer.prompt([
            {
                name: 'name',
                type: 'input',
                message: 'Enter the employees name:'
            },
            {
                name: 'id',
                type: 'number',
                message: 'Enter the employees ID:'
            },
            {
                name: 'email',
                type: 'input',
                message: 'Enter the employees email:'
            },
            {
                name: 'school',
                type: 'input',
                message: 'Enter the employees school'
            }
        ]).then((answers) => {
            const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
            return intern;
        });
    }
    return teamMember

}

module.exports = { createTeamMember }
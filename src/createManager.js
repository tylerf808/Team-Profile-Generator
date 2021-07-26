const Manager = require('../lib/manager');
const inquirer = require('inquirer');

function createManager(){
    const manager = inquirer.prompt([
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
        const manager = new Manager(answers.name, answers.id, answers.email, answers.office);
        return manager;
    })
    return manager;
}

module.exports = {createManager}
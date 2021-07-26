const inquirer = require('inquirer');

function prompt() {
    const teamSize = inquirer.prompt([{
        name: 'teamSize',
        type: 'number',
        message: 'How many team members would you like to add?'
    }]).then((answer) => {
            return answer.teamSize;
    })
   return teamSize;
}

module.exports = {prompt}
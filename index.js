const inquirer = require('inquirer');
const { createManager } = require('./src/createManager')
const { createTeamMember } = require('./src/createTeamMember')
const { prompt } = require('./src/prompt');
//Array to hold the employee objects
const teamObjs = [];

async function run() {
    const manager = await createManager()
    teamObjs.push(manager);
    const teamSize = await prompt();
    for(let i = 0; i < teamSize; i++){
        const teamMember = await createTeamMember();
        teamObjs.push(teamMember)
    }
}

run()
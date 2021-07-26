const inquirer = require('inquirer');
const { createManager } = require('./src/createManager')
const { createTeamMember } = require('./src/createTeamMember')
const { prompt } = require('./src/prompt');
const { genBeforeCards, genCard, genEnd } = require('./src/generateHTML')
const fs = require('fs')
//Array to hold the employee objects
const teamObjs = [];

async function prompts() {
    const manager = await createManager()
    teamObjs.push(manager);
    const teamSize = await prompt();
    for (let i = 0; i < teamSize; i++) {
        const teamMember = await createTeamMember();
        teamObjs.push(teamMember)
    }
}

async function createHtmlFile() {
    const beginningHTML = genBeforeCards();
    const endingHTML = await genEnd();
    await fs.writeFile('./dist/index.html', beginningHTML, (err) => {
        if (err)
            console.log(err)
    })

    for (let i = 0; i < teamObjs.length; i++) {
        const string = genCard(teamObjs[i])
        fs.appendFile('./dist/index.html', string, (err) => {
            if (err)
                console.log(err)
        })
    }

    await fs.appendFile('./dist/index.html', endingHTML, (err) => {
        if (err)
            console.log(err)
    })
}

async function run () {
    await prompts()
    await createHtmlFile()
}

run()
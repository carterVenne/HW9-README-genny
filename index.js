const generateMarkdown = require('./generateMarkdown.js');
const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'Enter your applications name:'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a brief summary of your application:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter your installation instructions before use:' 
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter your instructions to run your application:' 
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Enter your guidelines for future contributors:' 
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter tests built for this application:' 
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please input your github account:' 
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please input your email:' 
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Which licence should be attached to your apllication?',
        choices: ['MIT','GNU','Apache','IBM','PERL','EPL']
    },
]).then((data) => {
    //console.log(data)
    let readmeInput = generateMarkdown(data);

    fs.writeFile("README.md", readmeInput, (err) =>
        err ? console.log(err) : console.log("README.md successfully created")
    )
})
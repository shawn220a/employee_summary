const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt([
  {
    type: 'input',
    name: 'managerName',
    message: 'What is your manager\'s name?'
  },
  {
    type: 'input',
    name: 'managerId',
    message: 'What is your manager\'s id?'
  },
  {
    type: 'input',
    name: 'managerEmail',
    message: 'What is your manager\'s email?'
  },
  {
    type: 'input',
    name: 'managerOfficeNumber',
    message: 'What is your manager\'s office number?'
  },
  {
    type: 'list',
    name: 'addNewMember',
    message: 'Which type of team member would you like to add?',
    choices: ['Intern', 'Engineer', 'I don\'t want to add any more team members']
  },
  {
    type: 'input',
    name: 'internName',
    message: 'What is your intern\'s name?'
  },
  {
    type: 'input',
    name: 'internId',
    message: 'What is your intern\'s id?'
  },
  {
    type: 'input',
    name: 'internEmail',
    message: 'What is your intern\'s email?'
  },
  {
    type: 'input',
    name: 'internSchool',
    message: 'What is your intern\'s school?'
  },
  {
    type: 'input',
    name: 'engineerName',
    message: 'What is your engineer\'s name?'
  },
  {
    type: 'input',
    name: 'engineerId',
    message: 'What is your engineer\'s id?'
  },
  {
    type: 'input',
    name: 'engineerEmail',
    message: 'What is your engineer\'s email?'
  },
  {
    type: 'input',
    name: 'engineerGitHub',
    message: 'What is your engineer\'s GitHub username?'
  }
])
.then(answers => {
  console.log(answers);
})
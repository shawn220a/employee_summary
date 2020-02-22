const inquirer = require('inquirer');
const fs = require('fs');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');

function addManager() {
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
  }
  ])
  .then(answers => {
    let (answers.managerName) = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
  }).then(() => {
    newMember();
  })
}

function addEngineer() {
  inquirer.prompt([
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
  ]).then(answers => {
    let (answers.engineerName) = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGitHub);
  }).then(() => {
    newMember();
  })
}

function addIntern () {
  inquirer.prompt([
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
    }
  ]).then(answers => {
    let (answers.internName) = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
  }).then(() => {
    newMember();
  })
}

function newMember(){
  inquirer.prompt({
    type: 'list',
    name: 'addNewMember',
    message: 'Which type of team member would you like to add?',
    choices: ['Intern', 'Engineer', 'I don\'t want to add any more team members']
  }).then(answers => {
    let { addNewMember } = answers.addNewMember;
    if (addNewMember === 'Intern') {
      addIntern();
    } else if (addNewMember === 'Engineer') {
      addEngineer();
    }
  })
}

addManager();
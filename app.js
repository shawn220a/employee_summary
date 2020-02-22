const inquirer = require('inquirer');
const fs = require('fs');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');

let team = {
  manager: undefined,
  intern: [],
  engineer: []
}

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
    let { managerName, managerId, managerEmail, managerOfficeNumber } = answers;
    
    team.manager = new Manager(managerName, managerId, managerEmail, managerOfficeNumber);

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
    let { engineerName, engineerId, engineerEmail, engineerGitHub } = answers;

    team.engineer.push(new Engineer(engineerName, engineerId, engineerEmail, engineerGitHub));

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
    let { internName, internId, internEmail, internSchool } = answers;

    team.intern.push(new Intern(internName, internId, internEmail, internSchool));

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
    let { addNewMember } = answers;
    if (addNewMember === 'Intern') {
      addIntern();
    } 
    if (addNewMember === 'Engineer') {
      addEngineer();
    }
    if (addNewMember === 'I don\'t want to add any more team members'){
      console.log(team.manager);
      console.log(team.intern);
      console.log(team.engineer);
    }
  })
}

addManager();
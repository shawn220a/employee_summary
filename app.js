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

// Read and save .html template to variable
const mainHTML = fs.readFileSync('./templates/main.html', 'utf8', (err, data) => {
  if (err) {
    throw err;
  }
  return data;
});

let newHTML = '';
let allManagerHTML = '';
let allInternsHTML = '';
let allEngineersHTML = '';

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
      createOutput();
    }
  })
}

function createOutput() {
  allManagerHTML += `<li> <div class="card" style="width: 18rem; float: left;margin-right: 1rem; margin-bottom: 5px;">
  <div class="card-header">
    <div class="card-header">
      ${team.manager.name} (${team.manager.role})
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${team.manager.id}</li>
      <li class="list-group-item">Email: ${team.manager.email}</li>
      <li class="list-group-item"> Office Number: ${team.manager.officeNumber}</li>
    </ul>
  </div> </li>`;

  team.intern.forEach(intern => {
    allInternsHTML += `<li> <div class="card" style="width: 18rem; float: left;margin-right: 1rem; margin-bottom: 5px;">
    <div class="card-header">
    <div class="card-header">
      ${intern.name} (${intern.role})
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${intern.id}</li>
      <li class="list-group-item">Email: ${intern.email}</li>
      <li class="list-group-item">School: ${intern.school}</li>
    </ul>
  </div> </li>`;
  })

  team.engineer.forEach(engineer => {
    allInternsHTML += `<li> <div class="card" style="width: 18rem; float: left;margin-right: 1rem; margin-bottom: 5px;">
    <div class="card-header">
    <div class="card-header">
      ${engineer.name} (${engineer.role})
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${engineer.id}</li>
      <li class="list-group-item">Email: ${engineer.email}</li>
      <li class="list-group-item">GitHub: ${engineer.gitHub}</li>
    </ul>
  </div> </li>`;
  })
  writeHTML();
}

function writeHTML() {
  newHTML = mainHTML.replace('{{manager.html}}', allManagerHTML);
  newHTML = newHTML.replace('{{intern.html}}', allInternsHTML);
  newHTML = newHTML.replace('{{engineer.html}}', allEngineersHTML);
  fs.writeFile('./output/team.html', newHTML, (err) => {
    if (err) throw err;
    console.log('Successfully wrote to file');
  });
}

addManager();
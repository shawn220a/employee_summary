const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(engineerName, engineerId, engineerEmail, engineerGitHub){
    super(engineerName, engineerId, engineerEmail);
    this.gitHub = engineerGitHub;
    this.role = this.getRole();
  }

  getGithub() {
    return this.gitHub;
  }

  getRole() {
    return 'Engineer';
  }
}

 module.exports = Engineer;
const Employee = require('./Employee');

class Intern extends Employee {
  constructor(internName, internId, internEmail, internSchool){
    super(internName, internId, internEmail);
    this.school = internSchool;
    this.role = this.getRole();
  }

  getSchool() {
    return this.school;
  }

  getRole() {
    return 'Intern';
  }
}

 module.exports = Intern;
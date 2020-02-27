const Employee = require('./Employee');

class Manager extends Employee {
  constructor(managerName, managerId, managerEmail, managerOfficeNumber){
    super(managerName, managerId, managerEmail);
    this.officeNumber = managerOfficeNumber;
    this.role = this.getRole();
  }

  getOfficeNumber() {
    return this.officeNumber;
  }

  getRole() {
    return 'Manager';
  }
}

 module.exports = Manager;
class Employee {
  constructor() {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = getRole();
  }

  getRole() {
    return 'Employee';
  }
}

module.exports = Employee;
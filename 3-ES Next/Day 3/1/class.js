export class Employee {
  constructor(name = "", dept = "General") {
    this.name = name;
    this.dept = dept;
  }
}

export class Manager extends Employee {
  constructor(name = "", dept = "General") {
    super(name, dept);
    this.reports = [];
  }

  addReport(employee) {
    if (employee instanceof Employee) {
      this.reports.push(employee);
    }
  }
}

export class WorkerBee extends Employee {
  constructor(name = "", dept = "General") {
    super(name, dept);
    this.projects = [];
  }
  addProject(project) {
    this.projects.push(project);
  }
}

export class SalesPerson extends WorkerBee {
  constructor(name = "", dept = "Sales", qouta = 100) {
    super(name, dept);
    this.qouta = qouta;
  }
}

export class Engineer extends WorkerBee {
  constructor(name = "", dept = "Engineering", machines = "") {
    super(name, dept);
    this.machines = machines;
  }
}

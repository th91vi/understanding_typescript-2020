"use strict";
class Department {
    constructor(n) {
        this.employees = []; // access modifier
        this.name = n;
    }
    describe() {
        console.log('Department: ' + this.name);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeesInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
const accounting = new Department('Accounting');
accounting.describe();
accounting.addEmployee('Manu');
accounting.addEmployee('Thiago');
// accounting.employees[2] = 'Anna';
accounting.printEmployeesInformation();
// const accountingCopy = { describe: accounting.describe };
// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };
// accountingCopy.describe();

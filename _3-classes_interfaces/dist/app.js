"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        // private id: string; // access modifier
        // private name: string; // access modifier
        this.employees = []; // access modifier
        // this.id = id;
        // this.name = name;
    }
    static createEmployee(name) {
        return { name: name };
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeesInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
Department.fiscalYear = 2020;
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'Information Technology');
        this.admins = admins;
        this.admins = admins;
    }
    describe() {
        console.log('IT Department - ID: ' + this.id);
    }
    ;
    describeAdmins() {
        console.log(`IT Administrators: ${this.admins}`);
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
        this.reports = reports;
        this.lastReport = reports[0];
    }
    static getInstance() {
        if (AccountingDepartment.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment('1', []);
        return this.instance;
    }
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw console.warn('No report found');
    }
    set mostRecentReport(value) {
        if (!value) {
            throw console.warn('Please insert text for the report.');
        }
        this.addReport(value);
    }
    describe() {
        console.log('Accounting Department - ID: ' + this.id);
    }
    addEmployee(name) {
        if (name === 'Manu') {
            return;
        }
        this.employees.push(name);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports() {
        console.log(this.reports);
    }
}
const employee1 = Department.createEmployee('Max');
console.log(`Generic employee: ${employee1.name}. Hired in: ${Department.fiscalYear}`);
// const accounting = new Department('1', 'Accounting');
const itDepartment = new ITDepartment('2', ['Thiago', 'Joane']);
// accounting.describe();
itDepartment.describe();
itDepartment.describeAdmins();
// accounting.employees[2] = 'Anna';
// const accounting = new AccountingDepartment('1', []);
const accounting = AccountingDepartment.getInstance();
// accounting.mostRecentReport;
accounting.mostRecentReport = "Umami next level locavore, shoreditch mixtape thundercats plaid snackwave pinterest chia. Cronut la croix ethical, tattooed letterpress tofu pitchfork four dollar toast schlitz. Sustainable tote bag letterpress, succulents microdosing PBR&B bespoke adaptogen raclette yr pinterest williamsburg. Photo booth prism letterpress VHS drinking vinegar, direct trade XOXO hell of gluten-free venmo tumeric. Polaroid you probably haven't heard of them jianbing art party salvia four loko intelligentsia tote bag.";
accounting.addReport('Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate quam eligendi ad consequatur veritatis fugit! Quos impedit nam nisi beatae possimus dolorem amet voluptatem aliquid vitae, incidunt inventore, eveniet sed?');
accounting.printReports();
accounting.addEmployee('Manu');
accounting.addEmployee('Thiago');
accounting.describe();
// accounting.printEmployeesInformation();
// const accountingCopy = { describe: accounting.describe };
// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };
// accountingCopy.describe();

abstract class Department {
    static fiscalYear = 2020;

    // private id: string; // access modifier
    // private name: string; // access modifier
    protected employees: string[] = []; // access modifier

    constructor(protected readonly id: string, public name: string){
        // this.id = id;
        // this.name = name;
    }

    static createEmployee (name: string){
        return {name: name};
    }

    abstract describe(this: Department): void;

    addEmployee(employee: string){
        this.employees.push(employee);
    }

    printEmployeesInformation(){
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

class ITDepartment extends Department {
    constructor(id: string, public admins: string[]){
        super(id, 'Information Technology');
        this.admins = admins;
    }

    describe() {
        console.log('IT Department - ID: ' + this.id);
    };

    describeAdmins(this: ITDepartment){
        console.log(`IT Administrators: ${this.admins}`);
    }
}

class AccountingDepartment extends Department {
    private lastReport: string;
    private static instance: AccountingDepartment;

    private constructor(id: string, public reports: string[]){
        super(id, 'Accounting');
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

    set mostRecentReport(value: string) {
        if (!value) {
            throw console.warn('Please insert text for the report.')
        }
        this.addReport(value);
    }

    describe(){
        console.log('Accounting Department - ID: ' + this.id)
    }

    addEmployee(name: string) {
        if(name === 'Manu') {
            return;
        }
        this.employees.push(name);
    }

    addReport(text: string){
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
class Department {
    // private id: string; // access modifier
    // private name: string; // access modifier
    private employees: string[] = []; // access modifier

    constructor(public readonly id: string, public name: string){
        // this.id = id;
        // this.name = name;
    }

    describe(this: Department) {
        console.log(`Department: ${this.name}. Id: ${this.id}`);
    }

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

    describeAdmins(this: ITDepartment){
        console.log(`IT Administrators: ${this.admins}`);
    }
}

class AccountingDepartment extends Department {
    constructor(id: string, public reports: string[]){
        super(id, 'Accounting');
        this.reports = reports;
    }

    addReport(text: string){
        this.reports.push(text);
    }

    printReports() {
        console.log(this.reports);
    }
}

// const accounting = new Department('1', 'Accounting');
const itDepartment = new ITDepartment('2', ['Thiago', 'Joane']);

// accounting.describe();
itDepartment.describe();
itDepartment.describeAdmins();

// accounting.addEmployee('Manu');
// accounting.addEmployee('Thiago');

// accounting.employees[2] = 'Anna';

// accounting.printEmployeesInformation();

const accounting = new AccountingDepartment('1', []);

accounting.addReport('Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate quam eligendi ad consequatur veritatis fugit! Quos impedit nam nisi beatae possimus dolorem amet voluptatem aliquid vitae, incidunt inventore, eveniet sed?');

accounting.printReports();

// const accountingCopy = { describe: accounting.describe };
// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };

// accountingCopy.describe();
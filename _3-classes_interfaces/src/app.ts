class Department {
    private name: string; // access modifier
    private employees: string[] = []; // access modifier

    constructor(n: string){
        this.name = n;
    }

    describe(this: Department) {
        console.log('Department: ' + this.name);
    }

    addEmployee(employee: string){
        this.employees.push(employee);
    }

    printEmployeesInformation(){
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
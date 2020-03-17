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

const accounting = new Department('1', 'Accounting');

accounting.describe();

accounting.addEmployee('Manu');
accounting.addEmployee('Thiago');

// accounting.employees[2] = 'Anna';

accounting.printEmployeesInformation();

// const accountingCopy = { describe: accounting.describe };
// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };

// accountingCopy.describe();
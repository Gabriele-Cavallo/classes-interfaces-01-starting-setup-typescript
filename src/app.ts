class Department {
    // private id: string,
    // private name: string;
    private employees: string[] = [];

    constructor(private readonly id: string, public name: string) {
        // this.id = id;
        // this.name = n
    }

    describe(this: Department) {
        console.log(`Department (${this.id}): ${this.name}`);
    }

    addEmploye(employee: string){
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
};

const accounting = new Department('d1', 'Accounting');
accounting.addEmploye('Max');
accounting.addEmploye('Manu');
accounting.describe();
accounting.printEmployeeInformation();

// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };
// accountingCopy.describe();

class ITDepartment extends Department {
    admins: string[]
    constructor( id: string, admins: string[]){
        super(id, 'IT');
        this.admins = admins;
    }
};

const it = new ITDepartment('d2', ['Max', 'Manu'])
console.log('it' , it);

class AccountingDepartment extends Department {
    constructor( id: string , private reports: string[]){
        super( id, 'Accounting Department');
    }

    addReport(text: string){
        this.reports.push(text);
    }

    printReports(){
        console.log('reports' , this.reports);
    }
}

const accountingDepartment = new AccountingDepartment('d2', []);
accountingDepartment.addReport('Something went wrong...')
accountingDepartment.printReports()
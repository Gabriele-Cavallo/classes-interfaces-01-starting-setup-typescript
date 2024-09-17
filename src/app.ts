abstract class Department {
    static fiscalYear = 2024;
    // private id: string,
    // private name: string;
    protected employees: string[] = [];

    constructor(protected readonly id: string, public name: string) {
        // this.id = id;
        // this.name = n
        // console.log(Department.fiscalYear);
    }

    static createEmployee(name: string){
        return {name: name};
    }

    abstract describe(this: Department): void;

    addEmploye(employee: string){
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
};

// const accounting = new Department('d1', 'Accounting');
// accounting.addEmploye('Max');
// accounting.addEmploye('Manu');
// accounting.describe();
// accounting.printEmployeeInformation();

// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };
// accountingCopy.describe();

class ITDepartment extends Department {
    admins: string[]
    constructor( id: string, admins: string[]){
        super(id, 'IT');
        this.admins = admins;
    }

    describe() {
        console.log('IT Department- ID' + this.id);
    }
};

// const it = new ITDepartment('d2', ['Max', 'Manu'])
// console.log('it' , it);

class AccountingDepartment extends Department {
    private lastReport: string;
    private static instance: AccountingDepartment

    get mostRecentReport(){
       if(this.lastReport){
        return this.lastReport;
       }
       throw new Error('No report found.')
    };

    set mostRecentReport(value: string){
        if(!value){
            throw new Error('Please pass in a valid value!')
        }
        this.addReport(value);
    }

    private constructor( id: string , private reports: string[]){
        super( id, 'Accounting Department');
        this.lastReport = reports[0]
    }

    static getInstance() {
        if(AccountingDepartment.instance){
            return this.instance;
        }
        this.instance = new AccountingDepartment('d2', []);
        return this.instance;
    }

    describe(){
        console.log('Accounting - Department - ID' + this.id);
    }

    addEmployee(name: string) {
        if(name === 'Max'){
            return;
        }
        this.employees.push(name)
    }

    addReport(text: string){
        this.reports.push(text);
        this.lastReport = text;
    }

    printReports(){
        console.log('reports' , this.reports);
    }
}

const employee1 = Department.createEmployee('Max');
console.log('employee1' , employee1, Department.fiscalYear);

// const accountingDepartment = new AccountingDepartment('d2', []);
const accountingDepartment = AccountingDepartment.getInstance();

accountingDepartment.mostRecentReport = 'Your End Report';
accountingDepartment.addReport('Something went wrong...')
console.log('accountingDepartment' , accountingDepartment.mostRecentReport);
accountingDepartment.addEmployee('Max');
accountingDepartment.addEmployee('Manu');
// accountingDepartment.printReports();
// accountingDepartment.printEmployeeInformation();
accountingDepartment.describe();
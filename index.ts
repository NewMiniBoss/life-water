class CreateEmployee {
    constructor(public name: string, public profession: string) {}

    public getEmployee(): object { 
        return { name: this.name, profession: this.profession };
    };
}

const employees = [];

employees.push(new CreateEmployee('Gabriel', 'Software Engineer').getEmployee());
employees.push(new CreateEmployee('Tainá', 'Software Engineer').getEmployee());
employees.push(new CreateEmployee('Marcos', 'Software Engineer').getEmployee());

console.log(employees);
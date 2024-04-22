class CreateEmployee {
    constructor( 
        public name: string,
        public profession: string,
        public address: string | null = null,
        public zipCode: string | null = null
    ) {}

    getEmployee(): object {
        return {
            name: this.name,
            profession: this.profession,
            address: this.address,
            zipCode: this.zipCode
        };
    }
}

const employees = [];

employees.push(new CreateEmployee('Gabriel', 'Software Engineer').getEmployee());
employees.push(new CreateEmployee('Tainá', 'Software Engineer').getEmployee());
employees.push(new CreateEmployee('Marcos', 'Software Engineer').getEmployee())

console.log(employees);
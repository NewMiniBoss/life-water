"use strict";
class CreateEmployee {
    constructor(name, profession, address = null, zipCode = null) {
        this.name = name;
        this.profession = profession;
        this.address = address;
        this.zipCode = zipCode;
    }
    getEmployee() {
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
employees.push(new CreateEmployee('Marcos', 'Software Engineer').getEmployee());
console.log(employees);

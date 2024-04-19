"use strict";
class CreateEmployee {
    constructor(name, profession) {
        this.name = name;
        this.profession = profession;
    }
    getEmployee() {
        return { name: this.name, profession: this.profession };
    }
    ;
}
const employees = [];
employees.push(new CreateEmployee('Gabriel', 'Software Engineer').getEmployee());
employees.push(new CreateEmployee('Tainá', 'Software Engineer').getEmployee());
employees.push(new CreateEmployee('Marcos', 'Software Engineer').getEmployee());
console.log(employees);

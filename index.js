"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class People {
    constructor(name, lastName, year) {
        this.name = name;
        this.lastName = lastName;
        this.year = year;
    }
    getName() {
        console.log(`${this.name} ${this.lastName} tem ${this.year} anos`);
    }
    setName() {
        return this.name;
    }
}
exports.default = People;
class Job extends People {
    constructor(name, lastName, year, job) {
        super(name, lastName, year);
        this.job = job;
    }
}
const peopleOne = new Job('gabriel', 'lazari', 24, 'developer');
peopleOne.getName();
const name = peopleOne.setName();
console.log(name);

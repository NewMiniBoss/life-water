export default class People {
    constructor (public name: string, public lastName: string, public year: number) {}

    public getName(): void {
        console.log(`${this.name} ${this.lastName} tem ${this.year} anos`);
    }

    public setName(): string {
        return this.name;
    }
}

class Job extends People {
    constructor (name: string, lastName: string, year: number, public job: string) {
        super(name, lastName, year);
    }
}

const peopleOne = new Job('gabriel', 'lazari', 24, 'developer');
peopleOne.getName();
const name = peopleOne.setName();
console.log(name);
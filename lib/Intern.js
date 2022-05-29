//Intern class extends Employee with the following in addition:
//school
//getSchool(), getRole()//Overridden to return 'Intern'
const inquirer = require('inquirer');
const Employee = require('./Employee');


class Intern extends Employee {
    constructor(name = '') {
        super(name);

        this.school = school;
    }

    getSchool() {
        return `This employees school was ${this.school}`;
    };

    getRole() {
        return `This employees role is ${this.role}`;
    };
}
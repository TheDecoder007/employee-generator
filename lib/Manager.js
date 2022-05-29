//Manager class extends Employee with the following in addition:
//officeNumber
//getRole()//Overridden to return 'Manager'
const inquirer = require('inquirer');
const Employee = require('./Employee');


class Manager extends Employee {
    constructor(name = '') {
        super(name);

        this.officenumber = officenumber;
    }

    getRole() {
        return `This employees role is ${this.role}`;
    };
}

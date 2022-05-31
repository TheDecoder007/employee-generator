//Engineer class extends Employee with the following in addition:
//github(github username)
//getGitHub(), getRole()//Overridden to return 'Engineer'
const inquirer = require('inquirer');
const Employee = require('./Employee');


class Engineer extends Employee {
    constructor(name = '') {
        super(name);
        super(id);
        super(email);

        this.role = Engineer;
        this.github = github;
    }

    getGitHub() {
        return `This employees GitHub name is ${this.github}`;
    };

    getRole() {
        return` This employees role is ${this.role}`;
    };
}

module.exports = Engineer;
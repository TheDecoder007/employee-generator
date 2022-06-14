//Engineer class extends Employee with the following in addition:
//github(github username)
//getGitHub(), getRole()//Overridden to return 'Engineer'
const Employee = require('./Employee');


class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
      

        this.github = github;
    }

    getGitHub() {
        return this.github;
    };

    getRole() {
        return 'Engineer';
    };
}

module.exports = Engineer;
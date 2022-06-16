//Engineer class extends Employee with the following in addition:
//github(github username)
//getGitHub(), getRole()//Overridden to return 'Engineer'
const Employee = require('./Employee');


class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
      
        this.github = github;
        // this.role = 'Engineer';
    }

    getGitHub() {
        return this.github;
    };

    getRole() {
        return 'Engineer';
        // return this.role;
    };
}

module.exports = Engineer;
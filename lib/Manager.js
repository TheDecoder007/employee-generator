//Manager class extends Employee with the following in addition:
//officeNumber
//getRole()//Overridden to return 'Manager'
const Employee = require('./Employee');


class Manager extends Employee {
    constructor(name, id, email, officenumber) {
        super(name, id, email);
        this.officenumber = officenumber;
        this.role = Manager;
    }

    getRole() {
        // return 'Manager';
        return this.role;
    };
}

module.exports = Manager;
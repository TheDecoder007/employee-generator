//Intern class extends Employee with the following in addition:
//school
//getSchool(), getRole()//Overridden to return 'Intern'
const Employee = require('./Employee');


class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
        // this.role = Intern;
    }

    getSchool() {
        return this.school;
    };

    getRole() {
        return 'Intern';
        // return this.role;
    };
}

module.exports = Intern;
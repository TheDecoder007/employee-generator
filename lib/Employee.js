//Employee class with the following properties and methods:
//name, id, email, 
//getName(), getId(), getEmail(), getRole()//returns 'Employee
// const inquirer = require('inquirer');


class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;       
    };

    getId() {
        return this.id;
    };

    getEmail() {
        return this.email;
    };
    // getRole() {
    //     return this.role;
    // };

}



module.exports = Employee;
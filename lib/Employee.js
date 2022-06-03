//Employee class with the following properties and methods:
//name, id, email, 
//getName(), getId(), getEmail(), getRole()//returns 'Employee
const inquirer = require('inquirer');


class Employee {
    constructor(name = '') {
        // this.name = name;
        // this.id = id;
        // this.email = email;
        // this.role = role;
    }

    getName() {
        return `This employees name is ${this.name}`;       
    };

    getId() {
        return `This employees ID is ${this.id}`;
    };

    getEmail() {
        return `This employees email is ${this.email}`;
    };
    getRole() {
        return `This employees role is ${this.role}`;
    };

}


//getName() getId() etc modeled after this?
// getHealth() {
//     return `${this.name}'s health is now ${this.health}!`;
//   };

module.exports = Employee;
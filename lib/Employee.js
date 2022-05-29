//Employee class with the following properties and methods:
//name, id, email, 
//getName(), getId(), getEmail(), getRole()//returns 'Employee
const inquirer = require('inquirer');


class Employee {
    constructor(name = '') {
        this.name = name;
    }
}

//getName() getId() etc modeled after this?
// getHealth() {
//     return `${this.name}'s health is now ${this.health}!`;
//   };
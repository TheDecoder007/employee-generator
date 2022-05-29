const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
jest.mock('../lib/Employee');


test('creates an new employee object', () => {
    const employee = new Employee('Joe');
   

    expect(employee.name).toBe('Joe');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.role).toEqual(expect.stringContaining(employee.role));
});

test('gets employee info as an object', () => {
    const employee = new Employee('Joe');

    expect(employee.getId()).toEqual(expect.Number(employee.id));
    expect(employee.getName()).toEqual(expect.stringContaining(employee.name));
    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email));
    expect(employee.getRole()).toEqual(expect.stringContaining(employee.role));

});
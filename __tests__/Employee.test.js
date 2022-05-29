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

test('gets employee name as an object', () => {
    const employee = new Employee('Joe');

    expect(employee.getName()).toEqual(expect.stringContaining(employee.name));
});
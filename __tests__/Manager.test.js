const Manager = require('../lib/Manager');
jest.mock('../lib/Manager');
const Employee = require('../lib/Employee');


test('creates an new manager object', () => {
    const manager = new Manager('Joe');
   

    expect(manager.name).toBe('Joe');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.role).toEqual(expect.stringContaining(manager.role));
    expect(manager.officenumber).toEqual(expect.any(Number));
});
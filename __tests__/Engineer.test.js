const Engineer = require('../lib/Engineer');
jest.mock('../lib/Engineer');
const Employee = require('../lib/Employee');


test('creates an new engineer object', () => {
    const engineer = new Engineer('Joe');
   

    expect(engineer.name).toBe('Joe');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.role).toEqual(expect.stringContaining(engineer.role));
    expect(engineer.github).toEqual(expect.stringContaining(engineer.github));
});

test('Gets Engineer GitHub name', () => {
    const engineer = new Engineer('Joe');
    
    expect(engineer.getGitHub()).toEqual(expect.stringContaining(engineer.github));

});
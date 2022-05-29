const Intern = require('../lib/Intern');
jest.mock('../lib/Intern');
const Employee = require('../lib/Employee');


test('creates an new intern object', () => {
    const intern = new Intern('Joe');
   

    expect(intern.name).toBe('Joe');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.role).toEqual(expect.stringContaining(intern.role));
    expect(intern.school).toEqual(expect.stringContaining(intern.school));
});

test('Gets Intern school', () => {
    const intern = new Intern('Joe');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school));

});

const Employee = require('../lib/employee.js');

const employeeTemp = new Employee('Tyler', 5, 'tylerf808@gmail.com');

describe('employee', () => {
    it('Should return a string when calling getName', () => {
        expect(employeeTemp.getName().toBe('Tyler'));
    })
});
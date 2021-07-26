const Employee = require('../lib/employee.js');

describe('employee', () => {
    describe('getName', () => {
        it('Should return a string when calling getName', () => {
            const employeeTemp = new Employee('Tyler', 5, 'tylerf808@gmail.com');
            const name = employeeTemp.getName()
            expect(name).toBe('Tyler');
        })
    })

    describe('getId', () => {
        it('Should return their ID number', () => {
            const employeeTemp = new Employee('Tyler', 5, 'tylerf808@gmail.com');
            const id = employeeTemp.getId()
            expect(id).toBe(5);
        })
    })

    describe('getEmail', () => {
        it('Should return their email', () => {
            const employeeTemp = new Employee('Tyler', 5, 'tylerf808@gmail.com');
            const email = employeeTemp.getEmail()
            expect(email).toBe('tylerf808@gmail.com');
        })
    })

    describe('getId', () => {
        it('Should return their ID number', () => {
            const employeeTemp = new Employee('Tyler', 5, 'tylerf808@gmail.com');
            const role = employeeTemp.getRole()
            expect(role).toBe('Employee');
        })
    })
});
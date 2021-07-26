const Manager = require('../lib/manager');

describe('manager', () => {
    describe('getRole', () => {
        it('Should return their role', () => {
            const employeeTemp = new Manager('Tyler', 5, 'tylerf808@gmail.com', 4);
            const role = employeeTemp.getRole()
            expect(role).toBe('Manager');
        })
    })
});
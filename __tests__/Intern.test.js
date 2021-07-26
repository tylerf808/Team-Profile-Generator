const Intern = require('../lib/intern');

describe('intern', () => {
    describe('getSchool', () => {
        it('Should return their school', () => {
            const employeeTemp = new Intern('Tyler', 5, 'tylerf808@gmail.com', 'school');
            const school = employeeTemp.getSchool()
            expect(school).toBe('school');
        })
    })

    describe('getRole', () => {
        it('Should return their role', () => {
            const employeeTemp = new Intern('Tyler', 5, 'tylerf808@gmail.com', 'tylerf808');
            const role = employeeTemp.getRole()
            expect(role).toBe('Intern');
        })
    })
});
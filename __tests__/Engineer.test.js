const Engineer = require('../lib/engineer');

describe('engineer', () => {
    describe('getGithub', () => {
        it('Should return their github username', () => {
            const employeeTemp = new Engineer('Tyler', 5, 'tylerf808@gmail.com', 'tylerf808');
            const git = employeeTemp.getGithub()
            expect(git).toBe('tylerf808');
        })
    })

    describe('getRole', () => {
        it('Should return their role', () => {
            const employeeTemp = new Engineer('Tyler', 5, 'tylerf808@gmail.com', 'tylerf808');
            const role = employeeTemp.getRole()
            expect(role).toBe('Engineer');
        })
    })
});
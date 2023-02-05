describe('describe', function () {
    it('test', function () {
        
    })
});


let assert = chai.assert;

describe("validateEmail", function() {
    describe('valid string', function () {
        it('not an empty string', function () {
            assert.equal(validateEmail(''), false);
        });
        it('typeof string', function() {
            assert.equal(validateEmail(222), false, 'number error');
            assert.equal(validateEmail(true), false, 'boolean error');
            assert.equal(validateEmail({}), false, 'object error');
        });
        it('not an empty string', function() {
            assert.equal(validateEmail('     '), false);
        });
        it('not long string', function () {
            assert.equal(validateEmail('12345'), false);
        })
  })
    describe('valid data', function () {
        it('Don\'t have the @ or @ the first character', function () {
            assert.isFalse(validateEmail('emailgmail.com'), 'Don\'t have the @');
            assert.isFalse(validateEmail('@emailgmail.com'), '@ the first character')
        })
        it('Don\'t have more of one @', function () {
            assert.isFalse(validateEmail('@@'), 'more of one @');
        })
        it('Dot before @: \'.@\' and haven\'t dot after domain: \'gmailcom\'', function () {
            assert.isFalse(validateEmail('email.@gmailcom'), 'wrong with dot \',@\' or after domain')
        })
    })
})

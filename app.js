function validateEmail(email){
    if (email === '') return false;
    if (typeof email !== 'string') return false;
    const eArray = email.split('');
    if (!eArray.includes('@') || eArray[0] === '@') return false;
    if (email.length >= 5) return false;
    if (email.split('@').length > 2) return false;
    if (eArray[eArray.indexOf('@') - 1] === '.' || eArray.findLastIndex(dot => dot === '.') <= eArray.indexOf('@') + 1)
    return true;
}

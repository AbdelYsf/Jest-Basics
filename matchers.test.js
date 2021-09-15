
const functions = require('./Functions');


// matchers 

// toBe
test('Adds 2 plus 2 equals 4', () => {
    expect(functions.add(2, 2)).toBe(4);
});

// not
test('Adds 2 plus 2 does not equal 3', () => {
    expect(functions.add(2, 2)).not.toBe(3);
});
// CHECK FOR TRUTHY & FALSY VALUES
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false

// toBeNull

test('should be null', () => {
    expect(functions.isNull()).toBeNull();

})

// toBeFalsy /truthy
test('shoud be falsy', () => {
    expect(functions.checkValue(null)).toBeFalsy();
    expect(functions.checkValue(undefined)).toBeFalsy();
})

// toBeEqual

test('user should be Abdel', () => {
    expect(functions.createUser()).toEqual({ name: 'Abdel' });
})

// Less than and greater than
test('Should be under 1600', () => {
    const load1 = 800;
    const load2 = 800;
    expect(load1 + load2).toBeLessThanOrEqual(1600);
});

// Regex
test('There is no I in team', () => {
    expect('team').not.toMatch(/I/i);
});

// Arrays
test('Admin should be in usernames', () => {
    usernames = ['john', 'karen', 'admin'];
    expect(usernames).toContain('admin');
})

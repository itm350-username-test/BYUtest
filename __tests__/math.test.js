// __tests__/math.test.js
const { add } = require('../src/math'); // Ensure this path is correct

test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
});
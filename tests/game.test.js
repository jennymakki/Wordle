const { state } = require('../src/state.js');

test('should select a secret word from the dictionary', () => {
    expect(['earth', 'plane', 'crane', 'audio', 'house']).toContain(state.secret);
});
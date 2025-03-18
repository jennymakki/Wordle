
import { state, dictionary } from '../src/state.js';

test('secret word should be one of the dictionary words', () => {
    expect(dictionary).toContain(state.secret);
});

import { registerKeyBoardEvents } from '../src/keyboard.js';
import { state } from '../src/state.js';

test('should update grid on key press', () => {
    state.grid[0][0] = 'b';
    document.body.dispatchEvent(new KeyboardEvent('keydown', { key: 'b' }));
    expect(state.grid[0][0]).toBe('b');
});
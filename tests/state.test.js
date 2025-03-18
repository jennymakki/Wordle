/* import { state, revealWord } from '../src/state';
import { getFeedback } from '../src/state'
import { describe, it, expect, beforeEach } from 'vitest';

function resetState() {
    state.secret = 'apple';
    state.grid = Array(6).fill().map(() => Array(5).fill(''));
    state.currentRow = 0;
    state.currentCol = 0;
  }
  
  describe('getFeedback function', () => {
    it('should return correct feedback for a completely correct guess', () => {
      const guess = 'apple';
      const feedback = getFeedback(guess, state.secret);
  
      expect(feedback).toEqual([
        { letter: 'a', result: 'correct' },
        { letter: 'p', result: 'correct' },
        { letter: 'p', result: 'correct' },
        { letter: 'l', result: 'correct' },
        { letter: 'e', result: 'correct' },
      ]);
    });
  
    it('should return correct feedback for a partially correct guess', () => {
      const guess = 'alamo';
      const feedback = getFeedback(guess, state.secret);
  
      expect(feedback).toEqual([
        { letter: 'a', result: 'correct' },
        { letter: 'l', result: 'misplaced' },
        { letter: 'a', result: 'incorrect' },
        { letter: 'm', result: 'incorrect' },
        { letter: 'o', result: 'incorrect' },
      ]);
    });
  
    it('should return correct feedback for a completely incorrect guess', () => {
      const guess = 'stone';
      const feedback = getFeedback(guess, state.secret);
  
      expect(feedback).toEqual([
        { letter: 's', result: 'incorrect' },
        { letter: 't', result: 'incorrect' },
        { letter: 'o', result: 'incorrect' },
        { letter: 'n', result: 'incorrect' },
        { letter: 'e', result: 'incorrect' },
      ]);
    });
  });
  
  describe('revealWord function', () => {
    beforeEach(() => {
      resetState();  // Reset state before each test
    });
  
    it('should increment currentRow after a guess', () => {
      const guess = 'apple';
      revealWord(guess);
      expect(state.currentRow).toBe(1);
    });
  
    it('should not increment currentRow after an invalid guess', () => {
      const guess = 'invalid';  // Assuming invalid word won't increment currentRow
      revealWord(guess);
      expect(state.currentRow).toBe(0);  // Still on the first row
    });
  
    it('should mark the word as correct and stop the game if the guess is correct', () => {
      const guess = 'apple';
      const originalAlert = global.alert; // Mocking alert
  
      // Mock alert to avoid it being called in the test
      global.alert = jest.fn();
  
      revealWord(guess);
  
      expect(global.alert).toHaveBeenCalledWith('🎉 Congratulations! You guessed the word!');
      expect(state.currentRow).toBe(1);  // Make sure the row is incremented after guessing
      global.alert = originalAlert; // Restore the original alert function
    });
  
    it('should end the game and reveal secret if max rows are reached', () => {
      // Simulate 5 rows of incorrect guesses
      state.currentRow = 5;
      const guess = 'stone';
      const originalAlert = global.alert; // Mocking alert
  
      global.alert = jest.fn();
  
      revealWord(guess);
  
      expect(global.alert).toHaveBeenCalledWith('😞 Better luck next time! The word was "apple".');
      global.alert = originalAlert; // Restore the original alert function
    });
  }); */
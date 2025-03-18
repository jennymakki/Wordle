import { state } from './state.js';
import { drawGrid } from './grid.js';
import { registerKeyBoardEvents } from './keyboard.js';

function startup() {
    const gameContainer = document.getElementById('game');
    drawGrid(gameContainer);
    registerKeyBoardEvents();

    console.log(`Secret word: ${state.secret}`); // Show the secret word for testing purposes
}

startup();
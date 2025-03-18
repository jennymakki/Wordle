import { state } from './state.js';
import { drawGrid } from './grid.js';
import { registerKeyBoardEvents } from './keyboard.js';

function startup() {
    const gameContainer = document.getElementById('game');
    drawGrid(gameContainer);
    registerKeyBoardEvents();

    const inputField = document.getElementById('grid');
    if (inputField) {
        setTimeout(() => {
            inputField.focus();
        }, 100); 
    }

    console.log(`Secret word: ${state.secret}`); 
}

startup();
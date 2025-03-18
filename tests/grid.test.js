import { drawBox, drawGrid, updateGrid } from '../src/grid.js';
import { state } from '../src/state.js';

document.body.innerHTML = `<div id="game"></div>`;

test('updateGrid should update grid elements', () => {
    state.grid[0][0] = 'a';
    updateGrid();
    const box = document.getElementById('box00');
    expect(box.textContent).toBe('a');
});

test('drawGrid should create a grid of 6 rows and 5 columns', () => {
    const gameContainer = document.getElementById('game');
    drawGrid(gameContainer);
    const boxes = gameContainer.getElementsByClassName('box');
    expect(boxes.length).toBe(30); // 6 rows x 5 columns
});
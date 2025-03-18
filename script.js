/* const dictionary = ['earth', 'plane', 'crane', 'audio', 'house'];

const state = {
    secret: dictionary[Math.floor(Math.random() * dictionary.length)],
    grid: Array(6)
        .fill()
        .map(() => Array(5).fill('')),
    currentRow: 0,
    currentCol: 0,
};

function updateGrid() {
    for (let i = 0; i < state.grid.length; i++) {
        for (let j = 0; j < state.grid[i].length; j++) {
            const box = document.getElementById(`box${i}${j}`);
            box.textContent = state.grid[i][j];
        }
    }
}

function drawBox(container, row, col, letter = '') {
    const box = document.createElement('div');
    box.className = 'box';
    box.id = `box${row}${col}`;
    box.textContent = letter;

    container.appendChild(box);
    return box;
}

function drawGrid(container) {
    const grid = document.createElement('div');
    grid.className = 'grid';

    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 5; j++) {
            drawBox(grid, i, j);
        }
    }

    container.appendChild(grid);
}

function registerKeyBoardEvents() {
    document.body.onkeydown = (e) => {
        const key = e.key;
        if (key === 'Enter') {
            if (state.currentCol === 5) {
                const word = getCurrentWord();
                if (isWordValid(word)) {
                    revealWord(word);
                    state.currentRow++;
                    state.currentCol = 0;
                } else {
                    alert('Not a valid word');
                }
            }
        }
        if (key === 'Backspace') {
            removeLetter();
        }
        if (isLetter(key)) {
            addLetter(key);
        }

        updateGrid();
    };
}

function getCurrentWord() {
    return state.grid[state.currentRow].join('').toLowerCase();
}

function isWordValid(word) {
    return dictionary.includes(word.toLowerCase());
}

function revealWord(guess) {
    const row = state.currentRow;
    const secret = state.secret;
    const feedback = getFeedback(guess, secret);

    console.log(`User guessed: ${guess}`);
    console.log(`The secret word is: ${secret}`);
    console.log('Feedback:', feedback);

    feedback.forEach(item => {
        console.log(`${item.letter} / ${item.result}`);
    });

    const secretArray = secret.split('');
    const guessedArray = guess.split('');
    const used = Array(5).fill(false);

    for (let i = 0; i < 5; i++) {
        const box = document.getElementById(`box${row}${i}`);
        if (guessedArray[i] === secretArray[i]) {
            box.classList.add('right');
            used[i] = true;
            guessedArray[i] = null;
        }
    }

    for (let i = 0; i < 5; i++) {
        const box = document.getElementById(`box${row}${i}`);
        if (guessedArray[i] !== null) {
            const letterIndex = secretArray.findIndex((l, index) => l === guessedArray[i] && !used[index]);

            if (letterIndex !== -1) {
                box.classList.add('wrong');
                used[letterIndex] = true;
            } else {
                box.classList.add('empty');
            }
        }
    }

    const isWinner = state.secret === guess;
    const isGameOver = state.currentRow === 5;

    if (isWinner) {
        alert('🎉 Congratulations! You guessed the word!');
    } else if (isGameOver) {
        alert(`😞 Better luck next time! The word was "${state.secret}".`);
    }
}

function getFeedback(guess, secret) {
    const secretArray = secret.split('');
    const guessedArray = guess.split('');
    const used = Array(secret.length).fill(false); 
    const feedback = [];


    for (let i = 0; i < secret.length; i++) {
        if (guessedArray[i] === secretArray[i]) {
            feedback.push({ letter: guessedArray[i], result: 'correct' });
            used[i] = true;
            guessedArray[i] = null;
        }
    }

    for (let i = 0; i < secret.length; i++) {
        if (guessedArray[i] !== null) {
            const letterIndex = secretArray.findIndex((l, index) => l === guessedArray[i] && !used[index]);
            
            if (letterIndex !== -1) {
                feedback.push({ letter: guessedArray[i], result: 'misplaced' });
                used[letterIndex] = true;
            } else {
                feedback.push({ letter: guessedArray[i], result: 'incorrect' });
            }
        }
    }

    return feedback;
}

function isLetter(key) {
    return key.length === 1 && key.match(/[a-z]/i);
}

function addLetter(letter) {
    if (state.currentCol === 5) return;
    state.grid[state.currentRow][state.currentCol] = letter.toLowerCase();
    state.currentCol++;
}

function removeLetter() {
    if (state.currentCol === 0) return;
    state.grid[state.currentRow][state.currentCol - 1] = '';
    state.currentCol--;
}

function startup() {
    const game = document.getElementById('game');
    drawGrid(game);

    registerKeyBoardEvents();
}

startup(); */
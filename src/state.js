
export const dictionary = ['earth', 'plane', 'crane', 'audio', 'house'];

export const state = {
    secret: dictionary[Math.floor(Math.random() * dictionary.length)],
    grid: Array(6)
        .fill()
        .map(() => Array(5).fill('')),
    currentRow: 0,
    currentCol: 0,
};

export function revealWord(guess) {
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

    // Check for correct letters
    for (let i = 0; i < 5; i++) {
        const box = document.getElementById(`box${row}${i}`);
        if (guessedArray[i] === secretArray[i]) {
            box.classList.add('right');
            used[i] = true;
            guessedArray[i] = null;
        }
    }

    // Check for misplaced or incorrect letters
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

    // Check if the game is won or over
    const isWinner = state.secret === guess;
    const isGameOver = state.currentRow === 5;

    if (isWinner) {
        alert('🎉 Congratulations! You guessed the word!');
    } else if (isGameOver) {
        alert(`😞 Better luck next time! The word was "${state.secret}".`);
    }
}

// Function to get feedback on the guessed word
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

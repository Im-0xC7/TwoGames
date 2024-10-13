let randomNumber = Math.floor(Math.random() * 100) + 1;
let guesses = 0;

const guessInput = document.querySelector('#guessInput');
const prevGuesses = document.querySelector('#guesses');
const result = document.querySelector('#guessResult');

document.querySelector('#guessForm').addEventListener('submit', e => {
    e.preventDefault();

    let guess = Number(guessInput.value);
    if (guess !== NaN) {
        if (guesses == 0) {
            prevGuesses.innerHTML = 'Previous guesses: ';
        }

        prevGuesses.innerHTML += `${guess}  `;
        guesses++;

        if (guess == randomNumber) {
            result.className = 'justRight';
            result.innerHTML = 'Congratulations! You got it right!';
            gameOver();
        } else if (guesses >= 10) {
            result.className = 'tooMany';
            result.innerHTML = '!!! Too many attempts, GAME OVER !!!';
            gameOver();
        } else {
            if (guess > randomNumber) {
                result.className = 'tooBig';
                result.innerHTML = 'WRONG, that guess was too BIG';
            } else {
                result.className = 'tooSmall';
                result.innerHTML = 'WRONG, that guess was too small';
            }
        }

        guessInput.value = '';
    }
});

const gameOver = () => {
    guessInput.setAttribute('disabled', true);

    const resetBtn = document.createElement('button');
    resetBtn.className = 'resetBtn';
    resetBtn.innerHTML = 'Start new game';
    resetBtn.addEventListener('click', () => {
        resetBtn.parentNode.removeChild(resetBtn);
        guesses = 0;
        prevGuesses.innerHTML = '';
        result.className = '';
        result.innerHTML = '';
        guessInput.removeAttribute('disabled');
        guessInput.value = '';
        guessInput.focus();
        randomNumber = Math.floor(Math.random() * 100) + 1;
    });
    resetBtn.focus();

    document.querySelector('#guess').appendChild(resetBtn);
};
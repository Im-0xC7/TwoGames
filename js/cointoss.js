const img = document.querySelector('#coinImg');
const results = document.querySelector('#coinResults');
const score = document.querySelector('#coinScore');

let wins = 0;
let losses = 0;

function doGame(guess) {
    const rand = Math.floor(Math.random() * 2);
    img.setAttribute('src', rand ? 'img/tails.jpg' : 'img/heads.jpg');

    const plrGuess = guess ? 'Tails' : 'Heads';
    const toss = rand ? 'Tails' : 'Heads';

    if (guess === rand) {
        wins++;
        results.innerHTML = `
            You chose ${plrGuess}<br>
            The toss is ${toss}<br>
            You chose wisely!
        `;
    } else {
        losses++;
        results.innerHTML = `
            You chose ${plrGuess}<br>
            The toss is ${toss}<br>
            Sorry, wrong choice
        `;
    }

    score.innerHTML = `
        <span>Wins = ${wins}</span>&nbsp;&nbsp;&nbsp;
        <span>Losses = ${losses}</span>
    `;
}

document.querySelector('#heads').addEventListener('click', () => doGame(0));

document.querySelector('#tails').addEventListener('click', () => doGame(1));
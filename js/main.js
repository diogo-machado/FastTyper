window.addEventListener('load', init);

const levels = {
    easy: 5,
    medium: 3,
    hard: 2
}

const currentLevel = levels.easy;

let time = currentLevel;
let score = 0;
let isPlaying;


//elementos DOM
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
    'banana',
    'tomate',
    'caneca',
    'documento',
    'garrafa',
    'abacate',
    'holofote',
    'impressora',
    'computador',
    'notebook',
    'roteador',
    'apartamento',
    'alface',
    'carro',
    'cortina',
    'chinelo',
    'teclado',
    'chocolate'
];

//Inicio jogo
function init() {
    seconds.innerHTML = currentLevel;
    //carrega palavra do array
    showWord(words);
    //começa o jogo
    wordInput.addEventListener('input', startMatch);
    //começa a contar o tempo
    setInterval(countown, 1000);
    setInterval(checkStatus, 50);
}

//Inicia o jogo
function startMatch() {
    if (matchWords()) {
        isPlaying = true;
        time = currentLevel + 1;
        showWord(words);
        wordInput.value = '';
        score++;
    }
    if (score === -1) {
        scoreDisplay.innerHTML = 0;
    } else {
        scoreDisplay.innerHTML = score;
    }

}


function matchWords() {
    if (wordInput.value === currentWord.innerHTML) {
        message.innerHTML = "ACERTOU!";
        return true;
    } else {
        message.innerHTML = '';
        return false;
    }
}

//escolhe palavra aleatória

function showWord(words) {
    const randIndex = Math.floor(Math.random() * words.length);
    currentWord.innerHTML = words[randIndex];
}

function countown() {
    if (time > 0) {
        time--;
    } else if (time === 0) {
        isPlaying = false;
    }
    timeDisplay.innerHTML = time;
}

function checkStatus() {
    if (!isPlaying && time === 0) {
        message.innerHTML = "GAME OVER";
        score = -1;
    }
}
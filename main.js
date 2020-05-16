const game = new Game();
const points = document.getElementById('points');
const startButton = document.getElementById('button');
const results = document.getElementById('results');

game.createGrid(game.m, game.n);
game.start();
const squares = document.querySelectorAll('.square');
squares.forEach(($square) => $square.addEventListener('click', game.checkSquare));

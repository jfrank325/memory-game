class Game {
  constructor() {
    this.m = 5;
    this.n = 5;
    this.r = Math.floor(Math.random() * (this.m * this.n));
    this.b = this.m * this.n - this.r;
    this.s = 2000;
    this.points = 0;
    this.clickable = true;
    this.arr = [];
  }

  createGrid(row, col) {
    const grid = document.getElementById('grid');
    grid.style.setProperty('--grid-rows', row);
    grid.style.setProperty('--grid-cols', col);
    for (let i = 0; i < row * col; i++) {
      let square = document.createElement('div');
      grid.appendChild(square).className = 'square';
    }
  }

  roundStart() {
    for (let i = 1; i < game.r; i++) {
      game.arr.push(i);
    }
    let squares = document.querySelectorAll('.square');
    squares.forEach(($square, i) =>
      game.arr.indexOf(Math.floor(Math.random() * i)) !== -1
        ? ($square.style.backgroundColor = 'red') && $square.setAttribute('correct', 'yes')
        : ($square.style.backgroundColor = 'blue') && $square.setAttribute('correct', 'no')
    );
    squares.forEach(($square) => ($square.innerHTML = ''));
  }

  init() {
    game.clickable = false;
    game.roundStart();
    results.innerHTML = '';
    game.r = Math.floor(Math.random() * game.n * game.m);
    setTimeout(function () {
      game.clickable = true;
      document.querySelectorAll('.square').forEach(($square) => ($square.style.backgroundColor = 'white'));
    }, game.s);
  }

  start() {
    startButton.addEventListener('click', game.init);
  }

  checkSquare() {
    if (game.clickable) {
      let allCorrectSquares = [];
      squares.forEach(($square) => ($square.getAttribute('correct') === 'yes' ? allCorrectSquares.push($square) : ''));
      if (allCorrectSquares.length === 1) {
        game.clickable = false;
        results.innerText = 'You Win!';
      }
      if (this.getAttribute('correct') === 'yes') {
        game.points++;
        this.setAttribute('correct', 'no');
        this.style.backgroundColor = 'red';
      } else if (this.getAttribute('correct') === 'no') {
        this.style.backgroundColor = 'blue';
        game.clickable = false;
        results.innerHTML = 'Game Over';
        game.points = 0;
        document.querySelectorAll('.squares').innerHTML = '';
      }
      points.innerText = game.points;
    }
  }
}

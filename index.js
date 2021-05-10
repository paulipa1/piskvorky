'use strict';
console.log('fungujem');

let naTahu = 'circle';

const policka = document.querySelectorAll('.policko');
const kruzok = document.querySelector('.kruzok');

for (let i = 0; i < policka.length; i++) {
  policka[i].addEventListener('click', () => {
    if (naTahu === 'circle') {
      policka[i].classList.add('board__field--circle');
      policka[i].classList.add('zaplnene');
      kruzok.src = 'cross.svg';
      naTahu = 'cross';
    } else if (naTahu === 'cross') {
      policka[i].classList.add('board__field--cross');
      policka[i].classList.add('zaplnene');
      kruzok.src = 'circle.svg';
      naTahu = 'circle';
    }
    if (isWinningMove(policka[i])) {
      if (getSymbol(policka[i]) === 'circle') {
        alert('Víťazí krúžok');
      } else alert('Víťazí kríž');
    }
  });
}

const zaplnene = document.querySelector('.zaplnene');
for (let i = 0; i < policka.length; i++) {
  policka[i].addEventListener('click', () => {
    policka[i].disabled = true;
  });
}

let pocetKlikov = 0;
const klik = () => {
  pocetKlikov += 1;
  console.log(`Klik na policko ${pocetKlikov}x.`);
};

for (let i = 0; i < policka.length; i++) {
  policka[i].addEventListener('click', klik);
}

const getSymbol = (polozka) => {
  // Název třídy přizpůsob tvému kódu.
  if (polozka.classList.contains('board__field--cross')) {
    return 'cross';
  } else if (polozka.classList.contains('board__field--circle')) {
    return 'circle';
  } else {
    return 'undefined';
  }
};

console.log(getSymbol(policka[1]));

const boardSize = 10; // 10x10

const getField = (row, column) => {
  return policka[row * boardSize + column];
};

console.log(getField(0, 9));

const getPosition = (polozka) => {
  let polozkaIndex = 0;
  while (polozkaIndex < policka.length && polozka !== policka[polozkaIndex]) {
    polozkaIndex++;
  }

  return {
    row: Math.floor(polozkaIndex / boardSize),
    column: polozkaIndex % boardSize,
  };
};

console.log(getPosition(policka[70]));

const symbolsToWin = 5;
const isWinningMove = (polozka) => {
  const origin = getPosition(polozka);
  const symbol = getSymbol(polozka);

  let i;

  let inRow = 1; // Jednička pro právě vybrané políčko
  // Koukni doleva
  i = origin.column;
  while (i > 0 && symbol === getSymbol(getField(origin.row, i - 1))) {
    inRow++;
    i--;
  }

  // Koukni doprava
  i = origin.column;
  while (
    i < boardSize - 1 &&
    symbol === getSymbol(getField(origin.row, i + 1))
  ) {
    inRow++;
    i++;
  }

  if (inRow >= symbolsToWin) {
    return true;
  }

  let inColumn = 1;
  // Koukni nahoru
  i = origin.row;
  while (i > 0 && symbol === getSymbol(getField(i - 1, origin.column))) {
    inColumn++;
    i--;
  }

  // Koukni dolu
  i = origin.row;
  while (
    i < boardSize - 1 &&
    symbol === getSymbol(getField(i + 1, origin.column))
  ) {
    inColumn++;
    i++;
  }

  if (inColumn >= symbolsToWin) {
    return true;
  }

  return false;
};

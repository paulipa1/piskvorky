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
  } else if (polozka.classList.contains) 'board__field--circle';
  {
    return 'circle';
  }
};

console.log(getSymbol(policka[1]));

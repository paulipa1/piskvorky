'use strict';
console.log('fungujem');

let naTahu = 'circle';

const policka = document.querySelectorAll('.policko');
const kruzok = document.querySelector('.kruzok');

for (let i = 0; i < policka.length; i++) {
  policka[i].addEventListener('click', () => {
    if (naTahu === 'circle') {
      policka[i].classList.add('board_field--circle');
      policka[i].classList.add('zaplnene');
      kruzok.src = 'cross.svg';
      naTahu = 'cross';
    } else if (naTahu === 'cross') {
      policka[i].classList.add('board_field--cross');
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

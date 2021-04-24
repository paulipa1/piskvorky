'use strict';

let naTahu = 'circle';
const policka = document.querySelectorAll('.policko');

for (let i = 0; i < policka.length; i++) {
  policka[i].addEventListener('click', () => {
    if (naTahu === 'circle') {
      policka[i].classList.add('board_field--circle');
      document.querySelector('.kruzok').src = 'cross.svg';
      naTahu = 'cross';
      // policka[i].setAttribute('disabled', true);
    } else if (naTahu === 'cross') {
      policka[i].classList.add('board_field--cross');
      document.querySelector('.kruzok').src = 'circle.svg';
      naTahu = 'circle';
      // policka[i].setAttribute('disabled', true);
    }
  });
}

'use strict';
const score_pl1 = document.getElementById('score--0');
const score_pl2 = document.querySelector('#score--1');
const curr_sc0 = document.getElementById('current--0');
const curr_sc1 = document.getElementById('current--1');

const btn_new = document.querySelector('.btn--new');
const btn_roll = document.querySelector('.btn--roll');
const btn_hold = document.querySelector('.btn--hold');

score_pl1.textContent = 0;
score_pl2.textContent = 0;
let curr_score = 0;
const dice_img = document.querySelector('.dice');
dice_img.classList.add('hidden');

//rolling dice functionality
btn_roll.addEventListener('click', function () {
  const dice_num = Math.trunc(Math.random() * 6) + 1;
  console.log(dice_num);

  dice_img.src = `dice-${dice_num}.png`;

  dice_img.classList.remove('hidden');

  if (dice_num != 1) {
    curr_score += dice_num;
    curr_sc0.textContent = score;
  } else {
  }
});

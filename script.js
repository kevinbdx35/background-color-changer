'use strict';
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  document.body.style.background = randomBg();
});

const randomBg = function () {
  return `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;
};

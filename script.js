let button = document.querySelector('.button');
let cardRate = document.querySelector('#rate');
let cardThanks = document.querySelector('#thanks');
let selected = document.querySelector('.selected');

button.addEventListener('click', () => {
  let checked = document.querySelector('input[name="rating"]:checked')?.value;
  cardRate.style.display = 'none';
  cardThanks.style.display = 'flex';
  selected.innerHTML = `You selected ${checked} out of 5`;
});

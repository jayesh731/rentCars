const openMenuBtn = document.getElementById('openMenuBtn');
const closeMenuBtn = document.getElementById('closeMenuBtn');
const menu = document.getElementById('menu1');

openMenuBtn.addEventListener('click', () => {
  menu.classList.remove('hidden');
});

closeMenuBtn.addEventListener('click', () => {
  menu.classList.add('hidden');
});

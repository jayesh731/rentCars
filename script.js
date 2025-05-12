const menuBtn = document.querySelector('#menuBtn');
const menu = document.getElementById('menu');

menuBtn.addEventListener("click", () => {
    menu.classList.toggle('flex')
    menu.classList.toggle('hidden')
})
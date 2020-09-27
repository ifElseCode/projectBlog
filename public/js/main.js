// Hamburger menu
const hamburger = document.querySelector('.main-nav--burger');
const navbarLinks = document.querySelector('.main-nav--links');
hamburger.addEventListener('click', () => {
	navbarLinks.classList.toggle('active');
});

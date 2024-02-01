const navLinks = document.querySelector('.nav-links');
const openIcon = document.querySelector('.open-icon');
const closeIcon = document.querySelector('.close-icon');

openIcon.addEventListener("click", function() {
    navLinks.classList.add('show');
    openIcon.classList.add('hide');
    closeIcon.classList.add('show');
});

closeIcon.addEventListener("click", function() {
    navLinks.classList.remove('show');
    openIcon.classList.remove('hide');
    closeIcon.classList.remove('show');
});

function toggleMenu() {
    var menuIcon = document.querySelector('.menu-icon');
    menuIcon.classList.toggle('active');

    var burgerMenu = document.querySelector('.burger');
    burgerMenu.classList.toggle('active');
}

document.querySelector('.menu-icon').addEventListener('click', toggleMenu);

document.addEventListener('click', function(event) {
    var menuIcon = document.querySelector('.menu-icon');
    var burgerMenu = document.querySelector('.burger');

    if (!menuIcon.contains(event.target) && !burgerMenu.contains(event.target)) {
        if (burgerMenu.classList.contains('active')) {
            toggleMenu();
        }
    }
});

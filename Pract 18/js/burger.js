document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const burger = document.querySelector('.burger');
    const phoneNumber = document.querySelector('.link-number');

    menuIcon.addEventListener('click', function() {
        burger.classList.toggle('active');
    });

    document.addEventListener('click', function(event) {
        const target = event.target;
        const isMenuIcon = target.classList.contains('menu-icon');
        const isBurger = target.classList.contains('burger');
        const isPhoneNumber = target.classList.contains('link-number');

        if (!isMenuIcon && !isBurger && !isPhoneNumber) {
            burger.classList.remove('active');
        }
    });
});

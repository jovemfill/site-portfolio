document.addEventListener('DOMContentLoaded', () => {
    const btnMenu = document.getElementById('btn-menu');
    const navList = document.getElementById('nav-list');

    btnMenu.addEventListener('click', () => {
        navList.classList.toggle('active');
        btnMenu.classList.toggle('active');
    });
});
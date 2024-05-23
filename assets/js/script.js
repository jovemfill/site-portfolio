document.addEventListener('DOMContentLoaded', () => {
    const btnMenu = document.getElementById('btn-menu');
    const navList = document.getElementById('nav-list');

    btnMenu.addEventListener('click', () => {
        btnMenu.classList.toggle('active');
        navList.classList.toggle('active');
    })
});
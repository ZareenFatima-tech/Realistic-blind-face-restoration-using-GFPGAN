const toggleMenu = document.querySelector('.toggle-menu');
const nav = document.querySelector('.nav');

toggleMenu.addEventListener('click', () => {
    nav.classList.toggle('active');
});

function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach((section) => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach((item) => item.classList.remove('active'));
    const clickedMenuItem = document.querySelector(`[onclick="showSection('${sectionId}')"]`);
    clickedMenuItem.classList.add('active');
}

window.onload = function() {
    showSection('aiCadmey');
  };
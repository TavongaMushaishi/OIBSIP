const themeSwitch = document.getElementById("theme-switch");
const themeLabel = document.getElementById("theme-label");



document.getElementById('view-more-btn').addEventListener('click', function () {
    const dropdownContent = document.getElementById('dropdown-content');
    if (dropdownContent.style.display === 'none' || dropdownContent.style.display === '') {
        dropdownContent.style.display = 'block'; 
        this.textContent = 'View Less'; 
    } else {
        dropdownContent.style.display = 'none'; 
        this.textContent = 'View More'; 
    }
});

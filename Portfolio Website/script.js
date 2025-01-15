document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");
  const themeIcon = document.getElementById("theme-icon");

  
  const currentTheme = localStorage.getItem("theme");
  if (currentTheme) {
    document.body.classList.add(currentTheme);
    themeIcon.textContent = currentTheme === "dark-mode" ? "light_mode" : "dark_mode";
  }

  themeToggle.addEventListener("click", () => {
    
    if (document.body.classList.contains("dark-mode")) {
      document.body.classList.replace("dark-mode", "light-mode");
      themeIcon.textContent = "";
      localStorage.setItem("theme", "light-mode");
    } else {
      document.body.classList.replace("light-mode", "dark-mode");
      themeIcon.textContent = "";
      localStorage.setItem("theme", "dark-mode");
    }
  });
});



function toggleMenu() {
  const menuLinks = document.querySelector('.menu-links');
  menuLinks.classList.toggle('hidden');
}

document.querySelectorAll('footer a').forEach(icon => {
  icon.addEventListener('click', event => {
    const url = event.currentTarget.getAttribute('href');
    if (!url || url === '#') {
      event.preventDefault();
      alert('This social media link is not configured yet!');
    }
  });
});

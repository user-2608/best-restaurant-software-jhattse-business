// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const mainMenu = document.getElementById('main-menu');
  
  if (menuToggle && mainMenu) {
    menuToggle.addEventListener('click', function() {
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', !isExpanded);
      mainMenu.style.display = isExpanded ? 'none' : 'flex';
      mainMenu.style.flexDirection = 'column';
      mainMenu.style.position = 'absolute';
      mainMenu.style.top = '100%';
      mainMenu.style.left = '0';
      mainMenu.style.right = '0';
      mainMenu.style.background = 'white';
      mainMenu.style.padding = '1rem';
      mainMenu.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
    });
  }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// FAQ accordion enhancement
document.querySelectorAll('details').forEach(detail => {
  detail.addEventListener('toggle', () => {
    if (detail.open) {
      document.querySelectorAll('details').forEach(otherDetail => {
        if (otherDetail !== detail) {
          otherDetail.removeAttribute('open');
        }
      });
    }
  });
});

// Configuration constants
const CONFIG = {
  MOBILE_MENU_CLASS: {
    CONTAINER: 'mobile-menu-container',
    OPEN: 'mobile-menu-open'
  },
  SELECTORS: {
    MENU_TOGGLE: '.mobile-menu-toggle',
    MAIN_MENU: '#main-menu',
    ANCHOR_LINKS: 'a[href^="#"]',
    DETAILS: 'details'
  },
  SCROLL_OPTIONS: {
    behavior: 'smooth',
    block: 'start'
  }
};

/**
 * Initialize mobile menu functionality
 */
function initMobileMenu() {
  const menuToggle = document.querySelector(CONFIG.SELECTORS.MENU_TOGGLE);
  const mainMenu = document.querySelector(CONFIG.SELECTORS.MAIN_MENU);
  
  if (!menuToggle || !mainMenu) return;
  
  // Add mobile menu container class for CSS styling
  mainMenu.classList.add(CONFIG.MOBILE_MENU_CLASS.CONTAINER);
  
  menuToggle.addEventListener('click', function() {
    const isExpanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', !isExpanded);
    
    // Toggle visibility using CSS class instead of inline styles
    mainMenu.classList.toggle(CONFIG.MOBILE_MENU_CLASS.OPEN, !isExpanded);
  });
}

/**
 * Initialize smooth scrolling for anchor links with debounce
 */
function initSmoothScroll() {
  let isScrolling = false;
  
  document.querySelectorAll(CONFIG.SELECTORS.ANCHOR_LINKS).forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const target = document.querySelector(targetId);
      if (!target || isScrolling) return;
      
      e.preventDefault();
      isScrolling = true;
      
      target.scrollIntoView(CONFIG.SCROLL_OPTIONS);
      
      // Reset scroll flag after animation completes
      setTimeout(() => { isScrolling = false; }, 1000);
    });
  });
}

/**
 * Initialize FAQ accordion with exclusive open behavior
 */
function initFAQAccordion() {
  const detailsElements = document.querySelectorAll(CONFIG.SELECTORS.DETAILS);
  
  detailsElements.forEach(detail => {
    detail.addEventListener('toggle', () => {
      if (!detail.open) return;
      
      // Close all other details elements efficiently
      detailsElements.forEach(otherDetail => {
        if (otherDetail !== detail && otherDetail.open) {
          otherDetail.removeAttribute('open');
        }
      });
    });
  });
}

/**
 * Initialize all components when DOM is ready
 */
document.addEventListener('DOMContentLoaded', function() {
  initMobileMenu();
  initSmoothScroll();
  initFAQAccordion();
});

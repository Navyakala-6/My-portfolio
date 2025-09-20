// Dark/Light mode toggle
const modeToggle = document.getElementById('mode-toggle');
const modeIcon = document.getElementById('mode-icon');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const getSavedMode = () => localStorage.getItem('color-mode');
const setSavedMode = (mode) => localStorage.setItem('color-mode', mode);

function applyMode(mode) {
  if (mode === 'light') {
    document.body.classList.add('light-mode');
    if (modeIcon) modeIcon.textContent = '☀️';
  } else {
    document.body.classList.remove('light-mode');
    if (modeIcon) modeIcon.textContent = '🌙';
  }
}

function toggleMode() {
  const isLight = document.body.classList.toggle('light-mode');
  if (isLight) {
    if (modeIcon) modeIcon.textContent = '☀️';
    setSavedMode('light');
  } else {
    if (modeIcon) modeIcon.textContent = '🌙';
    setSavedMode('dark');
  }
}

if (modeToggle) {
  modeToggle.addEventListener('click', toggleMode);
  // On load, set mode from saved or system preference
  const saved = getSavedMode();
  if (saved) {
    applyMode(saved);
  } else {
    applyMode(prefersDark ? 'dark' : 'light');
  }
}
// Mobile nav toggle
const navToggleButton = document.querySelector('.nav-toggle');
const navElement = document.querySelector('.site-nav');
if (navToggleButton && navElement) {
  navToggleButton.addEventListener('click', () => {
    const isOpen = navElement.classList.toggle('open');
    navToggleButton.setAttribute('aria-expanded', String(isOpen));
  });
  navElement.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navElement.classList.remove('open');
      navToggleButton.setAttribute('aria-expanded', 'false');
    });
  });
}

// Reveal on scroll
const revealElements = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && revealElements.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealElements.forEach((el) => observer.observe(el));
} else {
  revealElements.forEach((el) => el.classList.add('visible'));
}

// Active nav link highlight
const sectionIds = ['about', 'skills', 'projects', 'resume', 'contact'];
const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);
const navLinks = Array.from(document.querySelectorAll('.site-nav a'));
const setActiveLink = () => {
  let currentId = null;
  for (const section of sections) {
    const rect = section.getBoundingClientRect();
    if (rect.top <= 96 && rect.bottom >= 96) {
      currentId = section.id;
      break;
    }
  }
  navLinks.forEach((link) => {
    const href = link.getAttribute('href') || '';
    if (href === `#${currentId}`) link.classList.add('active');
    else link.classList.remove('active');
  });
};
document.addEventListener('scroll', setActiveLink, { passive: true });
window.addEventListener('load', setActiveLink);

// Back to top button visibility
const toTop = document.querySelector('.to-top');
if (toTop) {
  const toggleTop = () => {
    if (window.scrollY > 500) toTop.classList.add('visible');
    else toTop.classList.remove('visible');
  };
  document.addEventListener('scroll', toggleTop, { passive: true });
  window.addEventListener('load', toggleTop);
}

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();



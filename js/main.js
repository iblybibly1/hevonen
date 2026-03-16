// ─── NAVBAR SCROLL ────────────────────────────────────────
window.addEventListener('scroll', () => {
  document.getElementById('mainNav').classList.toggle('solid', window.scrollY > 60);
}, { passive: true });

// ─── DROPDOWN MENU (click-based, works on all devices) ────
const dropdown = document.querySelector('.nav-dropdown');
const dropdownMenu = document.querySelector('.dropdown-menu');

if (dropdown && dropdownMenu) {
  dropdown.querySelector('span').addEventListener('click', (e) => {
    e.stopPropagation();
    dropdown.classList.toggle('open');
  });
  document.addEventListener('click', () => {
    dropdown.classList.remove('open');
  });
  dropdownMenu.addEventListener('click', (e) => {
    e.stopPropagation();
  });
}

// ─── MOBILE MENU ──────────────────────────────────────────
document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('mobileMenu').classList.add('open');
});
document.getElementById('mobileClose').addEventListener('click', () => {
  document.getElementById('mobileMenu').classList.remove('open');
});

// ─── FADE-IN ON SCROLL ────────────────────────────────────
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => obs.observe(el));

// ─── FOOTER YEAR ──────────────────────────────────────────
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

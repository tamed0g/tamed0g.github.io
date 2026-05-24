// Nav scroll shadow
window.addEventListener('scroll', () => {
  document.getElementById('nav').classList.toggle('scrolled', window.scrollY > 10);
});

// Dropdown toggle
function toggleDropdown(btn) {
  const li = btn.closest('li');
  const isOpen = li.classList.contains('open');
  document.querySelectorAll('#navLinks > li.open').forEach(el => el.classList.remove('open'));
  if (!isOpen) li.classList.add('open');
}
document.addEventListener('click', (e) => {
  if (!e.target.closest('#navLinks'))
    document.querySelectorAll('#navLinks > li.open').forEach(el => el.classList.remove('open'));
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape')
    document.querySelectorAll('#navLinks > li.open').forEach(el => el.classList.remove('open'));
});

// Fade-in on scroll
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      fadeObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.fade-in').forEach((el, i) => {
  el.style.transitionDelay = (i % 3) * 0.08 + 's';
  fadeObserver.observe(el);
});

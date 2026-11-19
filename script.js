/* ============================================
   KAPILA BIKE WORKS — Interactions
============================================ */

// Sticky navbar background on scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => navLinks.classList.remove('open'))
);

// Scroll reveal animations
const revealEls = document.querySelectorAll('.section, .card, .g-item, .review');
revealEls.forEach(el => el.classList.add('reveal'));
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
revealEls.forEach(el => io.observe(el));

// Contact form — send the enquiry through WhatsApp
function handleForm(e) {
  e.preventDefault();

  const form = new FormData(e.target);
  const name = form.get('name').trim();
  const phone = form.get('phone').trim();
  const bike = form.get('bike').trim() || 'Not specified';
  const message = form.get('message').trim();

  const text = [
    'Hello Kapila Bike Works! I would like to make an enquiry.',
    '',
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Bike Model: ${bike}`,
    `Message: ${message}`,
  ].join('\n');

  window.open(`https://wa.me/919133852787?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
  e.target.reset();
}

// Auto year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile Menu Toggle
const toggleMenu = document.getElementById('toggle-menu');
const navLinks = document.querySelector('.nav-links');
const menuOverlay = document.getElementById('menu-overlay');

toggleMenu.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  menuOverlay.classList.toggle('active');
  const icon = toggleMenu.querySelector('i');
  icon.classList.toggle('fa-bars');
  icon.classList.toggle('fa-times');
});

menuOverlay.addEventListener('click', () => {
  navLinks.classList.remove('open');
  menuOverlay.classList.remove('active');
  const icon = toggleMenu.querySelector('i');
  icon.classList.add('fa-bars');
  icon.classList.remove('fa-times');
});

// Close menu on link click
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuOverlay.classList.remove('active');
    const icon = toggleMenu.querySelector('i');
    icon.classList.add('fa-bars');
    icon.classList.remove('fa-times');
  });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Intersection Observer for active nav highlighting
const sections = document.querySelectorAll('section');
const navLinksArray = document.querySelectorAll('.nav-links a');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const id = entry.target.getAttribute('id');
    const correspondingNavLink = document.querySelector(`.nav-links a[href="#${id}"]`);
    if (entry.isIntersecting) {
      navLinksArray.forEach(link => link.classList.remove('active'));
      correspondingNavLink.classList.add('active');
    }
  });
}, { threshold: 0.3 });

sections.forEach(section => observer.observe(section));

// Animate skills on scroll
const skillBoxes = document.querySelectorAll('.skill-category');
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
    }
  });
}, { threshold: 0.1 });

skillBoxes.forEach(box => skillObserver.observe(box));

// Animate project cards
const projectCards = document.querySelectorAll('.project-card');
const projectObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
    }
  });
}, { threshold: 0.2 });

projectCards.forEach(card => projectObserver.observe(card));

// Form submission (basic handling)
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for your message! I\'ll get back to you soon.');
  this.reset();
});
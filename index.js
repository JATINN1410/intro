/* ============================================================
   Jatin Agrawal — Portfolio JavaScript
   Preserved: Theme toggle, back-to-top, IntersectionObserver,
              smooth scrolling, Typed.js hero animation.
   Removed:   consoleText, timer, old typed2 achievements.
   Added:     Mobile hamburger menu, active nav highlighting.
   ============================================================ */

// ---------- Typed.js Hero Animation ----------
var typed = new Typed('#element', {
  strings: [
    'Systems Engineer',
    'AI / ML Enthusiast',
    'M.Tech @ IIIT Delhi',
    'Competitive Programmer'
  ],
  typeSpeed: 50,
  backSpeed: 30,
  backDelay: 1800,
  loop: true,
  showCursor: true,
  cursorChar: '|'
});

// ---------- Theme Toggle ----------
const theme = document.querySelector('#theme');
if (theme) {
  const updateThemeText = () =>
    theme.textContent = document.body.classList.contains('theme-dark') ? '☀ Light Mode' : '☾ Dark Mode';

  // Restore saved preference
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('theme-dark');
  }
  updateThemeText();

  theme.addEventListener('click', () => {
    document.body.classList.toggle('theme-dark');
    localStorage.setItem('theme', document.body.classList.contains('theme-dark') ? 'dark' : 'light');
    updateThemeText();
  });
}

// ---------- Mobile Hamburger Menu ----------
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
  });

  // Close menu when a link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('open');
    });
  });
}

// ---------- Active Nav Highlighting on Scroll ----------
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links li a');

function highlightNav() {
  const scrollY = window.scrollY + 120;
  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');
    if (scrollY >= top && scrollY < top + height) {
      navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === '#' + id) {
          item.classList.add('active');
        }
      });
    }
  });
}
window.addEventListener('scroll', highlightNav, { passive: true });

// ---------- Back-to-Top Button ----------
const backTop = document.createElement('button');
backTop.id = 'backTop';
backTop.title = 'Back to top';
backTop.setAttribute('aria-label', 'Scroll to top');
backTop.innerText = '↑';
document.body.appendChild(backTop);

backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) backTop.classList.add('show');
  else backTop.classList.remove('show');
}, { passive: true });

// ---------- Reveal-on-Scroll Animation ----------
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-up');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll(
  '.hero, .about-section, .skills-section, .education-section, ' +
  '.projects-section, .experience-section, .achievements-section, ' +
  '.contact-section, .project-card, .edu-card, .exp-card, .ach-card, .skill-category'
).forEach(el => revealObserver.observe(el));

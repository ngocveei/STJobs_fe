// === Smooth scroll & highlight nav tab when clicked ===
document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 40,
        behavior: 'smooth'
      });
    }

    document.querySelectorAll('.nav a').forEach(el => el.classList.remove('active'));
    this.classList.add('active');
  });
});

// === Auto highlight nav when scrolling into section ===
const sections = document.querySelectorAll('main section');
const navLinks = document.querySelectorAll('.nav a');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === entry.target.id) {
          link.classList.add('active');
        }
      });
    }
  });
}, { threshold: 0.6 });

sections.forEach(section => observer.observe(section));

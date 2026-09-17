/**
 * AK Personal Brand – Main JS
 */

// Scroll reveal (IntersectionObserver)
document.addEventListener('DOMContentLoaded', function () {
  var obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) e.target.classList.add('v');
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.r').forEach(function (el) {
    obs.observe(el);
  });
});

// Nav scroll effect
window.addEventListener('scroll', function () {
  var nav = document.getElementById('ak-nav');
  if (nav) nav.classList.toggle('scrolled', window.scrollY > 20);
});

// Language toggle
function setLang(l) {
  document.body.classList.toggle('en', l === 'en');
  document.documentElement.lang = l;
  document.querySelectorAll('.lt button').forEach(function (b) {
    b.classList.toggle('active', b.textContent.trim() === l.toUpperCase());
  });
  closeMenu();
}

// Mobile menu
function toggleMenu() {
  document.getElementById('mm').classList.toggle('open');
}

function closeMenu() {
  document.getElementById('mm').classList.remove('open');
}

// Spam-protected mailto — email never appears as plaintext in source
function sendMail() {
  var p = ['info', 'alexanderkolisch', 'com'];
  window.location.href = '\x6d\x61\x69\x6c\x74\x6f\x3a' + p[0] + '\x40' + p[1] + '\x2e' + p[2];
}

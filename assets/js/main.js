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

// Netlify form: inline submit with success message
document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var data = new FormData(form);
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(data).toString()
    }).then(function () {
      document.getElementById('contact-form-wrap').style.display = 'none';
      document.getElementById('contact-success').style.display = 'block';
    }).catch(function () {
      document.getElementById('contact-form-wrap').style.display = 'none';
      document.getElementById('contact-success').style.display = 'block';
    });
  });
});

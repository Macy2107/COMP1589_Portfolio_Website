document.addEventListener('DOMContentLoaded', function () {

  // Mobile nav toggle
  var navToggle = document.getElementById('navToggle');
  var navMenu = document.getElementById('navMenu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function () {
      var isOpen = navMenu.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close menu after tapping a link (mobile)
    navMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navMenu.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Q&A feedback form
  var qaForm = document.getElementById('qaForm');
  if (qaForm) {
    qaForm.addEventListener('submit', function (e) {
      e.preventDefault();
      // Wire this up to your real backend / form service (e.g. Formspree, EmailJS) when ready.
      alert('Thanks for your message! (Hook this form up to a real backend to actually receive it.)');
      qaForm.reset();
    });
  }
});

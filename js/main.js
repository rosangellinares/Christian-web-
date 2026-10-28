document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var header = document.querySelector('.site-header');

  if (toggle && header) {
    toggle.addEventListener('click', function () {
      header.classList.toggle('open');
      var expanded = header.classList.contains('open');
      toggle.setAttribute('aria-expanded', expanded);
    });
  }

  var hero = document.querySelector('.hero, .page-hero');

  if (hero && header) {
    var toggleTransparency = function () {
      header.classList.toggle('at-top', window.scrollY < 50);
    };
    toggleTransparency();
    window.addEventListener('scroll', toggleTransparency, { passive: true });
  }

  var revealTargets = document.querySelectorAll('main > section');

  if (revealTargets.length && 'IntersectionObserver' in window) {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    revealTargets.forEach(function (el) {
      el.classList.add('reveal');
      revealObserver.observe(el);
    });
  }
});

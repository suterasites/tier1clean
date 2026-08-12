(function () {
  'use strict';

  const year = String(new Date().getFullYear());
  ['year', 'poster-year'].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.textContent = year;
  });

  // Hide nav on scroll down, reveal on scroll up
  const navBar = document.querySelector('.site-nav-bar');
  if (navBar) {
    let lastY = window.scrollY;
    let ticking = false;
    const SHOW_THRESHOLD = 80;
    const DELTA = 6;
    const onScroll = () => {
      const y = window.scrollY;
      const goingDown = y > lastY + DELTA;
      const goingUp = y < lastY - DELTA;
      if (y < SHOW_THRESHOLD) {
        navBar.classList.remove('is-hidden');
      } else if (goingDown) {
        navBar.classList.add('is-hidden');
      } else if (goingUp) {
        navBar.classList.remove('is-hidden');
      }
      if (goingDown || goingUp) lastY = y;
      ticking = false;
    };
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(onScroll);
        ticking = true;
      }
    }, { passive: true });
  }

  // Mobile nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const mobileNav = document.getElementById('mobile-menu');

  const setMobileNav = (open) => {
    if (!toggle || !mobileNav) return;
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    mobileNav.hidden = !open;
  };

  if (toggle && mobileNav) {
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') !== 'true';
      setMobileNav(open);
    });
    mobileNav.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', () => setMobileNav(false));
    });
    window.matchMedia('(min-width: 961px)').addEventListener('change', (e) => {
      if (e.matches) setMobileNav(false);
    });
  }

  // Smooth scroll for hash links
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
})();

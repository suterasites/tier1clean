(function () {
  'use strict';

  const year = String(new Date().getFullYear());
  ['year', 'poster-year'].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.textContent = year;
  });

  // Desktop dropdown menus. Hover to open, click to toggle, Escape or an
  // outside click to close. Defined before the scroll handler because that
  // handler closes open panels.
  const navItems = document.querySelectorAll('.nav-item');
  let openItem = null;
  let closeTimer = null;

  const closePanel = (item) => {
    if (!item) return;
    const trigger = item.querySelector('.nav-trigger');
    const panel = item.querySelector('.nav-panel');
    if (trigger) trigger.setAttribute('aria-expanded', 'false');
    if (panel) panel.hidden = true;
    if (openItem === item) openItem = null;
  };

  const openPanel = (item) => {
    if (!item) return;
    if (openItem && openItem !== item) closePanel(openItem);
    const trigger = item.querySelector('.nav-trigger');
    const panel = item.querySelector('.nav-panel');
    if (trigger) trigger.setAttribute('aria-expanded', 'true');
    if (panel) panel.hidden = false;
    openItem = item;
  };

  const closeAllPanels = () => { if (openItem) closePanel(openItem); };

  navItems.forEach((item) => {
    const trigger = item.querySelector('.nav-trigger');
    if (!trigger) return;

    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      if (trigger.getAttribute('aria-expanded') === 'true') closePanel(item);
      else openPanel(item);
    });

    item.addEventListener('mouseenter', () => {
      clearTimeout(closeTimer);
      openPanel(item);
    });
    // short grace period so a diagonal pointer path to the panel does not
    // close it on the way
    item.addEventListener('mouseleave', () => {
      clearTimeout(closeTimer);
      closeTimer = setTimeout(() => closePanel(item), 180);
    });

    item.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', () => closeAllPanels());
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape' || !openItem) return;
    const trigger = openItem.querySelector('.nav-trigger');
    closeAllPanels();
    if (trigger) trigger.focus();
  });
  document.addEventListener('click', (e) => {
    if (openItem && !openItem.contains(e.target)) closeAllPanels();
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
        // an open panel would slide off-screen with the bar and strand focus
        if (!navBar.classList.contains('is-hidden')) closeAllPanels();
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
      setMobileNav(toggle.getAttribute('aria-expanded') !== 'true');
    });
    mobileNav.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', () => setMobileNav(false));
    });
    window.matchMedia('(min-width: 961px)').addEventListener('change', (e) => {
      if (e.matches) setMobileNav(false);
    });
  }

  // Mobile accordion
  document.querySelectorAll('.mobile-sub-trigger').forEach((trigger) => {
    const panelId = trigger.getAttribute('aria-controls');
    const panel = panelId ? document.getElementById(panelId) : null;
    if (!panel) return;
    trigger.addEventListener('click', () => {
      const open = trigger.getAttribute('aria-expanded') !== 'true';
      trigger.setAttribute('aria-expanded', open ? 'true' : 'false');
      panel.hidden = !open;
    });
  });

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

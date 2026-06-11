/* ============================================================
   Soul and Fire Studios — script
   ============================================================ */
(function () {
  'use strict';

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Sticky nav background ---------- */
  const nav = document.getElementById('nav');
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 40);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---------- Mobile menu ---------- */
  const burger = document.getElementById('burger');
  const links = document.getElementById('navLinks');
  const toggleMenu = (open) => {
    const isOpen = open ?? !links.classList.contains('open');
    links.classList.toggle('open', isOpen);
    burger.setAttribute('aria-expanded', String(isOpen));
    burger.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
  };
  burger.addEventListener('click', () => toggleMenu());
  links.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => toggleMenu(false)));

  /* ---------- Reveal on scroll ---------- */
  const revealEls = document.querySelectorAll(
    '.section__head, .about__lead, .value, .game, .member, .post, .contact__inner'
  );
  revealEls.forEach((el) => el.classList.add('reveal'));

  if ('IntersectionObserver' in window && !prefersReduced) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.style.transitionDelay = (e.target.dataset.delay || '0') + 'ms';
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    // small stagger within each group
    document.querySelectorAll('.about__values, .games__grid, .team__grid, .news__grid').forEach((grid) => {
      [...grid.children].forEach((child, i) => (child.dataset.delay = i * 80));
    });
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('in'));
  }

  /* ---------- Animated counters ---------- */
  const counters = document.querySelectorAll('[data-count]');
  const runCount = (el) => {
    const target = +el.dataset.count;
    const dur = 1400;
    const start = performance.now();
    const step = (now) => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(eased * target) + (target >= 40 ? '+' : '');
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  if ('IntersectionObserver' in window && !prefersReduced) {
    const co = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { runCount(e.target); co.unobserve(e.target); }
      }),
      { threshold: 0.6 }
    );
    counters.forEach((c) => co.observe(c));
  } else {
    counters.forEach((c) => (c.textContent = c.dataset.count + (+c.dataset.count >= 40 ? '+' : '')));
  }

  /* ---------- Contact form (front-end only) ---------- */
  const form = document.getElementById('contactForm');
  const note = document.getElementById('formNote');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();
      const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

      if (!name || !validEmail || !message) {
        note.textContent = 'Revisa los campos: nombre, un email válido y un mensaje.';
        note.className = 'contact__note err';
        return;
      }
      // No backend yet — show success and (optionally) hand off to a mail client.
      note.textContent = `¡Gracias, ${name}! Hemos recibido tu mensaje. Te responderemos pronto. 🔥`;
      note.className = 'contact__note ok';
      form.reset();
    });
  }

  /* ---------- Footer year ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Ember particles ---------- */
  const canvas = document.getElementById('embers');
  if (canvas && !prefersReduced) {
    const ctx = canvas.getContext('2d');
    let w, h, embers, raf;
    const COLORS = ['#ff6b35', '#ff9e1b', '#ffce54', '#9b5de5'];

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    const make = () => ({
      x: Math.random() * w,
      y: h + Math.random() * h,
      r: Math.random() * 2 + 0.6,
      vy: Math.random() * 0.6 + 0.2,
      vx: (Math.random() - 0.5) * 0.4,
      a: Math.random() * 0.5 + 0.2,
      c: COLORS[(Math.random() * COLORS.length) | 0],
      tw: Math.random() * Math.PI * 2,
    });
    const init = () => {
      resize();
      const count = Math.min(70, Math.floor(w / 22));
      embers = Array.from({ length: count }, make);
    };
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (const e of embers) {
        e.y -= e.vy;
        e.x += e.vx + Math.sin(e.tw) * 0.3;
        e.tw += 0.02;
        if (e.y < -10) Object.assign(e, make(), { y: h + 10 });
        ctx.globalAlpha = e.a * (0.6 + 0.4 * Math.sin(e.tw));
        ctx.fillStyle = e.c;
        ctx.shadowBlur = 8;
        ctx.shadowColor = e.c;
        ctx.beginPath();
        ctx.arc(e.x, e.y, e.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;
      raf = requestAnimationFrame(draw);
    };
    init();
    draw();
    let t;
    window.addEventListener('resize', () => {
      clearTimeout(t);
      t = setTimeout(init, 200);
    });
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) cancelAnimationFrame(raf);
      else raf = requestAnimationFrame(draw);
    });
  }
})();

/* ============================================================
   Soul and Fire Studios — script
   ============================================================ */
(function () {
  'use strict';

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];

  /* ---------- Sticky nav ---------- */
  const nav = $('#nav');
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 40);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---------- Mobile menu ---------- */
  const burger = $('#burger');
  const links = $('#navLinks');
  const toggleMenu = (open) => {
    const isOpen = open ?? !links.classList.contains('open');
    links.classList.toggle('open', isOpen);
    burger.setAttribute('aria-expanded', String(isOpen));
    burger.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
  };
  burger.addEventListener('click', () => toggleMenu());
  $$('a', links).forEach((a) => a.addEventListener('click', () => toggleMenu(false)));

  /* ---------- Hero carousel ---------- */
  const slides = $$('.slide');
  const track = $('#heroTrack');
  const dotsWrap = $('#heroDots');
  // Solo arranca el carrusel si está visible (no cuando .hero está oculto)
  if (slides.length && track && track.offsetParent !== null) {
    let idx = 0;
    let timer = null;
    const DELAY = 6500;

    // build dots
    slides.forEach((_, i) => {
      const b = document.createElement('button');
      b.setAttribute('role', 'tab');
      b.setAttribute('aria-label', 'Juego ' + (i + 1));
      b.addEventListener('click', () => go(i, true));
      dotsWrap.appendChild(b);
    });
    const dots = $$('button', dotsWrap);

    function render() {
      slides.forEach((s, i) => s.classList.toggle('is-active', i === idx));
      dots.forEach((d, i) => d.setAttribute('aria-selected', String(i === idx)));
      const accent = slides[idx].dataset.accent;
      if (accent) document.documentElement.style.setProperty('--fire', accent);
    }
    function go(n, manual) {
      idx = (n + slides.length) % slides.length;
      render();
      if (manual) restart();
    }
    const next = () => go(idx + 1);
    const prev = () => go(idx - 1);
    function start() { if (!prefersReduced) timer = setInterval(next, DELAY); }
    function stop() { clearInterval(timer); }
    function restart() { stop(); start(); }

    $('#heroNext').addEventListener('click', () => go(idx + 1, true));
    $('#heroPrev').addEventListener('click', () => go(idx - 1, true));
    track.addEventListener('mouseenter', stop);
    track.addEventListener('mouseleave', start);

    // keyboard
    document.addEventListener('keydown', (e) => {
      if ($('#trailerModal').classList.contains('open')) return;
      if (e.key === 'ArrowRight') go(idx + 1, true);
      if (e.key === 'ArrowLeft') go(idx - 1, true);
    });

    // swipe
    let x0 = null;
    track.addEventListener('touchstart', (e) => (x0 = e.touches[0].clientX), { passive: true });
    track.addEventListener('touchend', (e) => {
      if (x0 === null) return;
      const dx = e.changedTouches[0].clientX - x0;
      if (Math.abs(dx) > 50) (dx < 0 ? next : prev)(), restart();
      x0 = null;
    });

    // The accent var is shared with embers; reset on first paint
    render();
    start();
  }

  /* ---------- Trailer modal ---------- */
  const modal = $('#trailerModal');
  const modalVideo = $('#modalVideo');
  // Map a game title to a YouTube ID here when you have a real trailer:
  const TRAILERS = { /* 'Emberfall': 'dQw4w9WgXcQ' */ };
  let lastFocused = null;

  function openTrailer(title) {
    lastFocused = document.activeElement;
    const id = TRAILERS[title];
    modalVideo.innerHTML = id
      ? `<iframe src="https://www.youtube.com/embed/${id}?autoplay=1" title="Tráiler de ${title}" allow="autoplay; encrypted-media" allowfullscreen></iframe>`
      : `<div class="modal__poster"><div class="play">▶</div><h3>${title}</h3><p>Tráiler próximamente. ¡Suscríbete para no perdértelo!</p></div>`;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    $('.modal__close', modal).focus();
  }
  function closeTrailer() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    modalVideo.innerHTML = '';
    document.body.style.overflow = '';
    if (lastFocused) lastFocused.focus();
  }
  $$('[data-trailer]').forEach((b) => b.addEventListener('click', () => openTrailer(b.dataset.trailer)));
  $$('[data-close]', modal).forEach((el) => el.addEventListener('click', closeTrailer));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) closeTrailer();
  });

  /* ---------- Reveal on scroll ---------- */
  const revealEls = $$('.section__head, .game, .post, .job, .member, .spotlight__art, .spotlight__body, .newsletter__inner, .contact__inner, .strip__lead, .strip__stats');
  revealEls.forEach((el) => el.classList.add('reveal'));
  if ('IntersectionObserver' in window && !prefersReduced) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.style.transitionDelay = (e.target.dataset.delay || '0') + 'ms';
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    $$('.games__grid, .news__grid, .careers__grid, .team__grid').forEach((grid) =>
      [...grid.children].forEach((c, i) => (c.dataset.delay = i * 80))
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('in'));
  }

  /* ---------- Animated counters ---------- */
  const counters = $$('[data-count]');
  const runCount = (el) => {
    const target = +el.dataset.count;
    const dur = 1400, start = performance.now();
    const step = (now) => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(eased * target) + (target >= 40 ? '+' : '');
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  if ('IntersectionObserver' in window && !prefersReduced) {
    const co = new IntersectionObserver((entries) => entries.forEach((e) => {
      if (e.isIntersecting) { runCount(e.target); co.unobserve(e.target); }
    }), { threshold: 0.6 });
    counters.forEach((c) => co.observe(c));
  } else {
    counters.forEach((c) => (c.textContent = c.dataset.count + (+c.dataset.count >= 40 ? '+' : '')));
  }

  /* ---------- Forms (front-end only) ---------- */
  const validEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

  const cForm = $('#contactForm'), cNote = $('#formNote');
  if (cForm) {
    cForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = cForm.name.value.trim();
      if (!name || !validEmail(cForm.email.value.trim()) || !cForm.message.value.trim()) {
        cNote.textContent = 'Revisa los campos: nombre, un email válido y un mensaje.';
        cNote.className = 'contact__note err';
        return;
      }
      cNote.textContent = `¡Gracias, ${name}! Hemos recibido tu mensaje. Te responderemos pronto. 🔥`;
      cNote.className = 'contact__note ok';
      cForm.reset();
    });
  }

  /* ---------- Footer year ---------- */
  const yearEl = $('#year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Ember particles ---------- */
  const canvas = $('#embers');
  if (canvas && !prefersReduced) {
    const ctx = canvas.getContext('2d');
    let w, h, embers, raf;
    const COLORS = ['#ef5a23', '#f26b1f', '#f9a826', '#ffd24a'];
    const resize = () => { w = canvas.width = innerWidth; h = canvas.height = innerHeight; };
    const make = () => ({
      x: Math.random() * w, y: h + Math.random() * h,
      r: Math.random() * 2 + 0.6, vy: Math.random() * 0.6 + 0.2,
      vx: (Math.random() - 0.5) * 0.4, a: Math.random() * 0.5 + 0.2,
      c: COLORS[(Math.random() * COLORS.length) | 0], tw: Math.random() * Math.PI * 2,
    });
    const init = () => { resize(); embers = Array.from({ length: Math.min(70, Math.floor(w / 22)) }, make); };
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (const e of embers) {
        e.y -= e.vy; e.x += e.vx + Math.sin(e.tw) * 0.3; e.tw += 0.02;
        if (e.y < -10) Object.assign(e, make(), { y: h + 10 });
        ctx.globalAlpha = e.a * (0.6 + 0.4 * Math.sin(e.tw));
        ctx.fillStyle = e.c; ctx.shadowBlur = 8; ctx.shadowColor = e.c;
        ctx.beginPath(); ctx.arc(e.x, e.y, e.r, 0, Math.PI * 2); ctx.fill();
      }
      ctx.globalAlpha = 1; ctx.shadowBlur = 0;
      raf = requestAnimationFrame(draw);
    };
    init(); draw();
    let t;
    addEventListener('resize', () => { clearTimeout(t); t = setTimeout(init, 200); });
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) cancelAnimationFrame(raf); else raf = requestAnimationFrame(draw);
    });
  }
})();

/* ============================================================
   KAIROS Skills — main.js
   Vanilla JS. Sin librerías externas.
============================================================ */

(function () {
  'use strict';

  /* ============================================================
     1. Custom Cursor
     Punto sigue el mouse directo.
     Anillo sigue con lerp (lag suave).
  ============================================================ */
  const dot  = document.querySelector('.cursor-dot');
  const ring = document.querySelector('.cursor-ring');

  if (!dot || !ring) return;

  let mouseX = window.innerWidth  / 2;
  let mouseY = window.innerHeight / 2;
  let ringX  = mouseX;
  let ringY  = mouseY;

  const LERP = 0.10; // cuánto avanza el anillo hacia el cursor por frame (0-1)

  // Punto: sigue el cursor de forma inmediata
  document.addEventListener('mousemove', function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.left = mouseX + 'px';
    dot.style.top  = mouseY + 'px';
  });

  // Anillo: animación suave con requestAnimationFrame + lerp
  function animateRing() {
    ringX += (mouseX - ringX) * LERP;
    ringY += (mouseY - ringY) * LERP;
    ring.style.left = ringX + 'px';
    ring.style.top  = ringY + 'px';
    requestAnimationFrame(animateRing);
  }
  animateRing();

  // Agrandar anillo en hover de links, botones y details
  var hoverTargets = document.querySelectorAll('a, button, .btn, details summary');

  hoverTargets.forEach(function (el) {
    el.addEventListener('mouseenter', function () {
      ring.classList.add('hover');
    });
    el.addEventListener('mouseleave', function () {
      ring.classList.remove('hover');
    });
  });

  // Ocultar cursor al salir de la ventana
  document.addEventListener('mouseleave', function () {
    dot.style.opacity  = '0';
    ring.style.opacity = '0';
  });

  document.addEventListener('mouseenter', function () {
    dot.style.opacity  = '1';
    ring.style.opacity = '1';
  });

  /* ============================================================
     2. Header fijo — clase .scrolled al superar 60px de scroll
  ============================================================ */
  const header = document.getElementById('site-header');
  if (header) {
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 60);
    });
  }

  /* ============================================================
     3. Scroll Reveal — IntersectionObserver
        Agrega clase .on a todos los .rv cuando entran al viewport
  ============================================================ */
  var revealEls = document.querySelectorAll('.rv');

  if ('IntersectionObserver' in window) {
    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('on');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    revealEls.forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    // Fallback para navegadores sin IntersectionObserver
    revealEls.forEach(function (el) {
      el.classList.add('on');
    });
  }


  /* ============================================================
     4. Meta Pixel — eventos de conversión
  ============================================================ */

  // Lead: clic en cualquier botón CTA ("Empezá Tu Transformación")
  document.querySelectorAll('.btn-cta').forEach(function (btn) {
    btn.addEventListener('click', function () {
      if (typeof fbq === 'function') {
        fbq('track', 'Lead');
      }
    });
  });

  // Schedule: manejado directamente por el callback Cal("on", { action: "bookingSuccessful" })
  // en el embed de cal.com dentro del HTML.

  /* ============================================================
     5. Vimeo VSL — tracking de reproducción para Meta Pixel
        Eventos: VideoPlay, Video25, Video50, Video75, VideoComplete
  ============================================================ */
  var vslIframe = document.getElementById('vsl-player');

  if (vslIframe && typeof Vimeo !== 'undefined') {
    var vslPlayer = new Vimeo.Player(vslIframe);
    var videoMilestones = { 25: false, 50: false, 75: false };

    vslPlayer.on('play', function () {
      if (typeof fbq === 'function') {
        fbq('trackCustom', 'VideoPlay', { video: 'VSL_KAIROS' });
      }
    });

    vslPlayer.on('timeupdate', function (data) {
      var pct = Math.floor(data.percent * 100);
      [25, 50, 75].forEach(function (milestone) {
        if (pct >= milestone && !videoMilestones[milestone]) {
          videoMilestones[milestone] = true;
          if (typeof fbq === 'function') {
            fbq('trackCustom', 'Video' + milestone, { video: 'VSL_KAIROS' });
          }
        }
      });
    });

    vslPlayer.on('ended', function () {
      if (typeof fbq === 'function') {
        fbq('trackCustom', 'VideoComplete', { video: 'VSL_KAIROS' });
      }
    });
  }

})();

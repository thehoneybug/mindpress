(function () {

  // ── Cursor spotlight ──────────────────────────────────────────────────────
  const spotlight = document.createElement('div');
  Object.assign(spotlight.style, {
    position: 'fixed', inset: '0', pointerEvents: 'none', zIndex: '9998',
    background: 'radial-gradient(650px circle at var(--mx,50%) var(--my,-20%), rgba(16,185,129,0.07), transparent 55%)'
  });
  document.body.appendChild(spotlight);

  let raf;
  document.addEventListener('mousemove', e => {
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(() => {
      document.documentElement.style.setProperty('--mx', e.clientX + 'px');
      document.documentElement.style.setProperty('--my', e.clientY + 'px');
    });
  });

  // ── Text scramble ─────────────────────────────────────────────────────────
  const CHARS = '01アイウエオ!<>[]{}=+*#abcdefghijklmnopqrstuvwxyz';

  function scramble(el) {
    const final = el.textContent;
    const len = final.length;
    // resolve each character over ~3 frames → full word in ~(len*3+15) frames ≈ 0.6s
    const totalFrames = len * 3 + 15;
    let frame = 0;

    const tick = () => {
      let out = '';
      const resolved = Math.floor(frame / 3);
      for (let i = 0; i < len; i++) {
        if (i < resolved) {
          out += final[i];
        } else {
          out += CHARS[Math.floor(Math.random() * CHARS.length)];
        }
      }
      el.textContent = out;
      if (++frame < totalFrames) requestAnimationFrame(tick);
      else el.textContent = final;
    };

    // short delay so the page paints first
    setTimeout(() => requestAnimationFrame(tick), 120);
  }

  document.querySelectorAll('[data-scramble]').forEach(scramble);

})();

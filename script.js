(() => {
  const slides = [...document.querySelectorAll('[data-slide]')];
  const dots = [...document.querySelectorAll('[data-dot]')];
  const motion = document.querySelector('[data-motion]');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  let current = 0, paused = reduced.matches;
  let edits = {};
  try { edits = JSON.parse(localStorage.getItem('arley-hero-edits') || '{}'); } catch {}
  document.documentElement.dataset.logo = 'signature';
  const names = ['playground','fire-department','library','elementary'];
  const baked = {playground:{start:17,end:27},'fire-department':{start:1,end:8},library:{start:1,end:8},elementary:{start:18,end:23}};
  slides.forEach((slide,i) => { const v=slide.querySelector('video'), trim=edits[names[i]], base=baked[names[i]]; if(trim && (trim.start !== base.start || trim.end !== base.end)) { v.dataset.src=`assets/web/${names[i]}-preview.mp4`; v.dataset.start=trim.start; v.dataset.end=trim.end; } });
  function updateMotion() {
    motion.textContent = paused ? 'Play video' : 'Pause video';
    motion.setAttribute('aria-pressed', String(paused));
    const video = slides[current].querySelector('video');
    if (paused || document.hidden) video.pause();
    else video.play().catch(() => { paused = true; updateMotion(); });
  }
  function show(index) {
    current = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => {
      const active = i === current, video = slide.querySelector('video');
      slide.classList.toggle('is-active', active);
      slide.setAttribute('aria-hidden', String(!active));
      if (!active) video.pause();
      else { if (!video.getAttribute('src')) video.src = video.dataset.src; video.currentTime = Number(video.dataset.start || 0); video.playbackRate = 0.65; }
    });
    dots.forEach((dot, i) => { dot.classList.toggle('is-active', i === current); dot.setAttribute('aria-pressed', String(i === current)); });
    document.querySelector('[data-location]').textContent = slides[current].dataset.caption;
    updateMotion();
  }
  slides.forEach(slide => {
    const v=slide.querySelector('video');
    v.addEventListener('ended', () => { if (!paused) show(current + 1); });
    v.addEventListener('timeupdate', () => { if (!paused && v.dataset.end && v.currentTime >= Number(v.dataset.end)) show(current + 1); });
  });
  document.querySelector('[data-prev]').addEventListener('click', () => show(current - 1));
  document.querySelector('[data-next]').addEventListener('click', () => show(current + 1));
  dots.forEach((dot, i) => dot.addEventListener('click', () => show(i)));
  motion.addEventListener('click', () => { paused = !paused; updateMotion(); });
  document.addEventListener('visibilitychange', updateMotion);
  reduced.addEventListener('change', () => { paused = reduced.matches; updateMotion(); });
  const menu = document.querySelector('[data-menu-button]');
  const nav = document.querySelector('.nav-wrap');
  function closeMenu() { menu.setAttribute('aria-expanded', 'false'); menu.setAttribute('aria-label', 'Open navigation'); nav.classList.remove('is-open'); }
  menu.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') !== 'true'; menu.setAttribute('aria-expanded', String(open)); menu.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation'); nav.classList.toggle('is-open', open); });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
  const work = document.querySelector('.work-grid');
  document.querySelector('[data-work-prev]').addEventListener('click', () => work.scrollBy({left: -work.clientWidth * .9, behavior: reduced.matches ? 'instant' : 'smooth'}));
  document.querySelector('[data-work-next]').addEventListener('click', () => work.scrollBy({left: work.clientWidth * .9, behavior: reduced.matches ? 'instant' : 'smooth'}));
  const join = document.querySelector('.join-strip');
  if (!reduced.matches && 'IntersectionObserver' in window) {
    join.classList.add('will-reveal');
    const observer = new IntersectionObserver(entries => { if (entries[0].isIntersecting) { join.classList.add('is-revealed'); observer.disconnect(); } }, {threshold: .15});
    observer.observe(join);
  }
  show(0);
})();

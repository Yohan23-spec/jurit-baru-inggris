(() => {
  const config = window.SITE_CONFIG;
  const fill = (selector, value) => document.querySelectorAll(selector).forEach((el) => { el.textContent = value; });
  fill('[data-brand]', config.brandName);
  fill('[data-address]', config.address);
  fill('[data-hours]', config.hours);

  document.querySelectorAll('[data-wa-message]').forEach((link) => {
    const message = link.dataset.waMessage;
    link.href = `https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(message)}`;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
  });

  const header = document.querySelector('.site-header');
  const navToggle = document.querySelector('.nav__toggle');
  const navLinks = document.querySelector('.nav__links');
  const closeMenu = () => {
    navToggle?.setAttribute('aria-expanded', 'false');
    navLinks?.classList.remove('is-open');
    header?.classList.remove('is-open');
    document.body.classList.remove('menu-open');
  };
  navToggle?.addEventListener('click', () => {
    const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!isOpen));
    navLinks.classList.toggle('is-open', !isOpen);
    header.classList.toggle('is-open', !isOpen);
    document.body.classList.toggle('menu-open', !isOpen);
  });
  navLinks?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
  window.addEventListener('scroll', () => header?.classList.toggle('is-scrolled', window.scrollY > 12), { passive: true });

  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    }), { threshold: .12 });
    reveals.forEach((item) => observer.observe(item));
  } else reveals.forEach((item) => item.classList.add('is-visible'));

  const lightbox = document.querySelector('.lightbox');
  const lightboxImage = lightbox?.querySelector('img');
  const closeLightbox = () => {
    lightbox?.classList.remove('is-active');
    document.body.classList.remove('lightbox-open');
  };
  document.querySelectorAll('[data-lightbox]').forEach((button) => button.addEventListener('click', () => {
    const image = button.querySelector('img');
    lightboxImage.src = image.currentSrc || image.src;
    lightboxImage.alt = image.alt;
    lightbox.classList.add('is-active');
    document.body.classList.add('lightbox-open');
    lightbox.querySelector('button').focus();
  }));
  lightbox?.addEventListener('click', (event) => { if (event.target === lightbox) closeLightbox(); });
  lightbox?.querySelector('button').addEventListener('click', closeLightbox);
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape') { closeMenu(); closeLightbox(); } });
})();

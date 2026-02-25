/**
 * Zach's Computer Services — Main JS
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ---- Sticky Header Shadow ---- */
  const header = document.querySelector('.site-header');
  if (header) {
    const onScroll = () => {
      header.classList.toggle('scrolled', window.scrollY > 10);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ---- Mobile Menu ---- */
  const toggle = document.querySelector('.menu-toggle');
  const navWrap = document.querySelector('.nav-wrapper');
  if (toggle && navWrap) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('active');
      navWrap.classList.toggle('open');
      document.body.style.overflow = navWrap.classList.contains('open') ? 'hidden' : '';
    });
    navWrap.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        toggle.classList.remove('active');
        navWrap.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  /* ---- FAQ Accordion ---- */
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });

  /* ---- FAQ Filter ---- */
  document.querySelectorAll('.faq-filter').forEach(filter => {
    filter.addEventListener('click', () => {
      document.querySelectorAll('.faq-filter').forEach(f => f.classList.remove('active'));
      filter.classList.add('active');
      const category = filter.dataset.category;
      document.querySelectorAll('.faq-item').forEach(item => {
        item.style.display = (category === 'all' || item.dataset.category === category) ? '' : 'none';
      });
    });
  });

  /* ---- FAQ Search ---- */
  const faqSearch = document.querySelector('.faq-search input');
  if (faqSearch) {
    faqSearch.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase();
      document.querySelectorAll('.faq-item').forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(query) ? '' : 'none';
      });
    });
  }

  /* ---- Contact Form (AJAX) ---- */
  const contactForm = document.querySelector('#zcs-contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const msgEl = contactForm.querySelector('.form-message');
      const originalText = submitBtn.textContent;

      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';

      const formData = new FormData(contactForm);
      formData.append('action', 'zcs_contact');
      formData.append('nonce', typeof zcsAjax !== 'undefined' ? zcsAjax.nonce : '');

      try {
        const resp = await fetch(typeof zcsAjax !== 'undefined' ? zcsAjax.ajaxurl : '/wp-admin/admin-ajax.php', {
          method: 'POST',
          body: formData
        });
        const data = await resp.json();

        msgEl.className = 'form-message success';
        msgEl.textContent = data.data?.message || 'Thank you! We\'ll be in touch shortly.';
        msgEl.style.display = 'block';
        contactForm.reset();
      } catch {
        msgEl.className = 'form-message success';
        msgEl.textContent = 'Thank you for your message! We\'ll be in touch shortly.';
        msgEl.style.display = 'block';
      }

      submitBtn.disabled = false;
      submitBtn.textContent = originalText;

      setTimeout(() => { msgEl.style.display = 'none'; }, 8000);
    });
  }

  /* ---- Scroll Animations ---- */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

  /* ---- Scroll to Top ---- */
  const scrollBtn = document.querySelector('.scroll-top');
  if (scrollBtn) {
    window.addEventListener('scroll', () => {
      scrollBtn.classList.toggle('visible', window.scrollY > 400);
    }, { passive: true });
    scrollBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ---- Dark Mode Toggle ---- */
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const html = document.documentElement;
      const isDark = html.getAttribute('data-theme') === 'dark';
      const next = isDark ? 'light' : 'dark';
      html.setAttribute('data-theme', next);
      localStorage.setItem('zcs-theme', next);
    });
  }

  /* ---- Smooth scroll for anchor links ---- */
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});

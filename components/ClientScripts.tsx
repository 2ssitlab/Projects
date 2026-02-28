'use client';

import { useEffect } from 'react';

export default function ClientScripts() {
  useEffect(() => {
    const header = document.querySelector('.site-header');
    if (header) {
      const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 60);
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
    }

    const toggle = document.querySelector('.menu-toggle');
    const navWrap = document.querySelector('.nav-wrapper');
    if (toggle && navWrap) {
      const open = () => {
        toggle.classList.toggle('active');
        navWrap.classList.toggle('open');
        document.body.style.overflow = navWrap.classList.contains('open') ? 'hidden' : '';
      };
      toggle.addEventListener('click', open);
      navWrap.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
          toggle.classList.remove('active');
          navWrap.classList.remove('open');
          document.body.style.overflow = '';
        });
      });
    }

    document.querySelectorAll('.faq-question').forEach((btn) => {
      btn.addEventListener('click', () => {
        const item = btn.closest('.faq-item');
        if (!item) return;
        const isOpen = item.classList.contains('open');
        document.querySelectorAll('.faq-item.open').forEach((i) => i.classList.remove('open'));
        if (!isOpen) item.classList.add('open');
      });
    });

    document.querySelectorAll('.faq-filter').forEach((filter) => {
      filter.addEventListener('click', () => {
        document.querySelectorAll('.faq-filter').forEach((f) => f.classList.remove('active'));
        filter.classList.add('active');
        const category = (filter as HTMLElement).dataset.category;
        document.querySelectorAll('.faq-item').forEach((item) => {
          (item as HTMLElement).style.display =
            category === 'all' || (item as HTMLElement).dataset.category === category ? '' : 'none';
        });
      });
    });

    const faqSearch = document.querySelector('.faq-search input');
    if (faqSearch) {
      faqSearch.addEventListener('input', (e) => {
        const query = (e.target as HTMLInputElement).value.toLowerCase();
        document.querySelectorAll('.faq-item').forEach((item) => {
          (item as HTMLElement).style.display = item.textContent?.toLowerCase().includes(query) ? '' : 'none';
        });
      });
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));

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

    document.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href && href !== '#') {
          const target = document.querySelector(href);
          if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      });
    });
  }, []);

  return null;
}

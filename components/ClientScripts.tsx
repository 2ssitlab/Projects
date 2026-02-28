'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export default function ClientScripts() {
  const pathname = usePathname();
  const observerRef = useRef<IntersectionObserver | null>(null);
  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    const signal = (abortRef.current = new AbortController()).signal;

    const header = document.querySelector('.site-header');
    let scrollCleanup: (() => void) | undefined;
    if (header) {
      const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 60);
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
      scrollCleanup = () => window.removeEventListener('scroll', onScroll);
    }

    const toggle = document.querySelector('.menu-toggle');
    const navWrap = document.querySelector('.nav-wrapper');
    if (toggle && navWrap) {
      const open = () => {
        toggle.classList.toggle('active');
        navWrap.classList.toggle('open');
        document.body.style.overflow = navWrap.classList.contains('open') ? 'hidden' : '';
      };
      toggle.addEventListener('click', open, { signal });
      navWrap.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
          toggle.classList.remove('active');
          navWrap.classList.remove('open');
          document.body.style.overflow = '';
        }, { signal });
      });
    }

    document.querySelectorAll('.faq-question').forEach((btn) => {
      btn.addEventListener('click', () => {
        const item = btn.closest('.faq-item');
        if (!item) return;
        const isOpen = item.classList.contains('open');
        document.querySelectorAll('.faq-item.open').forEach((i) => i.classList.remove('open'));
        if (!isOpen) item.classList.add('open');
      }, { signal });
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
      }, { signal });
    });

    const faqSearch = document.querySelector('.faq-search input');
    if (faqSearch) {
      faqSearch.addEventListener('input', (e) => {
        const query = (e.target as HTMLInputElement).value.toLowerCase();
        document.querySelectorAll('.faq-item').forEach((item) => {
          (item as HTMLElement).style.display = item.textContent?.toLowerCase().includes(query) ? '' : 'none';
        });
      }, { signal });
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
    observerRef.current = observer;
    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));

    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
      themeToggle.addEventListener('click', () => {
        const html = document.documentElement;
        const isDark = html.getAttribute('data-theme') === 'dark';
        const next = isDark ? 'light' : 'dark';
        html.setAttribute('data-theme', next);
        localStorage.setItem('zcs-theme', next);
      }, { signal });
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
      }, { signal });
    });

    return () => {
      scrollCleanup?.();
      abortRef.current?.abort();
      observerRef.current?.disconnect();
      observerRef.current = null;
    };
  }, [pathname]);

  return null;
}

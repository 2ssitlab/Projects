'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export default function ClientScripts() {
  const pathname = usePathname();
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
    };
  }, [pathname]);

  return null;
}

'use client';

import { useEffect } from 'react';

export default function ScrollTop() {
  useEffect(() => {
    const btn = document.querySelector('.scroll-top');
    if (!btn) return;
    const onScroll = () => btn.classList.toggle('visible', window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    const onClick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
    btn.addEventListener('click', onClick);
    return () => {
      window.removeEventListener('scroll', onScroll);
      btn.removeEventListener('click', onClick);
    };
  }, []);

  return (
    <button className="scroll-top" aria-label="Scroll to top">
      <i className="ph-bold ph-caret-up"></i>
    </button>
  );
}

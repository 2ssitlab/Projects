'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const LOGO_SRC = "https://i0.wp.com/zachscomputerservices.com/wp-content/uploads/2025/06/cropped-Zach-Computer-Services-Transparent-512x512-2.webp?w=800&ssl=1";

const nav = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className="site-header" role="banner">
      <div className="container">
        <div className="header-inner">
          <Link href="/" className="site-logo" aria-label="Home">
            <img src={LOGO_SRC} alt="Zach's Computer Services" className="site-logo-img" />
          </Link>

          <button
            type="button"
            className={`menu-toggle ${menuOpen ? 'active' : ''}`}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span></span><span></span><span></span>
          </button>

          <div className={`nav-wrapper ${menuOpen ? 'open' : ''}`}>
            <nav className="nav-primary" role="navigation">
              {nav.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={pathname === href || (href !== '/' && pathname.startsWith(href)) ? 'active' : ''}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </Link>
              ))}
            </nav>

            <div className="header-actions">
              <a href="tel:+18134732334" className="header-phone" onClick={() => setMenuOpen(false)}>
                <i className="ph-bold ph-phone"></i>
                (813) 473-2334
              </a>
              <button type="button" className="theme-toggle" id="theme-toggle" aria-label="Toggle dark mode">
                <i className="ph-bold ph-moon icon-moon"></i>
                <i className="ph-bold ph-sun icon-sun"></i>
              </button>
              <Link href="/contact" className="btn btn--primary btn--sm" onClick={() => setMenuOpen(false)}>Get a Quote</Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

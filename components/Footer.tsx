'use client';

import Link from 'next/link';

const LOGO_SRC = "https://i0.wp.com/zachscomputerservices.com/wp-content/uploads/2025/06/cropped-Zach-Computer-Services-Transparent-512x512-2.webp?w=800&ssl=1";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="footer-logo-link">
              <img src={LOGO_SRC} alt="Zach's Computer Services" className="footer-logo-img" />
            </Link>
            <p>Trusted leaders in professional computer repair and IT consulting. Serving the Tampa Bay area with fast, friendly, and affordable technology solutions.</p>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/services">Our Services</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><Link href="/services">Computer Repair</Link></li>
              <li><Link href="/services">Virus Removal</Link></li>
              <li><Link href="/services">Network Setup</Link></li>
              <li><Link href="/services">Data Recovery</Link></li>
              <li><Link href="/services">Remote Support</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Reach Out</h4>
            <div className="footer-contact-item">
              <i className="ph-bold ph-phone"></i>
              <a href="tel:+18134732334">(813) 473-2334</a>
            </div>
            <div className="footer-contact-item">
              <i className="ph-bold ph-envelope"></i>
              <a href="mailto:contact@zachscomputerservices.com">contact@zachscomputerservices.com</a>
            </div>
            <div className="footer-contact-item">
              <i className="ph-bold ph-clock"></i>
              <span>Mon–Fri: 8:00 AM – 6:00 PM ET</span>
            </div>
            <div className="footer-contact-item">
              <i className="ph-bold ph-map-pin"></i>
              <span>Tampa Bay Area, FL</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {year} Zach&apos;s Computer Services. All rights reserved.</p>
          <p>
            <Link href="/privacy-policy">Privacy Policy</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

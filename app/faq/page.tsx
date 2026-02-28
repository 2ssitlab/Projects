'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

const FAQ_ITEMS: { category: string; question: string; answer: string }[] = [
  { category: 'general', question: 'What computer repair and IT services do you offer?', answer: 'We offer a full range of IT services including PC and Mac hardware repair, virus and malware removal, network setup and troubleshooting, data recovery, cloud backup solutions, software installation, system optimization, and 24/7 remote and on-site technical support.' },
  { category: 'repairs', question: 'Do you repair both Windows PCs and Apple Macs?', answer: 'Yes! We service both Windows PCs and Apple Mac computers. Our technicians are certified and experienced with both platforms, including desktops, laptops, and all-in-one systems.' },
  { category: 'remote', question: 'Is remote computer support available and secure?', answer: 'Absolutely. Our remote support uses industry-standard encrypted connections to ensure your data remains secure. We can diagnose and fix most software issues, remove viruses, install programs, and troubleshoot problems — all remotely. No house call needed.' },
  { category: 'general', question: 'How quickly will you respond?', answer: 'We typically respond within 30 minutes during business hours (Monday–Friday, 8 AM – 6 PM ET). For emergencies, we offer 24/7 support — just call and follow the emergency prompts.' },
  { category: 'repairs', question: 'How long do computer repairs take?', answer: 'Most standard repairs are completed same-day. More complex issues like data recovery or hardware replacement may take 1–3 business days. We\'ll always give you a clear timeline upfront before starting work.' },
  { category: 'pricing', question: 'How much do your services cost?', answer: 'Pricing varies by service and complexity. We provide free estimates and transparent quotes before any work begins — no surprises, no hidden fees. Contact us to describe your issue and we\'ll give you a clear price.' },
  { category: 'pricing', question: 'Do you charge for diagnostics?', answer: 'We offer free initial consultations and estimates. If in-depth diagnostics are required (e.g., hardware testing), we\'ll let you know the cost upfront and apply it toward the repair if you proceed.' },
  { category: 'privacy', question: 'Is my data safe during repairs?', answer: 'Yes. We take data privacy very seriously. Your files are never accessed beyond what\'s necessary for the repair. We follow strict confidentiality protocols and can sign NDAs for business clients upon request.' },
  { category: 'privacy', question: 'Can you recover data from a damaged drive?', answer: 'In many cases, yes. We have experience recovering data from damaged hard drives, SSDs, and external storage. Success depends on the extent of the damage. We\'ll assess the situation and give you an honest evaluation before proceeding.' },
  { category: 'business', question: 'Do you offer IT support for businesses?', answer: 'Yes! We provide IT support for small and medium businesses including network setup, server management, security audits, cloud solutions, and ongoing maintenance plans. Contact us to discuss your business needs.' },
  { category: 'business', question: 'Can you set up and manage our office network?', answer: 'Absolutely. We handle complete network setup including WiFi configuration, cable management, firewall setup, VPN configuration, and ongoing network monitoring. We work with businesses of all sizes.' },
  { category: 'area', question: 'What areas do you serve?', answer: 'We provide on-site service throughout the Tampa Bay area including Tampa, St. Petersburg, Clearwater, Brandon, Plant City, Riverview, Valrico, Gibsonton, Apollo Beach, and Ruskin. Remote support is available nationwide.' },
  { category: 'area', question: 'Do you offer on-site visits outside Tampa Bay?', answer: 'Our on-site visits are limited to the Tampa Bay area. However, our remote support services are available to anyone in the United States with an internet connection. Many issues can be fully resolved remotely.' },
  { category: 'general', question: 'Do I need an appointment, or do you accept walk-ins?', answer: 'We recommend scheduling an appointment to ensure prompt service. You can book through our contact form, call us, or send a text. Emergency same-day appointments are available when possible.' },
  { category: 'general', question: 'What payment methods do you accept?', answer: 'We accept all major credit/debit cards, cash, and digital payments. For business clients, we can also arrange invoicing with net-30 terms upon approval.' },
  { category: 'repairs', question: 'Do you offer any warranty on repairs?', answer: 'Yes. We stand behind our work with a satisfaction guarantee. If the same issue returns within a reasonable timeframe, we\'ll take another look at no additional charge. Specific warranty terms vary by service.' },
];

const CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'general', label: 'General' },
  { id: 'repairs', label: 'Repairs' },
  { id: 'remote', label: 'Remote' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'privacy', label: 'Data & Privacy' },
  { id: 'business', label: 'Business IT' },
  { id: 'area', label: 'Service Area' },
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [search, setSearch] = useState('');
  const listRef = useRef<HTMLDivElement>(null);

  const filtered = FAQ_ITEMS.filter((item) => {
    const matchCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchSearch = !search || item.question.toLowerCase().includes(search.toLowerCase()) || item.answer.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <>
      <section className="page-hero page-hero--faq">
        <div className="container">
          <span className="section-label">FAQ</span>
          <h1>Frequently Asked Questions</h1>
          <p>Straight answers about computer repair, remote support, pricing, data privacy, and service areas.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="faq-search fade-in">
            <i className="ph ph-magnifying-glass"></i>
            <input
              type="text"
              placeholder="Search questions — e.g., virus removal, pricing, remote support..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="faq-filters fade-in">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={`faq-filter ${activeCategory === cat.id ? 'active' : ''}`}
                data-category={cat.id}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="faq-list" ref={listRef}>
            {filtered.map((item, i) => (
              <div key={i} className="faq-item fade-in" data-category={item.category}>
                <button type="button" className="faq-question">
                  {item.question}
                  <i className="ph-bold ph-caret-down"></i>
                </button>
                <div className="faq-answer">
                  <div className="faq-answer-inner">{item.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section section">
        <div className="container">
          <div className="cta-content fade-in">
            <h2>Still Have Questions?</h2>
            <p>Can&apos;t find what you&apos;re looking for? Reach out and we&apos;ll get back to you fast.</p>
            <div className="cta-buttons">
              <Link href="/contact" className="btn btn--primary btn--lg">Contact Us</Link>
              <a href="tel:+18134732334" className="btn btn--white btn--lg">
                <i className="ph-bold ph-phone"></i> (813) 473-2334
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

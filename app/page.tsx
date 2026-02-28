import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-grid"></div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="pulse-dot"></span>
              Available Now — Same-Day Service
            </div>
            <h1>Fast, Friendly &amp; <span className="highlight">Affordable</span> Computer Repair</h1>
            <p className="hero-description">Expert IT solutions for homes and businesses throughout the Tampa Bay area. From hardware repairs to network setup — we get your technology back on track.</p>
            <div className="hero-buttons">
              <Link href="/contact" className="btn btn--primary btn--lg">Get a Free Quote</Link>
              <a href="tel:+18134732334" className="btn btn--white btn--lg">
                <i className="ph-bold ph-phone"></i> (813) 473-2334
              </a>
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">500+</div>
                <div className="stat-label">Systems Repaired</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Emergency Support</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">30min</div>
                <div className="stat-label">Response Time</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="trust-bar section--sm">
        <div className="container">
          <div className="trust-items">
            <div className="trust-item fade-in">
              <i className="ph-bold ph-shield-check"></i>
              Certified Technicians
            </div>
            <div className="trust-item fade-in fade-in-delay-1">
              <i className="ph-bold ph-lightning"></i>
              Same-Day Service
            </div>
            <div className="trust-item fade-in fade-in-delay-2">
              <i className="ph-bold ph-currency-dollar"></i>
              Transparent Pricing
            </div>
            <div className="trust-item fade-in fade-in-delay-3">
              <i className="ph-bold ph-desktop-tower"></i>
              PC &amp; Mac Support
            </div>
            <div className="trust-item fade-in fade-in-delay-4">
              <i className="ph-bold ph-globe-hemisphere-west"></i>
              Remote &amp; On-Site
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="services">
        <div className="container">
          <div className="text-center fade-in" style={{ marginBottom: 'var(--space-12)' }}>
            <span className="section-label">What We Do</span>
            <h2 className="section-title">Professional IT Support &amp; Technical Services</h2>
            <p className="section-subtitle">Comprehensive technology solutions to keep your systems running at peak performance.</p>
          </div>

          <div className="grid grid--3">
            {[
              { icon: 'ph-desktop-tower', title: 'PC &amp; Mac Hardware', desc: 'Professional diagnostics and repairs with same-day service available. Expert solutions for hardware and software issues affecting desktop and laptop systems.' },
              { icon: 'ph-shield-warning', title: 'Virus &amp; Malware Removal', desc: 'Complete malware cleanup and security protection to safeguard your systems and personal data from cyber threats. Fast virus removal services.', delay: 1 },
              { icon: 'ph-wifi-high', title: 'Network Setup &amp; Support', desc: 'Professional network installation, configuration, and troubleshooting for homes and businesses of all sizes. Complete networking solutions.', delay: 2 },
              { icon: 'ph-hard-drives', title: 'Data Recovery', desc: 'Expert data recovery from damaged hard drives, SSDs, and external storage devices with high success rates. Emergency data recovery available.' },
              { icon: 'ph-cloud-arrow-up', title: 'Cloud Backup &amp; Security', desc: 'Comprehensive cloud backup solutions and cybersecurity services to protect your valuable data and systems. Automated backup solutions.', delay: 1 },
              { icon: 'ph-headset', title: '24/7 Technical Support', desc: 'Round-the-clock remote and on-site technical support available whenever you need assistance with your technology and systems.', delay: 2 },
            ].map((s, i) => (
              <div key={i} className={`service-card fade-in ${s.delay ? `fade-in-delay-${s.delay}` : ''}`}>
                <div className="service-icon"><i className={`ph-bold ${s.icon}`}></i></div>
                <h3 dangerouslySetInnerHTML={{ __html: s.title }} />
                <p>{s.desc}</p>
                <Link href="/services" className="btn btn--ghost">Learn More </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--gray">
        <div className="container">
          <div className="text-center fade-in" style={{ marginBottom: 'var(--space-12)' }}>
            <span className="section-label">Why Choose Us</span>
            <h2 className="section-title">The Tampa Bay IT Partner You Can Trust</h2>
            <p className="section-subtitle">We combine technical expertise with a personal touch to deliver outstanding service every time.</p>
          </div>

          <div className="grid grid--4">
            {[
              { icon: 'ph-certificate', title: 'Certified Experts', desc: 'CompTIA, Microsoft, and ITIL-certified technicians with years of real-world experience.' },
              { icon: 'ph-timer', title: 'Rapid Response', desc: 'We typically respond within 30 minutes during business hours. Same-day service available.', delay: 1 },
              { icon: 'ph-hand-coins', title: 'Fair, Honest Pricing', desc: 'Transparent quotes with no hidden fees. You always know what you\'re paying before work begins.', delay: 2 },
              { icon: 'ph-users-three', title: 'Personal Service', desc: 'Every client gets clear documentation, proactive support, and service you can count on.', delay: 3 },
            ].map((w, i) => (
              <div key={i} className={`why-card fade-in ${w.delay ? `fade-in-delay-${w.delay}` : ''}`}>
                <div className="why-icon"><i className={`ph-bold ${w.icon}`}></i></div>
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="text-center fade-in" style={{ marginBottom: 'var(--space-12)' }}>
            <span className="section-label">How It Works</span>
            <h2 className="section-title">Getting Started Is Simple</h2>
          </div>

          <div className="process-steps">
            {[
              { num: '1', title: 'Reach Out', desc: 'Call, text, or fill out our contact form to describe your issue.' },
              { num: '2', title: 'Get a Quote', desc: 'We provide a clear, upfront quote with no hidden surprises.', delay: 1 },
              { num: '3', title: 'We Fix It', desc: 'Our certified technicians diagnose and resolve your issue fast.', delay: 2 },
              { num: '4', title: 'Stay Protected', desc: 'We follow up to make sure everything runs smoothly going forward.', delay: 3 },
            ].map((step, i) => (
              <div key={i} className={`process-step fade-in ${step.delay ? `fade-in-delay-${step.delay}` : ''}`}>
                <div className="step-number">{step.num}</div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--gray" id="areas">
        <div className="container">
          <div className="text-center fade-in" style={{ marginBottom: 'var(--space-12)' }}>
            <span className="section-label">Coverage Area</span>
            <h2 className="section-title">Local &amp; Remote Computer Support</h2>
            <p className="section-subtitle">On-site visits throughout Tampa Bay plus nationwide remote support.</p>
          </div>

          <div className="service-areas-grid">
            <div className="fade-in">
              <h3 style={{ marginBottom: 'var(--space-4)', fontSize: 'var(--text-xl)' }}>
                <i className="ph-bold ph-map-pin" style={{ color: 'var(--color-accent)' }}></i>
                On-Site Service Areas
              </h3>
              <p style={{ color: 'var(--color-gray-500)', marginBottom: 'var(--space-5)' }}>Same-day on-site visits throughout the Tampa Bay area:</p>
              <div className="area-tags">
                {['Tampa', 'St. Petersburg', 'Clearwater', 'Brandon', 'Plant City', 'Riverview', 'Valrico', 'Gibsonton', 'Apollo Beach', 'Ruskin'].map((area) => (
                  <span key={area} className="area-tag"><i className="ph ph-map-pin"></i> {area}</span>
                ))}
              </div>
            </div>

            <div className="remote-card fade-in fade-in-delay-1">
              <div className="remote-icon"><i className="ph-bold ph-globe-hemisphere-west"></i></div>
              <h3>Nationwide Remote Support</h3>
              <p>Virus removal, software installation, troubleshooting, and more — all from the comfort of your home or office.</p>
              <Link href="/contact" className="btn btn--white">Start Remote Session</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="text-center fade-in" style={{ marginBottom: 'var(--space-12)' }}>
            <span className="section-label">What Clients Say</span>
            <h2 className="section-title">Trusted by Tampa Bay Homes &amp; Businesses</h2>
          </div>

          <div className="grid grid--3">
            {[
              { text: '"Zach fixed my laptop the same day I called. He explained everything clearly, didn\'t try to upsell me, and the price was very fair. Highly recommend for anyone in the Tampa area."', author: 'Maria R.', location: 'Riverview, FL', initials: 'MR' },
              { text: '"We switched our small office network over to Zach after our old IT guy disappeared. Night and day difference — fast response, clear communication, and our network hasn\'t gone down since."', author: 'David K.', location: 'Brandon, FL', initials: 'DK', delay: 1 },
              { text: '"Had a nasty ransomware scare and Zach handled it calmly and professionally. Recovered all my files, set up proper backups, and now I feel actually protected. Worth every penny."', author: 'Sarah P.', location: 'Tampa, FL', initials: 'SP', delay: 2 },
            ].map((t, i) => (
              <div key={i} className={`testimonial-card fade-in ${t.delay ? `fade-in-delay-${t.delay}` : ''}`}>
                <div className="testimonial-stars">
                  <i className="ph-bold ph-star"></i><i className="ph-bold ph-star"></i><i className="ph-bold ph-star"></i><i className="ph-bold ph-star"></i><i className="ph-bold ph-star"></i>
                </div>
                <p className="testimonial-text">{t.text}</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">{t.initials}</div>
                  <div>
                    <strong>{t.author}</strong>
                    <span>{t.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section section">
        <div className="container">
          <div className="cta-content fade-in">
            <h2>Need Computer Repair in Tampa?</h2>
            <p>Fast response times and professional service throughout the Tampa Bay area. Free estimates on all repairs.</p>
            <div className="cta-buttons">
              <Link href="/contact" className="btn btn--primary btn--lg">Contact Us Today</Link>
              <a href="tel:+18134732334" className="btn btn--white btn--lg">
                <i className="ph-bold ph-phone"></i> Call Now
              </a>
            </div>
            <a href="tel:+18134732334" className="cta-phone">(813) 473-2334</a>
          </div>
        </div>
      </section>
    </>
  );
}

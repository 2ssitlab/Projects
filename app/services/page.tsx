import Link from 'next/link';

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero page-hero--services">
        <div className="container">
          <span className="section-label">Our Expertise</span>
          <h1>Expert IT Services</h1>
          <p>Comprehensive technology solutions for homes and businesses in the Tampa Bay area and beyond.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="text-center fade-in" style={{ marginBottom: 'var(--space-12)' }}>
            <h2>Our IT Services</h2>
            <p className="section-subtitle">From quick fixes to complete system overhauls, we&apos;ve got you covered.</p>
          </div>

          <div className="grid grid--3" style={{ marginBottom: 'var(--space-16)' }}>
            {[
              { icon: 'ph-wrench', title: 'Computer Repair', desc: 'Hardware and software repair for PCs and Macs. Diagnostics and fixes that get you back online fast. Same-day service available for most issues.', cta: 'Request Service' },
              { icon: 'ph-headset', title: 'Remote Support', desc: 'Secure support from anywhere. We connect remotely to fix your tech issues fast — no house call needed. Available during business hours.', cta: 'Start Session', delay: 1 },
              { icon: 'ph-shield-warning', title: 'Virus & Malware Removal', desc: 'Thorough system cleanups with ongoing protection for peace of mind. We eliminate threats and harden your system against future attacks.', cta: 'Get Protected', delay: 2 },
              { icon: 'ph-hard-drives', title: 'Data Recovery', desc: 'Recover lost or corrupted files — plus set up automatic backups to protect them going forward. High success rates on most devices.', cta: 'Recover Data' },
              { icon: 'ph-wifi-high', title: 'Network Setup & Support', desc: 'WiFi, cabling, troubleshooting — we make sure your network runs fast and secure. Complete solutions for home and business environments.', cta: 'Get Connected', delay: 1 },
              { icon: 'ph-app-window', title: 'Software Installation & Optimization', desc: 'From Office to antivirus, we install, configure, and optimize software for peak performance. System tune-ups included.', cta: 'Optimize Now', delay: 2 },
            ].map((s, i) => (
              <div key={i} className={`service-card fade-in ${s.delay ? `fade-in-delay-${s.delay}` : ''}`}>
                <div className="service-icon"><i className={`ph-bold ${s.icon}`}></i></div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <Link href="/contact" className="btn btn--ghost">{s.cta} </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--gray">
        <div className="container">
          <div className="text-center fade-in" style={{ marginBottom: 'var(--space-12)' }}>
            <span className="section-label">In Detail</span>
            <h2>What&apos;s Included</h2>
          </div>

          {[
            { icon: 'ph-desktop-tower', title: 'On-Site Computer Repair', desc: 'We come to you for hands-on diagnostics and repairs. Whether it\'s a hardware failure, software crash, or performance issue — our certified technicians bring the tools and expertise to fix it on the spot.', features: ['Hardware diagnostics & component replacement', 'Operating system repair & reinstallation', 'Performance optimization & cleanup', 'Same-day appointments available'] },
            { icon: 'ph-shield-check', title: 'Cybersecurity & Protection', desc: 'Stay safe online with our comprehensive security services. We remove existing threats, install enterprise-grade protection, and set up monitoring to catch problems before they escalate.', features: ['Full virus & malware removal', 'Firewall configuration', 'Endpoint protection setup', 'Security awareness guidance'] },
            { icon: 'ph-cloud-arrow-up', title: 'Cloud & Backup Solutions', desc: 'Protect your most important files with automated cloud backups and disaster recovery planning. We set up systems that work in the background so you never have to worry about data loss.', features: ['Automated cloud backup configuration', 'Microsoft 365 & Google Workspace setup', 'Disaster recovery planning', 'Data migration services'] },
          ].map((d, i) => (
            <div key={i} className="service-detail fade-in">
              <div>
                <div className="service-detail-icon"><i className={`ph-bold ${d.icon}`}></i></div>
                <h3>{d.title}</h3>
                <p>{d.desc}</p>
                <div className="service-features">
                  {d.features.map((f, j) => (
                    <div key={j} className="service-feature"><i className="ph-bold ph-check-circle"></i> {f}</div>
                  ))}
                </div>
              </div>
              <div className="service-detail-visual"><i className={`ph ${d.icon}`}></i></div>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-section section">
        <div className="container">
          <div className="cta-content fade-in">
            <h2>Ready to Get Started?</h2>
            <p>Tell us what you need and we&apos;ll provide a clear plan with transparent pricing — no obligations.</p>
            <div className="cta-buttons">
              <Link href="/contact" className="btn btn--primary btn--lg">Request a Quote</Link>
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

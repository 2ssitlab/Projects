import Link from 'next/link';

export default function AboutPage() {
  return (
    <>
      <section className="page-hero page-hero--about">
        <div className="container">
          <span className="section-label">Our Story</span>
          <h1>About Zach</h1>
          <p>Your local IT expert committed to delivering technology solutions that actually work.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="about-grid fade-in">
            <div className="about-content">
              <p>Looking for trusted IT support and computer repair in Tampa Bay? You&apos;ve found the right guy. I&apos;m <strong>Zach</strong>, founder of Zach&apos;s Computer Services, and I&apos;ve spent years helping local businesses and families solve real-world tech issues — fast, friendly, and for a fair price.</p>
              <p>Whether it&apos;s backup failures, slow networks, or stubborn viruses, I deliver solutions that last. My approach is simple: explain things clearly, fix the problem, and make sure your technology works <em>for</em> you, not against you.</p>
              <p>I don&apos;t believe in band-aids or cookie-cutter &quot;fixes.&quot; Every client gets clear documentation, proactive support, and service you can count on — every time.</p>
              <p>Need help right now? <Link href="/contact" style={{ fontWeight: 600 }}>Get in touch today</Link> for Tampa Bay IT support you can actually trust.</p>
            </div>

            <div className="cert-card">
              <h3><i className="ph-bold ph-certificate"></i> Certifications</h3>
              <div className="cert-list">
                {['CompTIA Network+', 'MD-102 Modern Desktop Administrator', 'AZ-900 Azure Fundamentals', 'SC-900 Security & Compliance', 'MS-900 Microsoft 365 Fundamentals', 'ITIL v4 Foundation'].map((cert) => (
                  <div key={cert} className="cert-item">
                    <i className="ph-bold ph-check-circle"></i>
                    {cert}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--gray">
        <div className="container">
          <div className="text-center fade-in" style={{ marginBottom: 'var(--space-12)' }}>
            <span className="section-label">Our Values</span>
            <h2>What Sets Us Apart</h2>
          </div>

          <div className="grid grid--3">
            {[
              { icon: 'ph-handshake', title: 'Honest Communication', desc: 'We explain the problem in plain English, give you your options, and let you decide. No jargon, no upselling, no pressure.' },
              { icon: 'ph-rocket-launch', title: 'Fast Turnaround', desc: 'Most issues are resolved same-day. We know your time matters, so we work efficiently without cutting corners.', delay: 1 },
              { icon: 'ph-heart', title: 'Genuine Care', desc: 'We treat every client\'s system like our own. Your satisfaction and security are our top priorities.', delay: 2 },
            ].map((v, i) => (
              <div key={i} className={`why-card fade-in ${v.delay ? `fade-in-delay-${v.delay}` : ''}`}>
                <div className="why-icon"><i className={`ph-bold ${v.icon}`}></i></div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section section">
        <div className="container">
          <div className="cta-content fade-in">
            <h2>Let&apos;s Connect</h2>
            <p>Need help, fast repairs, or have a tech question? I typically respond within 30 minutes during business hours.</p>
            <div className="cta-buttons">
              <Link href="/contact" className="btn btn--primary btn--lg">
                <i className="ph-bold ph-envelope"></i> Contact Us
              </Link>
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

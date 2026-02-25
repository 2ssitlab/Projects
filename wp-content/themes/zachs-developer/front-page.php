<?php
/**
 * Template Name: Homepage
 * Front page template
 */
get_header(); ?>

<!-- Hero Section -->
<section class="hero">
  <div class="hero-grid"></div>
  <div class="container">
    <div class="hero-content">
      <div class="hero-badge">
        <span class="pulse-dot"></span>
        Available Now — Same-Day Service
      </div>
      <h1>Fast, Friendly &amp; <span class="highlight">Affordable</span> Computer Repair</h1>
      <p class="hero-description">Expert IT solutions for homes and businesses throughout the Tampa Bay area. From hardware repairs to network setup — we get your technology back on track.</p>
      <div class="hero-buttons">
        <a href="<?php echo esc_url(home_url('/contact/')); ?>" class="btn btn--primary btn--lg">Get a Free Quote</a>
        <a href="tel:+18134732334" class="btn btn--white btn--lg">
          <i class="ph-bold ph-phone"></i> (813) 473-2334
        </a>
      </div>
      <div class="hero-stats">
        <div class="stat-item">
          <div class="stat-number">500+</div>
          <div class="stat-label">Systems Repaired</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">24/7</div>
          <div class="stat-label">Emergency Support</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">30min</div>
          <div class="stat-label">Response Time</div>
        </div>
      </div>
    </div>
  </div>
  <div class="hero-visual">
    <svg viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="80" y="100" width="440" height="300" rx="20" stroke="white" stroke-width="2"/>
      <rect x="200" y="400" width="200" height="20" rx="4" stroke="white" stroke-width="2"/>
      <rect x="150" y="420" width="300" height="10" rx="5" stroke="white" stroke-width="2"/>
      <circle cx="300" cy="250" r="60" stroke="white" stroke-width="2"/>
      <path d="M280 250l15 15 30-30" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
</section>

<!-- Trust Bar -->
<section class="trust-bar section--sm">
  <div class="container">
    <div class="trust-items">
      <div class="trust-item fade-in">
        <i class="ph-bold ph-shield-check"></i>
        Certified Technicians
      </div>
      <div class="trust-item fade-in fade-in-delay-1">
        <i class="ph-bold ph-lightning"></i>
        Same-Day Service
      </div>
      <div class="trust-item fade-in fade-in-delay-2">
        <i class="ph-bold ph-currency-dollar"></i>
        Transparent Pricing
      </div>
      <div class="trust-item fade-in fade-in-delay-3">
        <i class="ph-bold ph-desktop-tower"></i>
        PC &amp; Mac Support
      </div>
      <div class="trust-item fade-in fade-in-delay-4">
        <i class="ph-bold ph-globe-hemisphere-west"></i>
        Remote &amp; On-Site
      </div>
    </div>
  </div>
</section>

<!-- Services Section -->
<section class="section" id="services">
  <div class="container">
    <div class="text-center fade-in" style="margin-bottom: var(--space-12);">
      <span class="section-label">What We Do</span>
      <h2 class="section-title">Professional IT Support &amp; Technical Services</h2>
      <p class="section-subtitle">Comprehensive technology solutions to keep your systems running at peak performance.</p>
    </div>

    <div class="grid grid--3">
      <div class="service-card fade-in">
        <div class="service-icon">
          <i class="ph-bold ph-desktop-tower"></i>
        </div>
        <h3>PC &amp; Mac Hardware</h3>
        <p>Professional diagnostics and repairs with same-day service available. Expert solutions for hardware and software issues affecting desktop and laptop systems.</p>
        <a href="<?php echo esc_url(home_url('/services/')); ?>" class="btn btn--ghost">Learn More </a>
      </div>

      <div class="service-card fade-in fade-in-delay-1">
        <div class="service-icon">
          <i class="ph-bold ph-shield-warning"></i>
        </div>
        <h3>Virus &amp; Malware Removal</h3>
        <p>Complete malware cleanup and security protection to safeguard your systems and personal data from cyber threats. Fast virus removal services.</p>
        <a href="<?php echo esc_url(home_url('/services/')); ?>" class="btn btn--ghost">Learn More </a>
      </div>

      <div class="service-card fade-in fade-in-delay-2">
        <div class="service-icon">
          <i class="ph-bold ph-wifi-high"></i>
        </div>
        <h3>Network Setup &amp; Support</h3>
        <p>Professional network installation, configuration, and troubleshooting for homes and businesses of all sizes. Complete networking solutions.</p>
        <a href="<?php echo esc_url(home_url('/services/')); ?>" class="btn btn--ghost">Learn More </a>
      </div>

      <div class="service-card fade-in">
        <div class="service-icon">
          <i class="ph-bold ph-hard-drives"></i>
        </div>
        <h3>Data Recovery</h3>
        <p>Expert data recovery from damaged hard drives, SSDs, and external storage devices with high success rates. Emergency data recovery available.</p>
        <a href="<?php echo esc_url(home_url('/services/')); ?>" class="btn btn--ghost">Learn More </a>
      </div>

      <div class="service-card fade-in fade-in-delay-1">
        <div class="service-icon">
          <i class="ph-bold ph-cloud-arrow-up"></i>
        </div>
        <h3>Cloud Backup &amp; Security</h3>
        <p>Comprehensive cloud backup solutions and cybersecurity services to protect your valuable data and systems. Automated backup solutions.</p>
        <a href="<?php echo esc_url(home_url('/services/')); ?>" class="btn btn--ghost">Learn More </a>
      </div>

      <div class="service-card fade-in fade-in-delay-2">
        <div class="service-icon">
          <i class="ph-bold ph-headset"></i>
        </div>
        <h3>24/7 Technical Support</h3>
        <p>Round-the-clock remote and on-site technical support available whenever you need assistance with your technology and systems.</p>
        <a href="<?php echo esc_url(home_url('/services/')); ?>" class="btn btn--ghost">Learn More </a>
      </div>
    </div>
  </div>
</section>

<!-- Why Choose Section -->
<section class="section section--gray">
  <div class="container">
    <div class="text-center fade-in" style="margin-bottom: var(--space-12);">
      <span class="section-label">Why Choose Us</span>
      <h2 class="section-title">The Tampa Bay IT Partner You Can Trust</h2>
      <p class="section-subtitle">We combine technical expertise with a personal touch to deliver outstanding service every time.</p>
    </div>

    <div class="grid grid--4">
      <div class="why-card fade-in">
        <div class="why-icon">
          <i class="ph-bold ph-certificate"></i>
        </div>
        <h3>Certified Experts</h3>
        <p>CompTIA, Microsoft, and ITIL-certified technicians with years of real-world experience.</p>
      </div>
      <div class="why-card fade-in fade-in-delay-1">
        <div class="why-icon">
          <i class="ph-bold ph-timer"></i>
        </div>
        <h3>Rapid Response</h3>
        <p>We typically respond within 30 minutes during business hours. Same-day service available.</p>
      </div>
      <div class="why-card fade-in fade-in-delay-2">
        <div class="why-icon">
          <i class="ph-bold ph-hand-coins"></i>
        </div>
        <h3>Fair, Honest Pricing</h3>
        <p>Transparent quotes with no hidden fees. You always know what you're paying before work begins.</p>
      </div>
      <div class="why-card fade-in fade-in-delay-3">
        <div class="why-icon">
          <i class="ph-bold ph-users-three"></i>
        </div>
        <h3>Personal Service</h3>
        <p>Every client gets clear documentation, proactive support, and service you can count on.</p>
      </div>
    </div>
  </div>
</section>

<!-- How It Works -->
<section class="section">
  <div class="container">
    <div class="text-center fade-in" style="margin-bottom: var(--space-12);">
      <span class="section-label">How It Works</span>
      <h2 class="section-title">Getting Started Is Simple</h2>
    </div>

    <div class="process-steps">
      <div class="process-step fade-in">
        <div class="step-number">1</div>
        <h4>Reach Out</h4>
        <p>Call, text, or fill out our contact form to describe your issue.</p>
      </div>
      <div class="process-step fade-in fade-in-delay-1">
        <div class="step-number">2</div>
        <h4>Get a Quote</h4>
        <p>We provide a clear, upfront quote with no hidden surprises.</p>
      </div>
      <div class="process-step fade-in fade-in-delay-2">
        <div class="step-number">3</div>
        <h4>We Fix It</h4>
        <p>Our certified technicians diagnose and resolve your issue fast.</p>
      </div>
      <div class="process-step fade-in fade-in-delay-3">
        <div class="step-number">4</div>
        <h4>Stay Protected</h4>
        <p>We follow up to make sure everything runs smoothly going forward.</p>
      </div>
    </div>
  </div>
</section>

<!-- Service Areas -->
<section class="section section--gray" id="areas">
  <div class="container">
    <div class="text-center fade-in" style="margin-bottom: var(--space-12);">
      <span class="section-label">Coverage Area</span>
      <h2 class="section-title">Local &amp; Remote Computer Support</h2>
      <p class="section-subtitle">On-site visits throughout Tampa Bay plus nationwide remote support.</p>
    </div>

    <div class="service-areas-grid">
      <div class="fade-in">
        <h3 style="margin-bottom: var(--space-4); font-size: var(--text-xl);">
          <i class="ph-bold ph-map-pin" style="color: var(--color-accent);"></i>
          On-Site Service Areas
        </h3>
        <p style="color: var(--color-gray-500); margin-bottom: var(--space-5);">Same-day on-site visits throughout the Tampa Bay area:</p>
        <div class="area-tags">
          <span class="area-tag"><i class="ph ph-map-pin"></i> Tampa</span>
          <span class="area-tag"><i class="ph ph-map-pin"></i> St. Petersburg</span>
          <span class="area-tag"><i class="ph ph-map-pin"></i> Clearwater</span>
          <span class="area-tag"><i class="ph ph-map-pin"></i> Brandon</span>
          <span class="area-tag"><i class="ph ph-map-pin"></i> Plant City</span>
          <span class="area-tag"><i class="ph ph-map-pin"></i> Riverview</span>
          <span class="area-tag"><i class="ph ph-map-pin"></i> Valrico</span>
          <span class="area-tag"><i class="ph ph-map-pin"></i> Gibsonton</span>
          <span class="area-tag"><i class="ph ph-map-pin"></i> Apollo Beach</span>
          <span class="area-tag"><i class="ph ph-map-pin"></i> Ruskin</span>
        </div>
      </div>

      <div class="remote-card fade-in fade-in-delay-1">
        <div class="remote-icon">
          <i class="ph-bold ph-globe-hemisphere-west"></i>
        </div>
        <h3>Nationwide Remote Support</h3>
        <p>Virus removal, software installation, troubleshooting, and more — all from the comfort of your home or office.</p>
        <a href="<?php echo esc_url(home_url('/contact/')); ?>" class="btn btn--white">Start Remote Session</a>
      </div>
    </div>
  </div>
</section>

<!-- CTA Section -->
<section class="cta-section section">
  <div class="container">
    <div class="cta-content fade-in">
      <h2>Need Computer Repair in Tampa?</h2>
      <p>Fast response times and professional service throughout the Tampa Bay area. Free estimates on all repairs.</p>
      <div class="cta-buttons">
        <a href="<?php echo esc_url(home_url('/contact/')); ?>" class="btn btn--primary btn--lg">Contact Us Today</a>
        <a href="tel:+18134732334" class="btn btn--white btn--lg">
          <i class="ph-bold ph-phone"></i> Call Now
        </a>
      </div>
      <a href="tel:+18134732334" class="cta-phone">(813) 473-2334</a>
    </div>
  </div>
</section>

<?php get_footer();

<?php
/**
 * Template Name: Services
 */
get_header(); ?>

<?php zcs_breadcrumbs(); ?>
<section class="page-hero page-hero--services">
  <div class="container">
    <span class="section-label">Our Expertise</span>
    <h1>Computer Repair &amp; IT Services in Tampa Bay</h1>
    <p>Comprehensive technology solutions for homes and businesses — from quick fixes to complete system overhauls.</p>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="text-center fade-in" style="margin-bottom: var(--space-12);">
      <h2>Our IT Services</h2>
      <p class="section-subtitle">From quick fixes to complete system overhauls, we've got you covered.</p>
    </div>

    <div class="grid grid--3" style="margin-bottom: var(--space-16);">
      <div class="service-card fade-in">
        <div class="service-icon"><i class="ph-bold ph-wrench"></i></div>
        <h3>Computer Repair</h3>
        <p>Hardware and software repair for PCs and Macs. Diagnostics and fixes that get you back online fast. Same-day service available for most issues.</p>
        <a href="<?php echo esc_url(home_url('/contact/')); ?>" class="btn btn--ghost">Request Service </a>
      </div>

      <div class="service-card fade-in fade-in-delay-1">
        <div class="service-icon"><i class="ph-bold ph-headset"></i></div>
        <h3>Remote Support</h3>
        <p>Secure support from anywhere. We connect remotely to fix your tech issues fast — no house call needed. Available during business hours.</p>
        <a href="<?php echo esc_url(home_url('/contact/')); ?>" class="btn btn--ghost">Start Session </a>
      </div>

      <div class="service-card fade-in fade-in-delay-2">
        <div class="service-icon"><i class="ph-bold ph-shield-warning"></i></div>
        <h3>Virus &amp; Malware Removal</h3>
        <p>Thorough system cleanups with ongoing protection for peace of mind. We eliminate threats and harden your system against future attacks.</p>
        <a href="<?php echo esc_url(home_url('/contact/')); ?>" class="btn btn--ghost">Get Protected </a>
      </div>

      <div class="service-card fade-in">
        <div class="service-icon"><i class="ph-bold ph-hard-drives"></i></div>
        <h3>Data Recovery</h3>
        <p>Recover lost or corrupted files — plus set up automatic backups to protect them going forward. High success rates on most devices.</p>
        <a href="<?php echo esc_url(home_url('/contact/')); ?>" class="btn btn--ghost">Recover Data </a>
      </div>

      <div class="service-card fade-in fade-in-delay-1">
        <div class="service-icon"><i class="ph-bold ph-wifi-high"></i></div>
        <h3>Network Setup &amp; Support</h3>
        <p>WiFi, cabling, troubleshooting — we make sure your network runs fast and secure. Complete solutions for home and business environments.</p>
        <a href="<?php echo esc_url(home_url('/contact/')); ?>" class="btn btn--ghost">Get Connected </a>
      </div>

      <div class="service-card fade-in fade-in-delay-2">
        <div class="service-icon"><i class="ph-bold ph-app-window"></i></div>
        <h3>Software Installation &amp; Optimization</h3>
        <p>From Office to antivirus, we install, configure, and optimize software for peak performance. System tune-ups included.</p>
        <a href="<?php echo esc_url(home_url('/contact/')); ?>" class="btn btn--ghost">Optimize Now </a>
      </div>
    </div>
  </div>
</section>

<!-- Detailed Service Breakdown -->
<section class="section section--gray">
  <div class="container">
    <div class="text-center fade-in" style="margin-bottom: var(--space-12);">
      <span class="section-label">In Detail</span>
      <h2>What's Included</h2>
    </div>

    <div class="service-detail fade-in">
      <div>
        <div class="service-detail-icon"><i class="ph-bold ph-desktop-tower"></i></div>
        <h3>On-Site Computer Repair</h3>
        <p>We come to you for hands-on diagnostics and repairs. Whether it's a hardware failure, software crash, or performance issue — our certified technicians bring the tools and expertise to fix it on the spot.</p>
        <div class="service-features">
          <div class="service-feature"><i class="ph-bold ph-check-circle"></i> Hardware diagnostics &amp; component replacement</div>
          <div class="service-feature"><i class="ph-bold ph-check-circle"></i> Operating system repair &amp; reinstallation</div>
          <div class="service-feature"><i class="ph-bold ph-check-circle"></i> Performance optimization &amp; cleanup</div>
          <div class="service-feature"><i class="ph-bold ph-check-circle"></i> Same-day appointments available</div>
        </div>
      </div>
      <div class="service-detail-visual"><i class="ph ph-desktop-tower"></i></div>
    </div>

    <div class="service-detail fade-in">
      <div>
        <div class="service-detail-icon"><i class="ph-bold ph-shield-check"></i></div>
        <h3>Cybersecurity &amp; Protection</h3>
        <p>Stay safe online with our comprehensive security services. We remove existing threats, install enterprise-grade protection, and set up monitoring to catch problems before they escalate.</p>
        <div class="service-features">
          <div class="service-feature"><i class="ph-bold ph-check-circle"></i> Full virus &amp; malware removal</div>
          <div class="service-feature"><i class="ph-bold ph-check-circle"></i> Firewall configuration</div>
          <div class="service-feature"><i class="ph-bold ph-check-circle"></i> Endpoint protection setup</div>
          <div class="service-feature"><i class="ph-bold ph-check-circle"></i> Security awareness guidance</div>
        </div>
      </div>
      <div class="service-detail-visual"><i class="ph ph-shield-check"></i></div>
    </div>

    <div class="service-detail fade-in">
      <div>
        <div class="service-detail-icon"><i class="ph-bold ph-cloud-arrow-up"></i></div>
        <h3>Cloud &amp; Backup Solutions</h3>
        <p>Protect your most important files with automated cloud backups and disaster recovery planning. We set up systems that work in the background so you never have to worry about data loss.</p>
        <div class="service-features">
          <div class="service-feature"><i class="ph-bold ph-check-circle"></i> Automated cloud backup configuration</div>
          <div class="service-feature"><i class="ph-bold ph-check-circle"></i> Microsoft 365 &amp; Google Workspace setup</div>
          <div class="service-feature"><i class="ph-bold ph-check-circle"></i> Disaster recovery planning</div>
          <div class="service-feature"><i class="ph-bold ph-check-circle"></i> Data migration services</div>
        </div>
      </div>
      <div class="service-detail-visual"><i class="ph ph-cloud-arrow-up"></i></div>
    </div>
  </div>
</section>

<!-- CTA -->
<section class="cta-section section">
  <div class="container">
    <div class="cta-content fade-in">
      <h2>Ready to Get Started?</h2>
      <p>Tell us what you need and we'll provide a clear plan with transparent pricing — no obligations.</p>
      <div class="cta-buttons">
        <a href="<?php echo esc_url(home_url('/contact/')); ?>" class="btn btn--primary btn--lg">Request a Quote</a>
        <a href="tel:+18134732334" class="btn btn--white btn--lg">
          <i class="ph-bold ph-phone"></i> (813) 473-2334
        </a>
      </div>
    </div>
  </div>
</section>

<?php get_footer();

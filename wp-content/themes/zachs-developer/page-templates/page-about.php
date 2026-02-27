<?php
/**
 * Template Name: About
 */
get_header(); ?>

<?php zcs_breadcrumbs(); ?>
<section class="page-hero page-hero--about">
  <div class="container">
    <span class="section-label">Our Story</span>
    <h1>About Zach — Your Tampa Bay IT Expert</h1>
    <p>Certified technician committed to delivering technology solutions that actually work.</p>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="about-grid fade-in">
      <div class="about-content">
        <p>Looking for trusted IT support and computer repair in Tampa Bay? You've found the right guy. I'm <strong>Zach</strong>, founder of Zach's Computer Services, and I've spent years helping local businesses and families solve real-world tech issues — fast, friendly, and for a fair price.</p>

        <p>Whether it's backup failures, slow networks, or stubborn viruses, I deliver solutions that last. My approach is simple: explain things clearly, fix the problem, and make sure your technology works <em>for</em> you, not against you.</p>

        <p>I don't believe in band-aids or cookie-cutter "fixes." Every client gets clear documentation, proactive support, and service you can count on — every time.</p>

        <p>Need help right now? <a href="<?php echo esc_url(home_url('/contact/')); ?>" style="font-weight: 600;">Get in touch today</a> for Tampa Bay IT support you can actually trust.</p>
      </div>

      <div class="cert-card">
        <h3><i class="ph-bold ph-certificate"></i> Certifications</h3>
        <div class="cert-list">
          <div class="cert-item">
            <i class="ph-bold ph-check-circle"></i>
            CompTIA Network+
          </div>
          <div class="cert-item">
            <i class="ph-bold ph-check-circle"></i>
            MD-102 Modern Desktop Administrator
          </div>
          <div class="cert-item">
            <i class="ph-bold ph-check-circle"></i>
            AZ-900 Azure Fundamentals
          </div>
          <div class="cert-item">
            <i class="ph-bold ph-check-circle"></i>
            SC-900 Security &amp; Compliance
          </div>
          <div class="cert-item">
            <i class="ph-bold ph-check-circle"></i>
            MS-900 Microsoft 365 Fundamentals
          </div>
          <div class="cert-item">
            <i class="ph-bold ph-check-circle"></i>
            ITIL v4 Foundation
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Values -->
<section class="section section--gray">
  <div class="container">
    <div class="text-center fade-in" style="margin-bottom: var(--space-12);">
      <span class="section-label">Our Values</span>
      <h2>What Sets Us Apart</h2>
    </div>

    <div class="grid grid--3">
      <div class="why-card fade-in">
        <div class="why-icon"><i class="ph-bold ph-handshake"></i></div>
        <h3>Honest Communication</h3>
        <p>We explain the problem in plain English, give you your options, and let you decide. No jargon, no upselling, no pressure.</p>
      </div>
      <div class="why-card fade-in fade-in-delay-1">
        <div class="why-icon"><i class="ph-bold ph-rocket-launch"></i></div>
        <h3>Fast Turnaround</h3>
        <p>Most issues are resolved same-day. We know your time matters, so we work efficiently without cutting corners.</p>
      </div>
      <div class="why-card fade-in fade-in-delay-2">
        <div class="why-icon"><i class="ph-bold ph-heart"></i></div>
        <h3>Genuine Care</h3>
        <p>We treat every client's system like our own. Your satisfaction and security are our top priorities.</p>
      </div>
    </div>
  </div>
</section>

<!-- CTA -->
<section class="cta-section section">
  <div class="container">
    <div class="cta-content fade-in">
      <h2>Let's Connect</h2>
      <p>Need help, fast repairs, or have a tech question? I typically respond within 30 minutes during business hours.</p>
      <div class="cta-buttons">
        <a href="<?php echo esc_url(home_url('/contact/')); ?>" class="btn btn--primary btn--lg">
          <i class="ph-bold ph-envelope"></i> Contact Us
        </a>
        <a href="tel:+18134732334" class="btn btn--white btn--lg">
          <i class="ph-bold ph-phone"></i> (813) 473-2334
        </a>
      </div>
    </div>
  </div>
</section>

<?php get_footer();

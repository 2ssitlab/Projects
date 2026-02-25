<?php
/**
 * Template Name: FAQ
 */
get_header(); ?>

<section class="page-hero">
  <div class="container">
    <span class="section-label">FAQ</span>
    <h1>Frequently Asked Questions</h1>
    <p>Straight answers about computer repair, remote support, pricing, data privacy, and service areas.</p>
  </div>
</section>

<section class="section">
  <div class="container">

    <!-- Search -->
    <div class="faq-search fade-in">
      <i class="ph ph-magnifying-glass"></i>
      <input type="text" placeholder="Search questions — e.g., virus removal, pricing, remote support...">
    </div>

    <!-- Filters -->
    <div class="faq-filters fade-in">
      <button class="faq-filter active" data-category="all">All</button>
      <button class="faq-filter" data-category="general">General</button>
      <button class="faq-filter" data-category="repairs">Repairs</button>
      <button class="faq-filter" data-category="remote">Remote</button>
      <button class="faq-filter" data-category="pricing">Pricing</button>
      <button class="faq-filter" data-category="privacy">Data &amp; Privacy</button>
      <button class="faq-filter" data-category="business">Business IT</button>
      <button class="faq-filter" data-category="area">Service Area</button>
    </div>

    <!-- FAQ List -->
    <div class="faq-list">

      <div class="faq-item fade-in" data-category="general">
        <button class="faq-question">
          What computer repair and IT services do you offer?
          <i class="ph-bold ph-caret-down"></i>
        </button>
        <div class="faq-answer">
          <div class="faq-answer-inner">We offer a full range of IT services including PC and Mac hardware repair, virus and malware removal, network setup and troubleshooting, data recovery, cloud backup solutions, software installation, system optimization, and 24/7 remote and on-site technical support.</div>
        </div>
      </div>

      <div class="faq-item fade-in" data-category="repairs">
        <button class="faq-question">
          Do you repair both Windows PCs and Apple Macs?
          <i class="ph-bold ph-caret-down"></i>
        </button>
        <div class="faq-answer">
          <div class="faq-answer-inner">Yes! We service both Windows PCs and Apple Mac computers. Our technicians are certified and experienced with both platforms, including desktops, laptops, and all-in-one systems.</div>
        </div>
      </div>

      <div class="faq-item fade-in" data-category="remote">
        <button class="faq-question">
          Is remote computer support available and secure?
          <i class="ph-bold ph-caret-down"></i>
        </button>
        <div class="faq-answer">
          <div class="faq-answer-inner">Absolutely. Our remote support uses industry-standard encrypted connections to ensure your data remains secure. We can diagnose and fix most software issues, remove viruses, install programs, and troubleshoot problems — all remotely. No house call needed.</div>
        </div>
      </div>

      <div class="faq-item fade-in" data-category="general">
        <button class="faq-question">
          How quickly will you respond?
          <i class="ph-bold ph-caret-down"></i>
        </button>
        <div class="faq-answer">
          <div class="faq-answer-inner">We typically respond within 30 minutes during business hours (Monday–Friday, 8 AM – 6 PM ET). For emergencies, we offer 24/7 support — just call and follow the emergency prompts.</div>
        </div>
      </div>

      <div class="faq-item fade-in" data-category="repairs">
        <button class="faq-question">
          How long do computer repairs take?
          <i class="ph-bold ph-caret-down"></i>
        </button>
        <div class="faq-answer">
          <div class="faq-answer-inner">Most standard repairs are completed same-day. More complex issues like data recovery or hardware replacement may take 1–3 business days. We'll always give you a clear timeline upfront before starting work.</div>
        </div>
      </div>

      <div class="faq-item fade-in" data-category="pricing">
        <button class="faq-question">
          How much do your services cost?
          <i class="ph-bold ph-caret-down"></i>
        </button>
        <div class="faq-answer">
          <div class="faq-answer-inner">Pricing varies by service and complexity. We provide free estimates and transparent quotes before any work begins — no surprises, no hidden fees. Contact us to describe your issue and we'll give you a clear price.</div>
        </div>
      </div>

      <div class="faq-item fade-in" data-category="pricing">
        <button class="faq-question">
          Do you charge for diagnostics?
          <i class="ph-bold ph-caret-down"></i>
        </button>
        <div class="faq-answer">
          <div class="faq-answer-inner">We offer free initial consultations and estimates. If in-depth diagnostics are required (e.g., hardware testing), we'll let you know the cost upfront and apply it toward the repair if you proceed.</div>
        </div>
      </div>

      <div class="faq-item fade-in" data-category="privacy">
        <button class="faq-question">
          Is my data safe during repairs?
          <i class="ph-bold ph-caret-down"></i>
        </button>
        <div class="faq-answer">
          <div class="faq-answer-inner">Yes. We take data privacy very seriously. Your files are never accessed beyond what's necessary for the repair. We follow strict confidentiality protocols and can sign NDAs for business clients upon request.</div>
        </div>
      </div>

      <div class="faq-item fade-in" data-category="privacy">
        <button class="faq-question">
          Can you recover data from a damaged drive?
          <i class="ph-bold ph-caret-down"></i>
        </button>
        <div class="faq-answer">
          <div class="faq-answer-inner">In many cases, yes. We have experience recovering data from damaged hard drives, SSDs, and external storage. Success depends on the extent of the damage. We'll assess the situation and give you an honest evaluation before proceeding.</div>
        </div>
      </div>

      <div class="faq-item fade-in" data-category="business">
        <button class="faq-question">
          Do you offer IT support for businesses?
          <i class="ph-bold ph-caret-down"></i>
        </button>
        <div class="faq-answer">
          <div class="faq-answer-inner">Yes! We provide IT support for small and medium businesses including network setup, server management, security audits, cloud solutions, and ongoing maintenance plans. Contact us to discuss your business needs.</div>
        </div>
      </div>

      <div class="faq-item fade-in" data-category="business">
        <button class="faq-question">
          Can you set up and manage our office network?
          <i class="ph-bold ph-caret-down"></i>
        </button>
        <div class="faq-answer">
          <div class="faq-answer-inner">Absolutely. We handle complete network setup including WiFi configuration, cable management, firewall setup, VPN configuration, and ongoing network monitoring. We work with businesses of all sizes.</div>
        </div>
      </div>

      <div class="faq-item fade-in" data-category="area">
        <button class="faq-question">
          What areas do you serve?
          <i class="ph-bold ph-caret-down"></i>
        </button>
        <div class="faq-answer">
          <div class="faq-answer-inner">We provide on-site service throughout the Tampa Bay area including Tampa, St. Petersburg, Clearwater, Brandon, Plant City, Riverview, Valrico, Gibsonton, Apollo Beach, and Ruskin. Remote support is available nationwide.</div>
        </div>
      </div>

      <div class="faq-item fade-in" data-category="area">
        <button class="faq-question">
          Do you offer on-site visits outside Tampa Bay?
          <i class="ph-bold ph-caret-down"></i>
        </button>
        <div class="faq-answer">
          <div class="faq-answer-inner">Our on-site visits are limited to the Tampa Bay area. However, our remote support services are available to anyone in the United States with an internet connection. Many issues can be fully resolved remotely.</div>
        </div>
      </div>

      <div class="faq-item fade-in" data-category="general">
        <button class="faq-question">
          Do I need an appointment, or do you accept walk-ins?
          <i class="ph-bold ph-caret-down"></i>
        </button>
        <div class="faq-answer">
          <div class="faq-answer-inner">We recommend scheduling an appointment to ensure prompt service. You can book through our contact form, call us, or send a text. Emergency same-day appointments are available when possible.</div>
        </div>
      </div>

      <div class="faq-item fade-in" data-category="general">
        <button class="faq-question">
          What payment methods do you accept?
          <i class="ph-bold ph-caret-down"></i>
        </button>
        <div class="faq-answer">
          <div class="faq-answer-inner">We accept all major credit/debit cards, cash, and digital payments. For business clients, we can also arrange invoicing with net-30 terms upon approval.</div>
        </div>
      </div>

      <div class="faq-item fade-in" data-category="repairs">
        <button class="faq-question">
          Do you offer any warranty on repairs?
          <i class="ph-bold ph-caret-down"></i>
        </button>
        <div class="faq-answer">
          <div class="faq-answer-inner">Yes. We stand behind our work with a satisfaction guarantee. If the same issue returns within a reasonable timeframe, we'll take another look at no additional charge. Specific warranty terms vary by service.</div>
        </div>
      </div>
    </div>

  </div>
</section>

<!-- CTA -->
<section class="cta-section section">
  <div class="container">
    <div class="cta-content fade-in">
      <h2>Still Have Questions?</h2>
      <p>Can't find what you're looking for? Reach out and we'll get back to you fast.</p>
      <div class="cta-buttons">
        <a href="<?php echo esc_url(home_url('/contact/')); ?>" class="btn btn--primary btn--lg">Contact Us</a>
        <a href="tel:+18134732334" class="btn btn--white btn--lg">
          <i class="ph-bold ph-phone"></i> (813) 473-2334
        </a>
      </div>
    </div>
  </div>
</section>

<?php get_footer();

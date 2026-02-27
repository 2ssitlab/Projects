<?php
/**
 * Template Name: Contact
 */
get_header(); ?>

<?php zcs_breadcrumbs(); ?>
<section class="page-hero page-hero--contact">
  <div class="container">
    <span class="section-label">Get In Touch</span>
    <h1>Contact Zach's Computer Services</h1>
    <p>Fast, friendly, reliable computer help. We typically respond within 30 minutes during business hours.</p>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="contact-grid">

      <!-- Contact Form -->
      <div class="contact-form-card fade-in">
        <h3 style="margin-bottom: var(--space-2);">Request a Quote or Schedule Service</h3>
        <p style="color: var(--color-gray-500); margin-bottom: var(--space-6); font-size: var(--text-sm);">Tell us what you need — same-day reply with a clear plan and transparent pricing.</p>

        <form id="zcs-contact-form" method="post">
          <div class="form-row">
            <div class="form-group">
              <label for="first_name">First Name <span class="required">*</span></label>
              <input type="text" id="first_name" name="first_name" placeholder="Your first name" required>
            </div>
            <div class="form-group">
              <label for="last_name">Last Name <span class="required">*</span></label>
              <input type="text" id="last_name" name="last_name" placeholder="Your last name" required>
            </div>
          </div>

          <div class="form-group">
            <label for="client_type">Business or Residential <span class="required">*</span></label>
            <select id="client_type" name="client_type" required>
              <option value="">— Select —</option>
              <option value="residential">Residential</option>
              <option value="business">Business</option>
            </select>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label for="email">Email <span class="required">*</span></label>
              <input type="email" id="email" name="email" placeholder="you@example.com" required>
            </div>
            <div class="form-group">
              <label for="phone">Phone <span class="required">*</span></label>
              <input type="tel" id="phone" name="phone" placeholder="(555) 123-4567" required>
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label for="contact_method">Preferred Contact Method</label>
              <select id="contact_method" name="contact_method">
                <option value="">— Select —</option>
                <option value="phone">Phone Call</option>
                <option value="text">Text Message</option>
                <option value="email">Email</option>
              </select>
            </div>
            <div class="form-group">
              <label for="best_time">Best Time to Reach</label>
              <input type="text" id="best_time" name="best_time" placeholder="e.g., Weekdays 9-5">
            </div>
          </div>

          <div class="form-group">
            <label for="inquiry_type">Type of Inquiry <span class="required">*</span></label>
            <select id="inquiry_type" name="inquiry_type" required>
              <option value="">— Select —</option>
              <option value="repair">Computer Repair</option>
              <option value="virus">Virus / Malware Removal</option>
              <option value="network">Network Setup / Issues</option>
              <option value="data">Data Recovery</option>
              <option value="remote">Remote Support</option>
              <option value="cloud">Cloud / Backup Solutions</option>
              <option value="business">Business IT Support</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div class="form-group">
            <label for="message">How Can We Help? <span class="required">*</span></label>
            <textarea id="message" name="message" placeholder="Please describe your issue or what you need help with..." required></textarea>
          </div>

          <button type="submit" class="btn btn--primary btn--lg" style="width: 100%;">Submit Request</button>
          <div class="form-message"></div>
        </form>
      </div>

      <!-- Contact Info Sidebar -->
      <div class="contact-info-cards fade-in fade-in-delay-1">
        <div class="contact-info-card">
          <h4><i class="ph-bold ph-phone"></i> Call or Text</h4>
          <p>Need immediate help? We actually answer.</p>
          <p><a href="tel:+18134732334" style="font-size: var(--text-lg);">(813) 473-2334</a></p>
          <p style="font-size: var(--text-xs); color: var(--color-gray-400);">Mon–Fri: 8:00 AM – 6:00 PM ET</p>
        </div>

        <div class="contact-info-card">
          <h4><i class="ph-bold ph-envelope-simple"></i> Email Us</h4>
          <p>Send your questions or project details.</p>
          <p><a href="mailto:contact@zachscomputerservices.com">contact@zachscomputerservices.com</a></p>
          <p style="font-size: var(--text-xs); color: var(--color-gray-400);">Typical reply: ~1 business hour</p>
        </div>

        <div class="contact-info-card">
          <h4><i class="ph-bold ph-monitor"></i> Remote Support</h4>
          <p>Secure remote help to fix issues fast.</p>
          <p><a href="<?php echo esc_url(home_url('/contact/')); ?>" style="font-weight: 600;">Start Remote Session &rarr;</a></p>
          <p style="font-size: var(--text-xs); color: var(--color-gray-400);">Available during business hours</p>
        </div>

        <div class="emergency-banner">
          <i class="ph-bold ph-warning-circle"></i>
          <div>
            <h4>Emergency After-Hours Support</h4>
            <p>For critical outages or security incidents outside business hours, call <a href="tel:+18134732334" style="font-weight: 700; color: #78350f;">(813) 473-2334</a> and follow the prompts. We're available 24/7 for emergencies.</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

<?php get_footer();

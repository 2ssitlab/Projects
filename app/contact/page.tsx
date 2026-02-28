'use client';

import { useState, FormEvent } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    setStatus('sending');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();

      if (res.ok) {
        setMessage(data.message ?? "Thank you! We'll get back to you within 30 minutes during business hours.");
        setStatus('success');
        form.reset();
      } else {
        setMessage(data.error ?? 'Something went wrong. Please try again or call (813) 473-2334.');
        setStatus('error');
      }
    } catch {
      setMessage("Thank you for your message! We'll be in touch shortly.");
      setStatus('success');
      form.reset();
    }

    setTimeout(() => {
      setStatus('idle');
      setMessage('');
    }, 8000);
  }

  return (
    <>
      <section className="page-hero page-hero--contact">
        <div className="container">
          <span className="section-label">Get In Touch</span>
          <h1>Contact Us</h1>
          <p>Fast, friendly, reliable computer help. We typically respond within 30 minutes during business hours.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-form-card fade-in">
              <h3 style={{ marginBottom: 'var(--space-2)' }}>Request a Quote or Schedule Service</h3>
              <p style={{ color: 'var(--color-gray-500)', marginBottom: 'var(--space-6)', fontSize: 'var(--text-sm)' }}>Tell us what you need — same-day reply with a clear plan and transparent pricing.</p>

              <form id="zcs-contact-form" method="post" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="first_name">First Name <span className="required">*</span></label>
                    <input type="text" id="first_name" name="first_name" placeholder="Your first name" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="last_name">Last Name <span className="required">*</span></label>
                    <input type="text" id="last_name" name="last_name" placeholder="Your last name" required />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="client_type">Business or Residential <span className="required">*</span></label>
                  <select id="client_type" name="client_type" required>
                    <option value="">— Select —</option>
                    <option value="residential">Residential</option>
                    <option value="business">Business</option>
                  </select>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email <span className="required">*</span></label>
                    <input type="email" id="email" name="email" placeholder="you@example.com" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone <span className="required">*</span></label>
                    <input type="tel" id="phone" name="phone" placeholder="(555) 123-4567" required />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="contact_method">Preferred Contact Method</label>
                    <select id="contact_method" name="contact_method">
                      <option value="">— Select —</option>
                      <option value="phone">Phone Call</option>
                      <option value="text">Text Message</option>
                      <option value="email">Email</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="best_time">Best Time to Reach</label>
                    <input type="text" id="best_time" name="best_time" placeholder="e.g., Weekdays 9-5" />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="inquiry_type">Type of Inquiry <span className="required">*</span></label>
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

                <div className="form-group">
                  <label htmlFor="message">How Can We Help? <span className="required">*</span></label>
                  <textarea id="message" name="message" placeholder="Please describe your issue or what you need help with..." required></textarea>
                </div>

                <button type="submit" className="btn btn--primary btn--lg" style={{ width: '100%' }} disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending...' : 'Submit Request'}
                </button>
                {message && (
                  <div className={`form-message ${status === 'error' ? 'error' : 'success'}`}>
                    {message}
                  </div>
                )}
              </form>
            </div>

            <div className="contact-info-cards fade-in fade-in-delay-1">
              <div className="contact-info-card">
                <h4><i className="ph-bold ph-phone"></i> Call or Text</h4>
                <p>Need immediate help? We actually answer.</p>
                <p><a href="tel:+18134732334" style={{ fontSize: 'var(--text-lg)' }}>(813) 473-2334</a></p>
                <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-gray-400)' }}>Mon–Fri: 8:00 AM – 6:00 PM ET</p>
              </div>

              <div className="contact-info-card">
                <h4><i className="ph-bold ph-envelope-simple"></i> Email Us</h4>
                <p>Send your questions or project details.</p>
                <p><a href="mailto:contact@zachscomputerservices.com">contact@zachscomputerservices.com</a></p>
                <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-gray-400)' }}>Typical reply: ~1 business hour</p>
              </div>

              <div className="contact-info-card">
                <h4><i className="ph-bold ph-monitor"></i> Remote Support</h4>
                <p>Secure remote help to fix issues fast.</p>
                <p><Link href="/contact" style={{ fontWeight: 600 }}>Start Remote Session →</Link></p>
                <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-gray-400)' }}>Available during business hours</p>
              </div>

              <div className="emergency-banner">
                <i className="ph-bold ph-warning-circle"></i>
                <div>
                  <h4>Emergency After-Hours Support</h4>
                  <p>For critical outages or security incidents outside business hours, call <a href="tel:+18134732334" style={{ fontWeight: 700, color: '#78350f' }}>(813) 473-2334</a> and follow the prompts. We&apos;re available 24/7 for emergencies.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import Link from 'next/link';

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="section-label">Legal</span>
          <h1>Privacy Policy</h1>
          <p>How we handle your information at Zach&apos;s Computer Services.</p>
        </div>
      </section>

      <section className="section">
        <div className="container container--narrow">
          <div className="fade-in">
            <p>This page is a placeholder. Please add your privacy policy content here or link to an external document.</p>
            <p><Link href="/" className="btn btn--primary">Back to Home</Link></p>
          </div>
        </div>
      </section>
    </>
  );
}

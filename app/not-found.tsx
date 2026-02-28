import Link from 'next/link';

export default function NotFound() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Page Not Found</h1>
          <p>The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
        </div>
      </section>

      <section className="section">
        <div className="container text-center">
          <p style={{ fontSize: 'var(--text-lg)', marginBottom: 'var(--space-8)' }}>Let&apos;s get you back on track.</p>
          <div className="cta-buttons" style={{ justifyContent: 'center' }}>
            <Link href="/" className="btn btn--primary btn--lg">Go to Homepage</Link>
            <Link href="/contact" className="btn btn--outline btn--lg">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}

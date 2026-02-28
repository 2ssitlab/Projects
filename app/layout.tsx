import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollTop from '@/components/ScrollTop';
import ClientScripts from '@/components/ClientScripts';

export const metadata: Metadata = {
  title: "Zach's Computer Services | Tampa Bay IT & Computer Repair",
  description: "Fast, friendly & affordable computer repair in Tampa Bay. Expert IT services including virus removal, data recovery, network setup & 24/7 support. Call (813) 473-2334.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('zcs-theme');if(t==='dark'||(t!=='light'&&matchMedia('(prefers-color-scheme:dark)').matches)){document.documentElement.setAttribute('data-theme','dark')}})();`,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://unpkg.com/@phosphor-icons/web@2.0.3/src/regular/style.css" rel="stylesheet" />
        <link href="https://unpkg.com/@phosphor-icons/web@2.0.3/src/bold/style.css" rel="stylesheet" />
      </head>
      <body>
        <Header />
        <main id="main-content" role="main">
          {children}
        </main>
        <Footer />
        <ScrollTop />
        <ClientScripts />
      </body>
    </html>
  );
}

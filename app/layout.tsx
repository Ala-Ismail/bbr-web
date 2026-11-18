import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/header';
import './globals.css';

export const metadata: Metadata = {
  title: { default: 'Aviation Case Study | BBR Aviation', template: '%s | BBR Aviation' },
  description: 'A technology and business white paper on the proposed BBR aviation flight-data recorder, its development risks and the case for prototype investment.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a href="#main" className="skip">Skip to content</a>
        <Header />
        {children}
        <footer className="site-footer">
          <div className="container footer-inner">
            <Link href="/" className="footer-brand">BBR Aviation</Link>
            <span>Aviation Case Study</span>
            <span>Research baseline · Verification pending</span>
          </div>
        </footer>
      </body>
    </html>
  );
}

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Layers3, Menu, X } from 'lucide-react';

const links = [
  ['/', 'Overview'],
  ['/technology', 'Technology'],
  ['/business', 'Business case'],
  ['/readback', 'Readback'],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const path = usePathname();

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark"><Layers3 size={21} strokeWidth={1.7} aria-hidden="true" /></span>
          <span>BBR <span className="brand-subtitle">AVIATION SYSTEMS</span></span>
        </Link>
        <button type="button" className="menu-toggle" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="navigation" onClick={() => setOpen(!open)}>
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
        <nav id="navigation" className={open ? 'open' : undefined} aria-label="Main navigation">
          {links.map(([href, title]) => (
            <Link key={href} href={href} aria-current={path === href ? 'page' : undefined} onClick={() => setOpen(false)}>{title}</Link>
          ))}
        </nav>
        <span className="report-status">Research baseline</span>
      </div>
    </header>
  );
}

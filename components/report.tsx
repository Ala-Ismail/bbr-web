import type { ReactNode } from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

export const chapters = [
  { href: '/technology', title: 'Technology', description: 'Recording architecture, storage assumptions and engineering risks.' },
  { href: '/business', title: 'Business case', description: 'Potential adopters, delivery options and the evidence needed to justify investment.' },
  { href: '/development', title: 'Development', description: 'Decision gates from requirements through prototype and qualification planning.' },
  { href: '/readback', title: 'Readback', description: 'Interactive appendix for inspecting and exporting synthetic flight data.' },
];

export function ReportPage({ label, title, summary, contents, children }: {
  label: string;
  title: string;
  summary: string;
  contents: { id: string; label: string }[];
  children: ReactNode;
}) {
  return (
    <main id="main" className="container">
      <header className="report-heading">
        <Link className="breadcrumb" href="/">White paper overview</Link>
        <p className="eyebrow">{label}</p>
        <h1>{title}</h1>
        <p className="lede">{summary}</p>
      </header>
      <div className="report-grid">
        <aside className="report-aside">
          <nav aria-label="On this page">
            <h2>On this page</h2>
            {contents.map(({ id, label }) => <a href={`#${id}`} key={id}>{label}</a>)}
          </nav>
        </aside>
        <div className="report-content">{children}</div>
      </div>
    </main>
  );
}

export function ChapterLink({ href, children }: { href: string; children: ReactNode }) {
  return <Link className="chapter-link" href={href}>{children}<ArrowRight size={17} aria-hidden="true" /></Link>;
}

export function ChapterList() {
  return (
    <ul className="chapter-list">
      {chapters.map(({ href, title, description }) => (
        <li key={href}>
          <Link href={href}>
            <span><strong>{title}</strong><small>{description}</small></span>
            <ArrowUpRight size={19} aria-hidden="true" />
          </Link>
        </li>
      ))}
    </ul>
  );
}

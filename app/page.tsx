import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import Architecture from '@/components/architecture';
import { ChapterLink, ChapterList } from '@/components/report';

const metrics = [
  ['25', 'h', 'Continuous retention target'],
  ['175', 'kB/s', 'Stored-stream ceiling'],
  ['16', 'GiB', 'Minimum usable archive'],
  ['2', 'MiB', 'Mirrored staging capacity'],
];

export default function Home() {
  return (
    <main id="main" className="container">
      <section className="cover" aria-labelledby="cover-title">
        <div className="cover-copy">
          <p className="eyebrow cover-kicker">Technology &amp; business white paper</p>
          <h1 id="cover-title">Flight Data<br className="desktop-break" /> Recorder<br className="desktop-break" /> Assessment</h1>
          <p className="lede">This BBR aviation case study assesses FPGA-based continuous capture, independent recovery and the case for prototype investment.</p>
          <div className="cover-actions">
            <a className="button primary" href="#executive-summary">Read the assessment <ArrowDown size={17} aria-hidden="true" /></a>
            <Link className="chapter-link" href="/technology">Technical architecture <ArrowUpRight size={16} aria-hidden="true" /></Link>
          </div>
        </div>
        <figure className="cover-figure">
          <Image src="/images/assessment-hangar.webp" alt="Front three-quarter view of a passenger jet parked in a maintenance hangar" width={1536} height={1024} preload />
          <figcaption>AI-generated illustration of a civil aviation maintenance hangar.</figcaption>
        </figure>
      </section>

      <section className="baseline" aria-labelledby="baseline-title">
        <h2 id="baseline-title" className="eyebrow">Engineering planning baseline</h2>
        <dl>
          {metrics.map(([value, unit, label]) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{value} <span>{unit}</span></dd>
            </div>
          ))}
        </dl>
      </section>

      <div className="overview-grid">
        <aside className="report-aside">
          <nav aria-label="Report contents">
            <h2>In this report</h2>
            <a href="#executive-summary">Executive summary</a>
            <a href="#other-applications">Applications beyond aviation</a>
            <a href="#chapters">Assessment chapters</a>
            <a href="#architecture">Recording path</a>
          </nav>
        </aside>
        <div className="report-content">
          <section id="executive-summary" className="report-section">
            <h2>Executive summary</h2>
            <p className="lead-copy">BBR proposes continuous recording of aircraft instrument and system data. The design combines scheduled FPGA acquisition, persistent staging and a NAND archive with a separately developed extraction and decoding path.</p>
            <p>Aviation is one case study for the broader BBR recording architecture. The same approach could support other fields that need a traceable record of equipment behaviour before, during and after an event.</p>
            <p>At the planning ceiling of 175,000 bytes per second, 25 hours of data requires approximately 14.67 GiB. The proposed 16 GiB usable archive covers that scenario on paper. Sustained throughput, power-loss recovery, crash protection and installation feasibility still require evidence.</p>
            <div className="assessment-note">
              <h3>Decision for the next phase</h3>
              <p>Select one target aircraft and a partner who can provide interface data and test access. Use that input to scope a bench prototype and estimate integration, qualification and support costs.</p>
            </div>
            <p className="fine-print">Scope covers instrument and aircraft-system data. Cockpit voice, audio and video are outside the current study.</p>
          </section>
          <section id="other-applications" className="report-section">
            <h2>Applications beyond aviation</h2>
            <p>In mining, a BBR deployment could capture haul-truck or fixed-plant telemetry to help teams review equipment stoppages. In strategic asset management, it could preserve time-stamped condition and usage histories to inform maintenance and replacement decisions. In industrial operations, it could retain process variables and alarms for downtime analysis.</p>
            <p>Each application would need its own data sources, retention targets, environmental requirements and recovery tests. The figures in this paper describe the aviation planning scenario.</p>
            <ChapterLink href="/business#other-sectors">Review the cross-sector adoption hypotheses</ChapterLink>
          </section>
          <section id="chapters" className="report-section">
            <h2>Assessment chapters</h2>
            <ChapterList />
          </section>
          <section id="architecture" className="report-section">
            <h2>Proposed recording path</h2>
            <p>Select a stage to review its role in the recording chain.</p>
            <Architecture />
            <ChapterLink href="/technology#architecture">View the top-level architecture diagram</ChapterLink>
          </section>
        </div>
      </div>
    </main>
  );
}

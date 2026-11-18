import Image from 'next/image';
import type { Metadata } from 'next';
import { ArrowUpRight } from 'lucide-react';
import Architecture from '@/components/architecture';
import { ChapterLink, ReportPage } from '@/components/report';

export const metadata: Metadata = {
  title: 'Technology assessment',
  description: 'Assess the proposed BBR recording architecture, storage model and aircraft integration risks.',
};

const specs = [
  ['FPGA', 'MAX 10 · 10M50DAF484I7G', '75 MHz core target. Fit and timing require implementation evidence.'],
  ['Persistent staging', '2 × 16 Mbit F-RAM', '2 MiB logical after mirroring, including 0.5 MiB reserved for metadata.'],
  ['NAND archive', '32 GiB raw / 16 GiB usable', 'Usable capacity must account for reserves, bad blocks and error correction.'],
  ['Stored data rate', '175,000 bytes/s', '140,000 bytes/s reference rate plus a 25% planning allowance.'],
  ['Retention', '25 hours', 'Requires 14.67 GiB at the modelled rate. Continuous operation requires testing.'],
  ['Storage addressing', '64-bit logical', 'Proposed addressing contract for the aviation format.'],
];

export default function Technology() {
  return (
    <ReportPage
      label="Technology assessment"
      title="Recording architecture"
      summary="A proposed continuous data path for aircraft instruments and systems, from protected acquisition to recoverable storage and independent extraction."
      contents={[
        { id: 'architecture', label: 'Top-level architecture' },
        { id: 'aircraft', label: 'Aircraft integration' },
        { id: 'specifications', label: 'Planning assumptions' },
        { id: 'recovery', label: 'Storage and recovery' },
      ]}
    >
      <section id="architecture" className="report-section">
        <h2>Top-level architecture</h2>
        <p>Acquisition adapters identify and time-stamp samples. Scheduled queues feed the FPGA chunk framer, which packages values with sequence, time and quality information. The storage controller manages staging, archive writes and restart recovery.</p>
        <figure className="report-figure">
          <a href="/images/aviation-bbr-top-level.png" aria-label="Open the full-size BBR architecture diagram">
            <Image src="/images/aviation-bbr-top-level.png" alt="Block diagram of aircraft data flowing through FPGA acquisition, scheduling and framing into mirrored F-RAM staging and a NAND archive. A separate path connects the archive to ground recovery tools." width={3600} height={2160} />
          </a>
          <figcaption><span><strong>Figure 1.</strong> BBR top-level architecture, research baseline.</span><a href="/images/aviation-bbr-top-level.png">Open full-size diagram <ArrowUpRight size={15} aria-hidden="true" /></a></figcaption>
        </figure>
        <Architecture />
      </section>
      <section id="aircraft" className="report-section">
        <h2>Aircraft integration</h2>
        <p>Aircraft interfaces may supply flight and navigation measurements, engine and system data, and crew-control states. For the selected aircraft, the parameter dictionary must specify each source, unit, sampling schedule, accuracy, validity and age limit.</p>
        <p>The installation assessment must also address protected inputs, power and reset behaviour, time correlation, mounting and maintenance access. Aircraft-specific buses, physical connections and the approval basis remain open.</p>
      </section>
      <section id="specifications" className="report-section">
        <h2>Planning assumptions</h2>
        <table className="assessment-table">
          <thead><tr><th scope="col">Item</th><th scope="col">Planning value</th><th scope="col">Assessment basis</th></tr></thead>
          <tbody>
            {specs.map(([item, value, basis]) => <tr key={item}><th scope="row">{item}</th><td>{value}</td><td>{basis}</td></tr>)}
          </tbody>
        </table>
      </section>
      <section id="recovery" className="report-section">
        <h2>Storage and recovery</h2>
        <p>With 1.5 MiB available for data, empty staging holds roughly nine seconds at the modelled rate. Test repeated archive stalls, ageing media and resets with staging already occupied to establish how much margin is available in operation.</p>
        <p>Staging sits outside the candidate crash enclosure, so an impact could leave the newest data outside the protected archive. Define the allowable loss and use fault-injection and hardware testing to measure the recoverable record under an agreed set of failures.</p>
        <figure className="report-figure">
          <Image src="/images/assessment-recorder.webp" alt="Conceptual orange recorder enclosure beside an FPGA evaluation board and electrical test probes" width={1400} height={788} />
          <figcaption><span><strong>Figure 2.</strong> AI-generated hardware concept. Enclosure, connectors and board layout are illustrative.</span></figcaption>
        </figure>
        <ChapterLink href="/readback">Explore the proposed readback workflow</ChapterLink>
      </section>
    </ReportPage>
  );
}

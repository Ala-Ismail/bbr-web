import type { Metadata } from 'next';
import Readback from '@/components/readback';
import { ChapterLink, ReportPage } from '@/components/report';
import './readback.css';

export const metadata: Metadata = {
  title: 'Readback demonstration',
  description: 'Inspect and export synthetic samples in a browser-based demonstration of the proposed BBR readback workflow.',
};

export default function ReadbackPage() {
  return (
    <ReportPage
      label="Interactive appendix"
      title="Readback demonstration"
      summary="A browser-based example of the proposed ground workflow. Inspect parameter identity, elapsed time, units and source quality using synthetic flight data."
      contents={[
        { id: 'workstation', label: 'Interactive workstation' },
        { id: 'workflow', label: 'Proposed recovery workflow' },
      ]}
    >
      <section id="workstation" className="report-section workstation-section">
        <h2>Interactive workstation</h2>
        <p>Select a parameter and scrub to minutes 27 through 30 to inspect a simulated source outage. Export the synthetic samples as CSV or switch to the system view to trace the proposed interfaces.</p>
        <Readback />
      </section>
      <section id="workflow" className="report-section">
        <h2>Proposed recovery workflow</h2>
        <ol className="workflow-list">
          <li><strong>Extract retained chunks.</strong> The physical readout interface and access rules remain open. Recorder tests must demonstrate that maintenance access preserves required recording continuity.</li>
          <li><strong>Decode from the versioned schema.</strong> Resolve parameter identity, engineering units, time and quality using the dictionary for that record format.</li>
          <li><strong>Review and export.</strong> Keep missing intervals visible in analysis and preserve the quality flags in exported data.</li>
        </ol>
        <ChapterLink href="/technology#recovery">Review the storage and recovery design</ChapterLink>
      </section>
    </ReportPage>
  );
}

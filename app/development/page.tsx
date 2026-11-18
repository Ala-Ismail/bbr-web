import type { Metadata } from 'next';
import { ChapterLink, ReportPage } from '@/components/report';

export const metadata: Metadata = {
  title: 'Development and verification',
  description: 'A phased plan for selecting an aircraft basis, validating a bench prototype and preparing installation and qualification evidence.',
};

const phases = [
  {
    id: 'p0', label: 'P0', title: 'Agree the requirements',
    body: 'Select a target aircraft, operating context and approval basis. Confirm parameter sources, rates, accuracy and retention. Establish the format, recovery and maintenance-readout contracts.',
    evidence: 'A reviewed applicability matrix, controlled parameter dictionary and agreement on the maximum acceptable data loss.',
  },
  {
    id: 'p1', label: 'P1', title: 'Verify the bench prototype',
    body: 'Implement acquisition, timing, quality flags, persistent staging and archive recovery. Build an independent decoder and exercise the complete data path at the required load.',
    evidence: 'Independently checked data traces, full-duration retention runs, rollover continuity, archive-stall tests and measured recovery after injected faults.',
  },
  {
    id: 'p2', label: 'P2', title: 'Assess installation and qualification',
    body: 'Integrate representative aircraft interfaces and check FPGA fit, timing, power, storage endurance and installation constraints. Begin qualification planning alongside earlier phases.',
    evidence: 'Reproducible implementation reports, measured hardware results and environmental, crash-survivability and installation evidence against the agreed basis.',
  },
];

export default function Development() {
  return (
    <ReportPage
      label="Development and verification"
      title="What the prototype must prove"
      summary="Three proposed gates link engineering work to the decisions to build, integrate and pursue qualification."
      contents={phases.map(({ id, label, title }) => ({ id, label: `${label} · ${title}` }))}
    >
      {phases.map(({ id, label, title, body, evidence }) => (
        <section id={id} key={id} className="report-section">
          <p className="eyebrow">{label} · Proposed gate</p>
          <h2>{title}</h2>
          <p>{body}</p>
          <div className="assessment-note">
            <h3>Evidence required to proceed</h3>
            <p>{evidence}</p>
          </div>
        </section>
      ))}
      <ChapterLink href="/technology#specifications">Review the engineering planning assumptions</ChapterLink>
    </ReportPage>
  );
}

import type { Metadata } from 'next';
import { ChapterLink, ReportPage } from '@/components/report';

export const metadata: Metadata = {
  title: 'Business assessment',
  description: 'Evaluate potential adopters, delivery options, cost drivers and the evidence required before investing in BBR.',
};

export default function Business() {
  return (
    <ReportPage
      label="Business assessment"
      title="The case for prototype investment"
      summary="The proposed recorder could make flight data easier to recover and interpret. The business case depends on aircraft integration effort, the approval pathway and whether prospective users value that capability enough to change their existing workflow."
      contents={[
        { id: 'adoption', label: 'Adoption hypotheses' },
        { id: 'other-sectors', label: 'Applications in other sectors' },
        { id: 'routes', label: 'Delivery options' },
        { id: 'economics', label: 'Cost and value drivers' },
        { id: 'decision', label: 'Funding decision' },
      ]}
    >
      <section id="adoption" className="report-section">
        <h2>Adoption hypotheses</h2>
        <p>Aircraft manufacturers and avionics integrators could assess BBR as a recorder subsystem. Operators and maintenance organisations could assess the readback workflow for troubleshooting and engineering review. For either use case, a partner would need to identify a problem with its current process and provide access to representative data and interfaces.</p>
        <p className="fine-print">The repository provides an engineering study. Customer demand, pricing, partner participation and commercial terms remain unvalidated.</p>
      </section>
      <section id="other-sectors" className="report-section">
        <h2>Applications in other sectors</h2>
        <table className="assessment-table">
          <thead><tr><th scope="col">Potential application</th><th scope="col">What BBR could record</th><th scope="col">What to establish first</th></tr></thead>
          <tbody>
            <tr><th scope="row">Mining</th><td>Equipment telemetry, operating states and alarms around haulage or fixed-plant stoppages.</td><td>Access to machine data, installation durability and a useful recovery window.</td></tr>
            <tr><th scope="row">Strategic asset management</th><td>Condition measurements, duty cycles and operating hours to inform maintenance and replacement decisions.</td><td>Consistent asset identifiers, integration with asset records and the history needed for each decision.</td></tr>
            <tr><th scope="row">Industrial operations</th><td>Time-aligned controller states, process measurements and alarms for downtime analysis.</td><td>Signal access, clock alignment and a way to recover data after a power or controller interruption.</td></tr>
          </tbody>
        </table>
        <p>The reusable design concept is continuous capture with timestamps, source and quality metadata, and independent readout. Feasibility and value would need to be assessed for each deployment.</p>
      </section>
      <section id="routes" className="report-section">
        <h2>Delivery options</h2>
        <table className="assessment-table">
          <thead><tr><th scope="col">Option</th><th scope="col">Potential value</th><th scope="col">Evidence needed</th></tr></thead>
          <tbody>
            <tr><th scope="row">Integrated recorder subsystem</th><td>Fit the recording path to one aircraft programme and its maintenance workflow.</td><td>Interface access, installation feasibility, and agreement on approval and ongoing support responsibilities.</td></tr>
            <tr><th scope="row">Recorder and readback reference design</th><td>Give an avionics partner a starting point for FPGA implementation and independent decoding.</td><td>Confirm who owns hardware, qualification and lifecycle support. Test whether reuse reduces the partner’s verification effort.</td></tr>
          </tbody>
        </table>
      </section>
      <section id="economics" className="report-section">
        <h2>Cost and value drivers</h2>
        <p>Estimate non-recurring design and qualification costs separately from recurring hardware, installation and support costs. The first estimate should cover protected interfaces, storage endurance and crash protection, aircraft testing, and maintenance of the decoder and parameter dictionary.</p>
        <p>Use a partner’s current workflow as the comparison. Measure technician time to extract and decode a recording, the effort to diagnose missing samples, and the fraction of required parameters recovered under agreed test conditions.</p>
      </section>
      <section id="decision" className="report-section">
        <h2>Funding decision</h2>
        <div className="assessment-note">
          <h3>Fund requirements discovery first</h3>
          <p>Approve a bench prototype once a partner supplies a representative parameter set, agrees an acceptance test, identifies the approval owner and can support an initial cost estimate for one aircraft installation.</p>
        </div>
        <ChapterLink href="/development">Review the development and verification gates</ChapterLink>
      </section>
    </ReportPage>
  );
}

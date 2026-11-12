# BBR aviation website: proposed look and structure

**Status:** Website design proposal; implementation pending  
**Content baseline:** [Aviation BBR design](Aviation_BBR_design.md)  
**Deployment intent:** Source hosted on GitHub; website deployed through Vercel

## 1. Purpose and audience

Create a modern engineering website that introduces BBR's proposed aviation flight-data recorder, explains its architecture and gives readers a clear view of development progress. The site should feel precise, credible and ambitious while making the current research and prototype status easy to understand.

Primary audiences are aerospace engineers, aircraft-system integrators, research collaborators and prospective development partners. Visitors should quickly understand what BBR records, how the proposed recording path works and which capabilities still require implementation and verification.

The first release is a public project showcase with technical depth. A live aircraft dashboard, account system and recorder download portal are outside the initial scope.

## 2. Visual direction

### Overall appearance

Use an aviation instrumentation aesthetic: a deep navy background, warm white typography, restrained cyan highlights and fine technical lines. Pair spacious editorial sections with compact specification panels. The result should resemble a polished aerospace engineering product site rather than a busy cockpit display.

The opening view should contain a strong headline on the left and a realistic generated aviation image on the right, or as a carefully cropped background with a readable text overlay. Use a civil transport aircraft in a believable airport or flight environment, with natural lighting and accurate aircraft proportions. Support the hero with a separate aircraft-to-BBR interface illustration described below. Do not present a concept rendering as a photograph of manufactured hardware.

Avoid stock-photo carousels, excessive glowing effects, decorative gauges and unexplained telemetry. Technical graphics should explain the recorder or its data path.

### Required generated aviation imagery

Generate original, realistic aviation images for the implemented website. Use a consistent photographic direction: credible civil aviation settings, natural materials, restrained colour grading and physically plausible lighting. Avoid science-fiction aircraft, invented airline branding, distorted wings or engines, illegible cockpit labels and decorative holographic interfaces.

| Asset | Proposed composition | Purpose and treatment |
|---|---|---|
| Hero aviation image | A realistic civil transport aircraft at dawn or dusk, with clear negative space for the headline | Establish the aviation context; use a generic unbranded aircraft and preserve text contrast |
| Aircraft-to-BBR interface illustration | A realistic aircraft cutaway or technical perspective with cockpit instruments, avionics/data acquisition, recorder electronics and proposed protected memory location | Explain the proposed system relationships using precise SVG/HTML labels and connectors over the generated image |
| Recorder installation concept | A plausible avionics equipment environment with an explicitly conceptual recorder enclosure and protected storage assembly | Support the technology page; caption as a generated installation concept, not an existing BBR product or approved installation |

Generate the photographic or cutaway base as a raster asset. Add all technical labels, arrows, legends and status notes separately in SVG or HTML so they remain accurate, legible and accessible. Do not rely on image-generated text for engineering information.

Inspect generated images before use for aircraft geometry, cockpit realism, enclosure scale and connector plausibility. Export responsive image sizes and use descriptive alternative text. Identify generated technical scenes as concept illustrations in their captions; no image establishes hardware readiness or installation approval.

### How the aircraft-to-BBR illustration should work

Show the proposed relationship between the aircraft and recorder in an aircraft overview, followed by a close-up of the recording path:

1. **Aircraft sources:** Flight instruments, air-data and inertial/navigation sources, engine/system measurements and crew-control or discrete states, subject to the selected parameter dictionary.
2. **Aircraft interfaces and acquisition:** Protected bus receivers or source adapters feeding the acquisition system. Exact buses, electrical interfaces and upstream DSP responsibilities remain to be selected; do not imply BBR connects directly to every sensor.
3. **BBR recording logic:** Parameter/source identification, validity, external time correlation, bounded buffering and continuous chunk framing in the proposed FPGA path.
4. **Persistent storage:** Mirrored F-RAM staging followed by the NAND archive in a proposed crash-survivable memory unit.
5. **Maintenance and recovery:** A separate extraction/decoder path, with control and health connections distinguished from recorded-data flow.

Use solid arrows for recorded data and dashed arrows for time, control and health. Identify power supervision separately. Label the complete illustration **“Proposed aircraft interface architecture — aircraft-specific interfaces and installation pending.”** Physical component placement is illustrative; do not imply an approved mounting location, wiring route or aircraft integration.

Keep the aircraft overview simple enough to understand at a glance. Use a separate detailed diagram for component-level connections, and stack the explanatory stages on mobile.

### Proposed palette

| Role | Colour | Use |
|---|---|---|
| Main background | `#070D18` | Hero, navigation and footer |
| Raised surface | `#101C2E` | Architecture modules and specification cards |
| Alternate background | `#0B1423` | Section rhythm |
| Primary text | `#F2F5FA` | Headings and important content |
| Secondary text | `#A8B7CC` | Descriptions and supporting labels |
| Cyan accent | `#58D9EE` | Links, active states and recording paths |
| Amber accent | `#F2B66B` | Proposed targets and pending decisions |
| Divider | `#26364D` | Borders, tables and diagram connections |

Check contrast in implementation, including small text and disabled states. Status must always be communicated with text as well as colour.

### Typography and layout

- Use a clean sans-serif such as Geist Sans for body text and headings, with a monospace companion for component codes and specifications. Self-host fonts through the application build.
- Set large, confident headings with short line lengths. Keep paragraphs readable at approximately 60–75 characters per line.
- Use a centred content container around 1,200 px wide, generous section spacing and a consistent spacing scale.
- Prefer thin borders and subtle surface changes over heavy shadows. Use modest corner radii for panels and controls.
- Keep the wordmark typographic initially: **BBR**, accompanied by “Aviation Flight Data” where space permits. Do not invent an expansion of BBR without confirmation.

### Motion

Use brief fades, gentle diagram highlights and clear hover feedback. An optional data-path animation should illustrate source-to-storage flow without implying a connection to operating hardware. Respect reduced-motion settings and keep essential information visible without animation.

## 3. Information architecture

Launch with one complete landing page and a dedicated technical overview page. Keep the main narrative concise and place detailed architecture explanations on the technical page.

| Route | Purpose |
|---|---|
| `/` | Project introduction, proposed capabilities, architecture summary and development status |
| `/technology` | Recording path, planning specifications, recovery principles and engineering boundaries |
| `/development` | Development phases, verification gates and unresolved design inputs |
| `/contact` | Collaboration enquiry details, once an approved contact destination is supplied |

The contact route can be deferred until real contact information is available. Do not ship a form that silently discards submissions. Navigation should expose only completed pages.

### Global navigation

Left: BBR wordmark, linking to the home page.  
Right: Overview, Technology, Development and a “Discuss the project” action when contact is configured.

Use a compact sticky header with an opaque or lightly translucent dark background. On mobile, provide a labelled menu button with keyboard support and a clear expanded state.

### Footer

Include the wordmark, a one-sentence project description, page links and a short development-status statement. Add a public GitHub link only after the intended repository is confirmed. Avoid linking visitors to private source documents as if they were publicly accessible.

## 4. Home-page structure

### 4.1 Hero: explain the project immediately

**Eyebrow:** “AVIATION FLIGHT-DATA RECORDING”  
**Proposed headline:** “Every parameter. A continuous record.”  
**Supporting copy:** “BBR is an FPGA-based recorder foundation being developed toward continuous capture, persistent storage and independent recovery of aircraft instrument and system data.”

Primary action: **Explore the architecture** → `/technology`  
Secondary action: **View development plan** → `/development`

Include a visible status label: **Proposed aviation architecture · Implementation and qualification pending**.

The hero image should establish a realistic aviation setting. Follow it with the generated aircraft cutaway and labelled interface illustration showing aircraft inputs flowing through acquisition, the FPGA recording path, mirrored staging and a retained archive. Label technical scenes as concept illustrations. Avoid invented live values, aircraft identities or operating indicators.

### 4.2 Planning-target strip

Show four concise specifications directly below the hero:

| Display | Supporting label |
|---|---|
| 25 hours | Proposed minimum continuous retention |
| 175 kB/s | Complete stored-stream planning ceiling |
| Mirrored F-RAM | Persistent staging before archive commit |
| Independent readout | Planned extraction and decoding |

Introduce the strip as **Engineering planning targets**. These figures are allocations from the design study, not measured performance results.

### 4.3 What BBR records

Explain the scope in three concise panels:

1. **Instrument and sensor data:** Numerical measurements, acquisition time and source identity.
2. **Aircraft-system states:** Discrete states, commanded and measured values, and applicable displayed indications.
3. **Data quality and recorder health:** Validity, missing-data intervals, time quality and recording faults.

Add a short scope note: “This proposal covers flight-data recording. Cockpit voice, audio and video recording are outside scope.”

### 4.4 Architecture: from aircraft input to retained evidence

Use a labelled diagram with a short explanation for each stage:

`Aircraft sources → Protected acquisition → FPGA recording path → Mirrored F-RAM → NAND archive → Independent decoder`

Show external time and health supervision as supporting paths. On desktop, use a horizontal or two-row arrangement; on mobile, stack the stages vertically. The complete explanation must remain available without hover interactions.

Include an action linking to the technical overview.

### 4.5 Engineering principles

Use four panels that explain intended behaviour:

- **Continuous capture:** Required recording should continue across chunk rollover and optional event markers.
- **Recoverable storage:** Short committed chunks and persistent staging are intended to support recovery after interruption.
- **Explicit data quality:** Missing or stale inputs should remain identifiable in the recorded stream.
- **Independent extraction:** A documented format and separate decoder should enable recovery without the normal host interface.

Use proposed or intended language until the corresponding capability has evidence.

### 4.6 Development status

Show an ordered roadmap rather than an unsupported completion percentage:

1. Aircraft applicability and parameter definition.
2. Versioned continuous-stream architecture.
3. Prototype implementation and behavioural verification.
4. Hardware integration, sustained recording and power-loss testing.
5. Qualification and installation evidence against an agreed approval basis.

The aviation design study is the available baseline. Do not mark implementation milestones complete without repository evidence. Explain that qualification planning begins early, even though final evidence depends on implemented hardware.

### 4.7 Closing collaboration section

**Proposed heading:** “Define the next stage of flight-data recording.”

Invite discussion of aircraft interfaces, acquisition requirements, storage recovery and verification. Link to the configured contact destination when available; otherwise link to the development plan. Do not invent customers, partner logos, endorsements or testimonials.

## 5. Technology page

Provide a readable technical narrative with an on-page section index:

1. **Scope and status:** Instrument-data recorder proposal and its relationship to the existing BBR event recorder.
2. **Acquisition and time:** Parameter dictionaries, source identity, deterministic scheduling, timestamps and validity.
3. **Continuous recording:** Bounded queues, stream framing, short recoverable chunks and optional event markers.
4. **Persistent staging and archive:** Mirrored F-RAM, NAND commit, reconciliation and recovery.
5. **Independent readout:** Extraction, schema-aware decoding and engineering-unit export.
6. **Planning specifications:** The table below, with explicit status labels.
7. **Verification boundaries:** What remains to be implemented and demonstrated.

| Item | Proposed baseline | Presentation note |
|---|---|---|
| FPGA | MAX 10 `10M50DAF484I7G` | Planning selection; aviation fit pending |
| Core clock | 75 MHz | Retained design target |
| Persistent staging | Two 16-Mbit F-RAM devices | 4 MiB physical; 2 MiB mirrored logical capacity |
| Staging allocation | 1.5 MiB for pending records per mirror | Remaining capacity reserved for metadata and recovery |
| Archive | 32 GiB raw NAND | At least 16 GiB usable is a design requirement |
| Stored-stream ceiling | 175,000 bytes/s | Includes proposed format and diagnostic allowance |
| Retention | At least 25 hours | Capacity arithmetic supports the target; sustained operation unverified |
| Storage addressing | 64-bit logical contract | Proposed aviation format |

Keep detailed arithmetic and requirement identifiers in expandable technical sections where helpful. Explain acronyms on first use. Describe the crash-survivable memory unit as proposed; no crash qualification or aircraft approval is established.

## 6. Development page

Organise work around the design study's P0, P1 and P2 dependencies:

| Phase | Focus | Evidence expected |
|---|---|---|
| P0: Define | Aircraft basis, parameters and stream contract | Agreed applicability matrix, dictionary and architecture |
| P1: Build and verify | Continuous recording, time, validity, storage and decoding | Independent decoding, continuity tests and fault-recovery results |
| P2: Integrate and qualify | FPGA fit, power, media, enclosure and assurance | Timing/resource reports, hardware tests and applicable qualification evidence |

Include the major open inputs: target aircraft, parameter schedule, allowed tail loss, exact NAND/ECC configuration, power hold-up and physical memory protection.

If verification results are published later, identify the tested configuration, date, method and limits. Keep prototype results distinct from equipment authorization and installation approval.

## 7. Content and credibility rules

- Treat `Aviation_BBR_design.md` as the source for the initial engineering narrative. The website design document does not change the recorder requirements.
- Label planned capabilities, calculated capacities and measured results distinctly.
- Do not describe BBR as certified, flight-ready, crash-qualified or compliant with a named standard without supporting evidence for that exact claim.
- Keep the current event recorder and proposed continuous aviation variant clearly identified.
- Present 25 hours as the project's provisional retention target. Aircraft-specific legal applicability remains unresolved.
- Do not infer that industrial-grade components establish aviation qualification or that an FPGA alone establishes system reliability.
- Keep legal and standards discussion concise. Any published regulatory detail needs source and currency verification during implementation.
- Do not publish private repository material, personal contact details or unavailable downloads without an approved public destination.

## 8. Responsive design and accessibility

- Design for mobile first, including narrow screens around 360 px wide.
- Stack hero content and architecture stages on small screens; keep primary actions visible and easy to activate.
- Convert dense specifications into labelled stacked rows where needed. Avoid horizontal page scrolling.
- Provide semantic headings, landmarks, descriptive links, visible keyboard focus and a skip-to-content link.
- Supply text equivalents for diagrams and useful alternative text for meaningful imagery.
- Keep essential content accessible without JavaScript. Support reduced motion and adequate target sizes.
- Verify contrast, keyboard navigation, menu behaviour and screen-reader labels before release.

## 9. Proposed implementation and deployment

Use Next.js with TypeScript and a small reusable component set. Tailwind CSS is a reasonable styling choice. Use static rendering for the initial informational pages; introduce server functionality only if a real contact or other dynamic requirement needs it.

Suggested source structure:

```text
app/
  layout.tsx
  page.tsx
  technology/page.tsx
  development/page.tsx
  globals.css
components/
  site-header.tsx
  site-footer.tsx
  architecture-diagram.tsx
  planning-targets.tsx
  development-roadmap.tsx
content/
  site.ts
public/
  diagrams/
```

Centralise planning specifications and status copy to keep repeated values consistent. Set page titles, descriptions, social previews, a sitemap and appropriate indexing metadata. Keep fonts and visual assets local, compress imagery and avoid heavy animation libraries for simple effects.

The intended workflow is GitHub source control connected to a Vercel project, with preview deployments for review and a production branch selected during setup. Confirm the repository, Vercel project and domain before deployment configuration. No account names, production domain or integration credentials are assumed here.

## 10. Proposed first-release acceptance criteria

- The landing page explains the project, recording scope, proposed architecture and development status without requiring the technical document.
- Technology and development pages provide consistent details and functioning navigation.
- Every public specification matches the approved content baseline and carries an appropriate status.
- The interface works on mobile and desktop, with accessible navigation and readable technical diagrams.
- All actions have real destinations; there are no placeholder testimonials, fabricated results or nonfunctional contact forms.
- The production build passes, and the main routes and interactions are checked in a browser.
- GitHub and Vercel deployment configuration is documented when implemented.

This proposal is ready to guide the website build once the visual direction and first-release scope are selected.

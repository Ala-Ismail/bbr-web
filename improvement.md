# BBR Aviation white paper improvements

The website now presents BBR as a research-stage technology and business assessment. It draws on [the aviation BBR design study](Aviation_BBR_design.md) and the [top-level architecture diagram](public/images/aviation-bbr-top-level.png) supplied for the technology chapter.

## Report structure

| Route | Reader question |
| --- | --- |
| [Overview](app/page.tsx) | What is BBR, what does the planning model show, and what decision comes next? |
| [Technology](app/technology/page.tsx) | How does the proposed recording chain work, and which assumptions require tests? |
| [Business case](app/business/page.tsx) | Who could adopt it, what could be delivered, and what evidence would justify funding? |
| [Readback](app/readback/page.tsx) | How might engineers inspect source quality, identify missing data and export samples? |

The overview opens with retention, throughput and storage assumptions, followed by the executive summary and chapter index. The chapter pages use a shared editorial layout with section navigation, figure captions and evidence tables. The interactive recording path and readback demonstration remain available. The report also includes print styles for reading or saving individual chapters.

## Applications beyond aviation

Aviation is one case study for BBR. The overview and business chapter describe potential uses in mining, strategic asset management and industrial operations. Each example connects a recording need to a practical decision and identifies the data, integration or recovery evidence needed to evaluate it. The aviation sizing figures apply to the scenario assessed in this paper.

## Figures

- The [fixed-wing UAV cover](public/images/assessment-uav.webp) and [recorder workbench figure](public/images/assessment-recorder.webp) were made with the built-in ImageGen tool and saved as WebP. The UAV illustrates a potential application. The engineering baseline uses a civil fixed-wing transport scenario. [Generation prompts](public/images/ASSETS.md)
- The [supplied top-level architecture diagram](public/images/aviation-bbr-top-level.png) appears as Figure 1 in the technology assessment, with a link to the original PNG for reading detailed labels.

## Evidence limits and next decision

At 175,000 bytes per second, 25 hours requires approximately 14.67 GiB. The proposed 16 GiB usable archive covers that calculation. Retention under sustained load, archive-stall tolerance, power-loss recovery, crash protection and installation feasibility still require direct evidence.

Potential adopters and delivery options are hypotheses. The business chapter identifies cost drivers and proposes a first funding gate based on one target aircraft, representative data, a partner-supported acceptance test and an initial integration estimate. The next phase should use those inputs to decide whether to fund a bench prototype.

## Local checks

Run `npm run typecheck` and `npm run build` from the repository root. The production build generates the static report in `out/`.

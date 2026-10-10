import { companyData } from '../data/companyData.js';

export function renderCompanyOverview() {
  const { overview } = companyData;
  return `
    <section class="overview-section section-padding" id="overview" aria-labelledby="overview-title">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">${overview.sectionTag}</span>
          <h2 class="section-title" id="overview-title">${overview.title}</h2>
          <p class="section-subtitle">
            A manufacturing framework grounded in consistency, sanitary engineering, and transparent commercial governance.
          </p>
        </div>

        <div class="overview-grid">
          <!-- Left: Editorial Narrative -->
          <div class="overview-editorial">
            <div class="overview-paragraphs">
              ${overview.editorialCopy.map(para => `<p>${para}</p>`).join('')}
            </div>

            <div class="overview-image-box">
              <img 
                src="${overview.image}" 
                alt="${overview.imageAlt}" 
                width="720" 
                height="405" 
                loading="lazy"
              />
              <div class="overview-image-caption">
                <span>FIG. 02 — ${overview.caption}</span>
              </div>
            </div>
          </div>

          <!-- Right: Verified Corporate & Operational Facts -->
          <div class="overview-data-panel">
            <div class="data-panel-header">
              <span class="data-panel-title">Corporate Governance & Status</span>
              <span class="tech-badge accent">VERIFIED RECORD</span>
            </div>

            <div class="governance-list">
              ${overview.governanceDetails.map(item => `
                <div class="governance-item">
                  <span class="governance-label">${item.label}</span>
                  <span class="governance-value">${item.value}</span>
                </div>
              `).join('')}
            </div>

            <div style="padding: 1.25rem; background: var(--color-surface-subtle); border-top: 1px solid var(--color-border);">
              <p style="font-size: var(--text-xs); color: var(--color-ink-muted); margin-bottom: 0.75rem; font-family: var(--font-mono);">
                NOTICE: Detailed manufacturing throughput capacities, batch schedules, and private-label agreements are reviewed under standard commercial inquiry.
              </p>
              <a href="#enquiry" class="btn btn-secondary btn-sm" style="width: 100%;">
                <span>Request Commercial Discussion</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

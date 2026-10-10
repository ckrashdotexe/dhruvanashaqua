import { companyData } from '../data/companyData.js';

export function renderManufacturingCapabilities() {
  const { manufacturing } = companyData;
  return `
    <section class="manufacturing-section section-padding" id="manufacturing" aria-labelledby="manufacturing-title">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">${manufacturing.sectionTag}</span>
          <h2 class="section-title" id="manufacturing-title">${manufacturing.title}</h2>
          <p class="section-subtitle">${manufacturing.subtitle}</p>
        </div>

        <!-- Hero Industrial Banner -->
        <div class="mfg-hero-banner">
          <img 
            src="${manufacturing.heroImage}" 
            alt="${manufacturing.heroImageAlt}" 
            width="1200" 
            height="500" 
            loading="lazy"
          />
          <div class="mfg-banner-caption">
            <span>FIG. 03 — ${manufacturing.heroCaption}</span>
            <span class="tech-badge">CONTROLLED ENVIRONMENT</span>
          </div>
        </div>

        <!-- 6-Phase Chronological Workflow Grid -->
        <div class="workflow-grid" role="region" aria-label="Manufacturing Workflow Phases">
          ${manufacturing.workflowSteps.map(step => `
            <div class="workflow-card">
              <div>
                <div class="workflow-card-top">
                  <span class="workflow-step-num">${step.stepNumber}</span>
                  <span class="tech-badge accent">${step.tag}</span>
                </div>
                <h3 class="workflow-title" style="margin-top: 1rem; margin-bottom: 0.75rem;">${step.title}</h3>
                <p class="workflow-desc">${step.description}</p>
              </div>
              <div style="font-family: var(--font-mono); font-size: 0.7rem; color: var(--color-ink-subtle); border-top: 1px dashed var(--color-border); padding-top: 0.6rem;">
                STATUS: COMMISSIONING STANDARD
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Technical Engineering Specifications Table -->
        <div class="tech-specs-container">
          <div class="tech-specs-title">Sanitary & Operational Baseline Specifications</div>
          <div class="specs-grid">
            ${manufacturing.technicalNotes.map(note => `
              <div class="spec-cell">
                <span class="spec-key">${note.key}</span>
                <span class="spec-val">${note.value}</span>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </section>
  `;
}

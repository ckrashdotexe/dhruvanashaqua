import { companyData } from '../data/companyData.js';

export function renderQualityCompliance() {
  const { quality } = companyData;
  return `
    <section class="quality-section section-padding" id="quality" aria-labelledby="quality-title">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">${quality.sectionTag}</span>
          <h2 class="section-title" id="quality-title">${quality.title}</h2>
          <p class="section-subtitle">${quality.subtitle}</p>
        </div>

        <div class="quality-grid">
          <!-- Laboratory Photography Box -->
          <div class="quality-media-box">
            <img 
              src="${quality.image}" 
              alt="${quality.imageAlt}" 
              width="700" 
              height="440" 
              loading="lazy"
            />
            <div class="hero-image-caption">
              <span>FIG. 04 — ${quality.caption}</span>
              <span class="tech-badge">LAB TESTING REGIME</span>
            </div>
          </div>

          <!-- Quality Protocols Column -->
          <div class="protocols-column">
            ${quality.protocols.map(p => `
              <div class="protocol-card">
                <div class="protocol-header">
                  <span class="protocol-code">${p.code}</span>
                  <span class="protocol-freq">${p.frequency}</span>
                </div>
                <h3 class="protocol-title">${p.title}</h3>
                <p class="protocol-detail">${p.details}</p>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Statutory Compliance Notice Box (Strictly truthful, no fake certificates) -->
        <div class="compliance-box">
          <div class="compliance-content">
            <span class="compliance-status">${quality.statutoryNotice.status}</span>
            <h3 class="compliance-title">${quality.statutoryNotice.heading}</h3>
            <p class="compliance-note">${quality.statutoryNotice.note}</p>
          </div>
          <button 
            type="button" 
            class="btn btn-secondary btn-sm" 
            id="btn-request-compliance-records"
            style="white-space: nowrap;"
          >
            <span>${quality.statutoryNotice.actionText}</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
        </div>
      </div>
    </section>
  `;
}

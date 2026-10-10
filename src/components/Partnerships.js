import { companyData } from '../data/companyData.js';

export function renderPartnerships() {
  const { partnerships } = companyData;
  return `
    <section class="partnerships-section section-padding" id="partnerships" aria-labelledby="partnerships-title">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">${partnerships.sectionTag}</span>
          <h2 class="section-title" id="partnerships-title">${partnerships.title}</h2>
          <p class="section-subtitle">${partnerships.subtitle}</p>
        </div>

        <!-- 4 B2B Commercial Channels -->
        <div class="streams-grid">
          ${partnerships.streams.map(stream => `
            <div class="stream-card">
              <div class="stream-header">
                <span class="tech-badge">${stream.badge}</span>
                <h3 class="stream-title">${stream.title}</h3>
                <p class="stream-desc">${stream.description}</p>
              </div>

              <div class="stream-features">
                ${stream.features.map(f => `
                  <div class="feature-item">
                    <span>${f}</span>
                  </div>
                `).join('')}
              </div>

              <div style="padding-top: 1rem;">
                <a href="#enquiry" class="btn btn-secondary btn-sm" style="width: 100%;">
                  <span>Discuss Commercial Partnership</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Commercial Onboarding Flow -->
        <div class="commercial-steps-rail" role="region" aria-label="Commercial Onboarding Workflow">
          <div class="comm-step">
            <span class="comm-step-idx">STEP 01</span>
            <h4 class="comm-step-title">Enquiry & Scoping</h4>
            <p class="comm-step-desc">Submit distribution territory or institutional volume requirements.</p>
          </div>
          <div class="comm-step">
            <span class="comm-step-idx">STEP 02</span>
            <h4 class="comm-step-title">Sampling & Specs</h4>
            <p class="comm-step-desc">Sample evaluation, packaging format confirmation, and logistics review.</p>
          </div>
          <div class="comm-step">
            <span class="comm-step-idx">STEP 03</span>
            <h4 class="comm-step-title">Trade Agreement</h4>
            <p class="comm-step-desc">Margin structures, territory terms, and formal supply documentation.</p>
          </div>
          <div class="comm-step">
            <span class="comm-step-idx">STEP 04</span>
            <h4 class="comm-step-title">Scheduled Dispatch</h4>
            <p class="comm-step-desc">Palletized order fulfillment with batch documentation and traceability.</p>
          </div>
        </div>
      </div>
    </section>
  `;
}

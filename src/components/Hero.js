import { companyData } from '../data/companyData.js';

export function renderHero() {
  const { hero } = companyData;
  return `
    <section class="hero-section hero-backdrop-section" id="hero" aria-labelledby="hero-title">
      <!-- Background Image with Dimmed Cinematic Overlay -->
      <div class="hero-bg-container" aria-hidden="true">
        <img 
          src="${hero.image}" 
          alt="" 
          class="hero-bg-image" 
          loading="eager" 
          fetchpriority="high"
        />
        <div class="hero-bg-dimmer"></div>
        <div class="hero-bg-vignette"></div>
      </div>

      <div class="container hero-backdrop-content">
        <!-- Centered Header & Subheader Over Dimmed Photo -->
        <div class="hero-center-box">
          <div class="hero-eyebrow-backdrop">
            <span class="eyebrow-pulse" aria-hidden="true"></span>
            <span>${hero.eyebrow}</span>
          </div>
          
          <h1 class="hero-title-backdrop" id="hero-title">
            Built Around Quality.<br />
            <span class="hero-title-backdrop-sub">Focused on Every Detail.</span>
          </h1>
          
          <p class="hero-description-backdrop">
            ${hero.paragraph}
          </p>
          
          <div class="hero-actions-backdrop">
            <a href="#products" class="btn btn-backdrop-primary">
              <span>Explore Products</span>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>

            <a href="#manufacturing" class="btn btn-backdrop-secondary">
              <span>Manufacturing Architecture</span>
            </a>
            
            <a href="#enquiry" class="btn btn-backdrop-accent">
              <span>Business Enquiry</span>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
            </a>
          </div>
        </div>

        <!-- Integrated Cinematic Status Rail (Frosted Glass / Industrial Dark) -->
        <div class="hero-backdrop-status-bar">
          <div class="backdrop-status-cell">
            <span class="cell-label-light">FACILITY METALLURGY</span>
            <span class="cell-val-light">SS316L / SS304 Food Grade</span>
          </div>
          <div class="backdrop-status-cell">
            <span class="cell-label-light">WATER TREATMENT</span>
            <span class="cell-val-light">Multi-Barrier RO + UV + O3</span>
          </div>
          <div class="backdrop-status-cell">
            <span class="cell-label-light">LINE INTEGRITY</span>
            <span class="cell-val-light">Automated Capping & Optical QC</span>
          </div>
          <div class="backdrop-status-cell">
            <span class="cell-label-light">COMMERCIAL READINESS</span>
            <span class="cell-val-light">Open for B2B Supply & Distribution</span>
          </div>
        </div>

        <!-- Industrial Key Pillars Rail (Centered & Compact) -->
        <div class="hero-backdrop-pillars" role="region" aria-label="Key Operational Pillars">
          ${hero.stats.map(stat => `
            <div class="hero-pillar-item-backdrop">
              <span class="pillar-code-backdrop">${stat.code}</span>
              <h2 class="pillar-title-backdrop">${stat.title}</h2>
              <p class="pillar-detail-backdrop">${stat.detail}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

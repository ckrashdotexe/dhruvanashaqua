import { companyData } from '../data/companyData.js';

export function renderHero() {
  const { hero } = companyData;
  return `
    <section class="hero-section hero-cinematic" id="hero" aria-labelledby="hero-title">
      <div class="container">
        <!-- Centered Cinematic Header -->
        <div class="hero-center-content">
          <div class="hero-eyebrow-center">
            <span class="eyebrow-pulse" aria-hidden="true"></span>
            <span>${hero.eyebrow}</span>
          </div>
          
          <h1 class="hero-title-center" id="hero-title">
            Built Around Quality.<br />
            <span class="hero-title-sub">Focused on Every Detail.</span>
          </h1>
          
          <p class="hero-description-center">
            ${hero.paragraph}
          </p>
          
          <div class="hero-actions-center">
            <a href="#products" class="btn btn-primary">
              <span>Explore Products</span>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>

            <a href="#manufacturing" class="btn btn-secondary">
              <span>Manufacturing Architecture</span>
            </a>
            
            <a href="#enquiry" class="btn btn-mineral">
              <span>Business Enquiry</span>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
            </a>
          </div>
        </div>

        <!-- Centered Cinematic Photography Frame -->
        <div class="hero-cinematic-frame">
          <div class="cinematic-image-wrapper">
            <img 
              src="${hero.image}" 
              alt="${hero.imageAlt}"
              width="1120" 
              height="480" 
              loading="eager"
              fetchpriority="high"
              class="cinematic-hero-img"
            />
            <div class="cinematic-gradient-overlay" aria-hidden="true"></div>
            
            <!-- Filmic Corner Badges -->
            <div class="cinematic-meta-overlay">
              <span class="cinematic-tag">FIG. 01 — AUTOMATED MONOBLOC FACILITY</span>
              <span class="cinematic-tag-right">ENCLOSED CLEANROOM &bull; POSITIVE AIR PRESSURE</span>
            </div>
          </div>
          
          <div class="cinematic-status-bar">
            <div class="status-cell">
              <span class="cell-label">FACILITY METALLURGY</span>
              <span class="cell-val">SS316L / SS304 Food Grade</span>
            </div>
            <div class="status-cell">
              <span class="cell-label">WATER TREATMENT</span>
              <span class="cell-val">Multi-Barrier RO + UV + O3</span>
            </div>
            <div class="status-cell">
              <span class="cell-label">LINE INTEGRITY</span>
              <span class="cell-val">Automated Capping & Optical QC</span>
            </div>
            <div class="status-cell">
              <span class="cell-label">COMMERCIAL STATUS</span>
              <span class="cell-val">Open for B2B Supply & Distribution</span>
            </div>
          </div>
        </div>

        <!-- Industrial Key Pillars Rail (Centered & Compact) -->
        <div class="hero-rail-compact" role="region" aria-label="Key Operational Pillars">
          ${hero.stats.map(stat => `
            <div class="hero-rail-item-compact">
              <span class="rail-code">${stat.code}</span>
              <h2 class="rail-title-compact">${stat.title}</h2>
              <p class="rail-detail-compact">${stat.detail}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

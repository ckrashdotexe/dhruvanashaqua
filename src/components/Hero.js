import { companyData } from '../data/companyData.js';

export function renderHero() {
  const { hero } = companyData;
  return `
    <section class="hero-section" id="hero" aria-labelledby="hero-title">
      <div class="container">
        <div class="hero-grid">
          <!-- Editorial Text Column -->
          <div class="hero-content">
            <span class="hero-eyebrow">
              <span style="display: inline-block; width: 6px; height: 6px; background-color: var(--color-mineral); margin-right: 0.5rem; border-radius: 1px;"></span>
              ${hero.eyebrow}
            </span>
            
            <h1 class="hero-title" id="hero-title">
              ${hero.headline}
            </h1>
            
            <p class="hero-description">
              ${hero.paragraph}
            </p>
            
            <div class="hero-actions">
              <a href="#manufacturing" class="btn btn-primary">
                <span>${hero.ctaPrimary}</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
              
              <a href="#enquiry" class="btn btn-secondary">
                <span>${hero.ctaSecondary}</span>
              </a>

              <button type="button" class="btn btn-secondary btn-sm" id="hero-btn-spec-summary" style="padding: 0.72rem 1.1rem;">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                <span>Facility Summary</span>
              </button>
            </div>
          </div>

          <!-- Editorial Photography Frame -->
          <div class="hero-media-wrapper">
            <div class="hero-image-frame">
              <img 
                src="${hero.image}" 
                alt="${hero.imageAlt}"
                width="800" 
                height="500" 
                loading="eager"
                fetchpriority="high"
              />
              <div class="hero-image-caption">
                <span>FIG. 01 — AUTOMATED CLEANROOM FACILITY</span>
                <span class="tech-badge">VERIFIED FACILITY ARCHITECTURE</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Industrial Key Pillars Rail -->
        <div class="hero-rail" role="region" aria-label="Key Operational Pillars">
          ${hero.stats.map(stat => `
            <div class="hero-rail-item">
              <span class="rail-code">${stat.code}</span>
              <h2 class="rail-title">${stat.title}</h2>
              <p class="rail-detail">${stat.detail}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

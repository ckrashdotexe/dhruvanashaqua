import { companyData } from '../data/companyData.js';

export function renderCompanyOverview() {
  const { overview } = companyData;
  return `
    <section class="overview-section section-padding" id="overview" aria-labelledby="overview-title">
      <div class="container">
        <!-- Centered Section Header -->
        <div class="section-header">
          <span class="section-tag">${overview.sectionTag}</span>
          <h2 class="section-title" id="overview-title">An Industrial Standard for Modern Beverage Production.</h2>
          <p class="section-subtitle">
            Dhruvansh Aqua LLP is built on process repeatability, sanitary cleanroom standards, and uncompromising quality assurance across every batch.
          </p>
        </div>

        <!-- 3 Core Foundational Pillars (Centered, Compact, Professional) -->
        <div class="about-pillars-grid">
          <div class="about-pillar-card">
            <div class="pillar-idx">01 / SANITARY DISCIPLINE</div>
            <h3 class="pillar-title">Cleanroom Engineering</h3>
            <p class="pillar-desc">
              All filling and container handling occurs under positive-pressure HEPA-filtered cleanroom air, with food-grade stainless steel (SS316L) contact metallurgy and automated CIP circuits.
            </p>
          </div>

          <div class="about-pillar-card">
            <div class="pillar-idx">02 / PROCESS REPEATABILITY</div>
            <h3 class="pillar-title">Consistent Batch Integrity</h3>
            <p class="pillar-desc">
              From raw water conditioning through automated rotary filling and calibrated magnetic capping, every operational phase is verified to eliminate batch-to-batch variation.
            </p>
          </div>

          <div class="about-pillar-card">
            <div class="pillar-idx">03 / COMMERCIAL RELIABILITY</div>
            <h3 class="pillar-title">B2B Supply Governance</h3>
            <p class="pillar-desc">
              Formed as an Indian Limited Liability Partnership (LLP), our enterprise is structured to fulfill long-term supply agreements for regional distributors, modern retail, and corporate institutions.
            </p>
          </div>
        </div>

        <!-- Centered Architectural Facility Spotlight -->
        <div class="about-facility-spotlight">
          <div class="spotlight-image-frame">
            <img 
              src="${overview.image}" 
              alt="${overview.imageAlt}" 
              width="1120" 
              height="450" 
              loading="lazy"
              class="spotlight-img"
            />
            <div class="spotlight-caption">
              <span>FIG. 02 — ${overview.caption}</span>
              <span class="tech-badge">HIGH-PRESSURE RO DESALINATION &bull; MULTI-BARRIER PURIFICATION</span>
            </div>
          </div>

          <!-- Centered Governance Status Rail -->
          <div class="about-governance-bar">
            ${overview.governanceDetails.slice(0, 4).map(item => `
              <div class="gov-cell">
                <span class="gov-label">${item.label.toUpperCase()}</span>
                <span class="gov-val">${item.value}</span>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </section>
  `;
}

import { companyData } from '../data/companyData.js';

export function renderProductPortfolio() {
  const { products } = companyData;
  return `
    <section class="products-section section-padding" id="products" aria-labelledby="products-title">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">${products.sectionTag}</span>
          <h2 class="section-title" id="products-title">${products.title}</h2>
          <p class="section-subtitle">${products.subtitle}</p>
        </div>

        <!-- Category Filter Tabs -->
        <div class="products-filter-bar" role="tablist" aria-label="Product Category Filter">
          <button type="button" class="filter-tab-btn active" data-filter="all" role="tab" aria-selected="true">
            ALL CATEGORIES (03)
          </button>
          ${products.categories.map(cat => `
            <button type="button" class="filter-tab-btn" data-filter="${cat.id}" role="tab" aria-selected="false">
              ${cat.name.toUpperCase()}
            </button>
          `).join('')}
        </div>

        <!-- Product Cards Showcase -->
        <div class="product-cards-container" id="product-cards-container">
          ${products.categories.map((category, index) => {
            const isReversed = index % 2 === 1;
            return `
              <article class="product-card-row ${isReversed ? 'reversed' : ''}" data-category="${category.id}">
                <!-- Product Media Column -->
                <div class="product-media-column">
                  <div class="product-badge-overlay">
                    <span class="tech-badge">${category.categoryTag}</span>
                  </div>
                  <img 
                    src="${category.image}" 
                    alt="${category.imageAlt}" 
                    loading="lazy" 
                    width="600" 
                    height="450"
                  />
                </div>

                <!-- Product Details Column -->
                <div class="product-details-column">
                  <div class="product-header-block">
                    <span class="section-tag" style="margin-bottom: 0;">${category.name}</span>
                    <h3 class="product-category-name">${category.headline}</h3>
                    <p class="product-desc">${category.description}</p>
                  </div>

                  <!-- Available Packaging Formats Specification -->
                  <div class="packaging-formats-box">
                    <div class="formats-box-title">Available Packaging Formats & Applications</div>
                    <div class="formats-list">
                      ${category.packagingFormats.map(fmt => `
                        <div class="format-item">
                          <span class="format-size">${fmt.size}</span>
                          <span class="format-desc">${fmt.type} — <small style="color: var(--color-ink-subtle);">${fmt.notes}</small></span>
                        </div>
                      `).join('')}
                    </div>
                  </div>

                  <!-- Commercial Highlights List -->
                  <div>
                    <span style="font-family: var(--font-mono); font-size: var(--text-xs); color: var(--color-ink-subtle); text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 0.5rem;">
                      Production Standards:
                    </span>
                    <ul style="display: flex; flex-direction: column; gap: 0.35rem;">
                      ${category.commercialHighlights.map(highlight => `
                        <li style="display: flex; align-items: center; gap: 0.5rem; font-size: var(--text-xs); color: var(--color-ink);">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--color-mineral)" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                          <span>${highlight}</span>
                        </li>
                      `).join('')}
                    </ul>
                  </div>

                  <!-- Footer / Enquiry Action -->
                  <div class="product-footer-block">
                    <span class="tech-badge accent">COMMERCIAL ENQUIRY OPEN</span>
                    <button 
                      type="button" 
                      class="btn btn-primary btn-sm btn-product-enquire" 
                      data-preselect="${category.enquiryPreselect}"
                    >
                      <span>Inquire for ${category.name}</span>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </button>
                  </div>
                </div>
              </article>
            `;
          }).join('')}
        </div>

        <!-- Technical Disclaimer -->
        <div class="product-disclaimer-note">
          <strong>SPECIFICATION NOTE:</strong> ${products.disclaimer}
        </div>
      </div>
    </section>
  `;
}

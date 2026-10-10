import { companyData } from '../data/companyData.js';

export function renderProductPortfolio() {
  const { products } = companyData;
  return `
    <section class="products-section section-padding" id="products" aria-labelledby="products-title">
      <div class="container">
        <!-- Centered Section Header -->
        <div class="section-header">
          <span class="section-tag">${products.sectionTag}</span>
          <h2 class="section-title" id="products-title">Commercial Beverage Showcase.</h2>
          <p class="section-subtitle">
            A versatile manufacturing portfolio engineered for regional retail distribution, hospitality partnerships, and high-volume institutional supply.
          </p>
        </div>

        <!-- Centered Category Filter Tabs -->
        <div class="products-filter-bar-center" role="tablist" aria-label="Product Category Filter">
          <button type="button" class="filter-tab-btn active" data-filter="all" role="tab" aria-selected="true">
            ALL CATEGORIES (03)
          </button>
          ${products.categories.map(cat => `
            <button type="button" class="filter-tab-btn" data-filter="${cat.id}" role="tab" aria-selected="false">
              ${cat.name.toUpperCase()}
            </button>
          `).join('')}
        </div>

        <!-- 3-Column Product Showcase Grid (Compact, Professional & Centered) -->
        <div class="product-showcase-grid" id="product-cards-container">
          ${products.categories.map((category) => `
            <article class="showcase-card" data-category="${category.id}">
              <!-- Product Image Frame -->
              <div class="showcase-media-frame">
                <span class="showcase-badge">${category.categoryTag}</span>
                <img 
                  src="${category.image}" 
                  alt="${category.imageAlt}" 
                  loading="lazy" 
                  width="400" 
                  height="280"
                  class="showcase-img"
                />
              </div>

              <!-- Product Information -->
              <div class="showcase-content">
                <div class="showcase-header">
                  <span class="showcase-category-label">${category.name}</span>
                  <h3 class="showcase-title">${category.headline}</h3>
                  <p class="showcase-desc">${category.description}</p>
                </div>

                <!-- Technical Parameters Checklist -->
                <div class="showcase-specs">
                  <span class="specs-heading">Production Standards</span>
                  <ul class="specs-list">
                    ${category.commercialHighlights.map(h => `
                      <li class="specs-item">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--color-mineral)" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        <span>${h}</span>
                      </li>
                    `).join('')}
                  </ul>
                </div>

                <!-- Packaging Formats Pills -->
                <div class="showcase-formats">
                  <span class="formats-heading">Available Packaging Formats</span>
                  <div class="formats-tags-wrapper">
                    ${category.packagingFormats.map(fmt => `
                      <div class="format-tag-pill" title="${fmt.notes}">
                        <span class="tag-size">${fmt.size}</span>
                        <span class="tag-type">${fmt.type.split(' ')[0]}</span>
                      </div>
                    `).join('')}
                  </div>
                </div>

                <!-- Card Action Footer -->
                <div class="showcase-footer">
                  <button 
                    type="button" 
                    class="btn btn-primary btn-sm btn-product-enquire" 
                    data-preselect="${category.enquiryPreselect}"
                    style="width: 100%;"
                  >
                    <span>Inquire for ${category.name}</span>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </button>
                </div>
              </div>
            </article>
          `).join('')}
        </div>

        <!-- Technical Disclaimer (Centered) -->
        <div class="product-disclaimer-center">
          <strong>SPECIFICATION NOTE:</strong> ${products.disclaimer}
        </div>
      </div>
    </section>
  `;
}

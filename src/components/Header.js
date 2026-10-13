import { companyData } from '../data/companyData.js';

export function renderHeader() {
  return `
    <!-- Top Utility Operational Status Bar -->
    <div class="top-bar" id="top-bar">
      <div class="container-wide">
        <div class="top-bar-status">
          <span class="status-dot" aria-hidden="true"></span>
          <span>FACILITY STATUS: ${companyData.brand.operationalStatus.toUpperCase()}</span>
        </div>
        <div class="top-bar-items">
          <span>JURISDICTION: ${companyData.brand.jurisdiction.toUpperCase()}</span>
          <span style="opacity: 0.35;">|</span>
          <a href="#enquiry" class="top-bar-link">
            <span>B2B COMMERCIAL INQUIRIES OPEN</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
      </div>
    </div>

    <!-- Main Navigation Header -->
    <header class="site-header" id="site-header">
      <div class="container-wide header-container">
        <!-- Brand Wordmark -->
        <a href="#hero" class="brand-wordmark" aria-label="Dhruvansh Aqua LLP Home">
          <span class="brand-title">${companyData.brand.wordmark}</span>
          <span class="brand-subline">BEVERAGE MANUFACTURING</span>
        </a>

        <!-- Desktop Navigation: About, Capabilities, Products, Contact -->
        <nav class="nav-menu" aria-label="Main Navigation">
          <a href="#overview" class="nav-link" data-nav="overview">About</a>
          <a href="#manufacturing" class="nav-link" data-nav="manufacturing">Capabilities</a>
          <a href="#products" class="nav-link" data-nav="products">Products</a>
          <a href="#enquiry" class="nav-link" data-nav="enquiry">Contact</a>
        </nav>

        <!-- Header Actions -->
        <div class="header-actions">
          <button type="button" class="btn btn-secondary btn-sm" id="btn-open-spec-sheet" aria-haspopup="dialog">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>
            <span>Facility Sheet</span>
          </button>
          
          <a href="#enquiry" class="btn btn-primary btn-sm" id="header-enquiry-cta">
            <span>Business Enquiry</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>

          <!-- Mobile Toggle Button -->
          <button type="button" class="mobile-menu-toggle" id="mobile-menu-toggle" aria-expanded="false" aria-controls="mobile-drawer" aria-label="Toggle navigation menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>

    <!-- Mobile Slide-over Drawer -->
    <div class="mobile-drawer" id="mobile-drawer" aria-hidden="true">
      <nav class="mobile-nav-list" aria-label="Mobile Navigation">
        <a href="#overview" class="mobile-nav-link" data-mobile-nav="overview">
          <span>About Us</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
        </a>
        <a href="#manufacturing" class="mobile-nav-link" data-mobile-nav="manufacturing">
          <span>Manufacturing Capabilities</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
        </a>
        <a href="#products" class="mobile-nav-link" data-mobile-nav="products">
          <span>Product Portfolio</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
        </a>
        <a href="#enquiry" class="mobile-nav-link" data-mobile-nav="enquiry">
          <span>Contact &amp; Enquiry</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
        </a>
      </nav>

      <div class="mobile-drawer-footer">
        <button type="button" class="btn btn-secondary" id="mobile-btn-spec-sheet" style="width: 100%;">
          <span>View Facility Spec Sheet</span>
        </button>
        <a href="#enquiry" class="btn btn-primary" id="mobile-enquiry-cta" style="width: 100%;">
          <span>Submit Business Enquiry</span>
        </a>
      </div>
    </div>
  `;
}

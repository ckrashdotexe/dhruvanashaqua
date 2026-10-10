import { companyData } from '../data/companyData.js';

export function renderFooter() {
  const { brand } = companyData;
  const currentYear = new Date().getFullYear();

  return `
    <footer class="site-footer" id="site-footer" role="contentinfo">
      <div class="container-wide">
        <div class="footer-top-grid">
          <!-- Col 1: Wordmark & Corporate Profile -->
          <div class="footer-brand-col">
            <div>
              <div class="footer-wordmark">${brand.wordmark}</div>
              <div class="footer-descriptor">${brand.descriptor}</div>
            </div>
            <p class="footer-desc">
              Industrial beverage manufacturing enterprise specializing in packaged drinking water, fruit-based beverages, and carbonated soft drinks engineered for consistent quality.
            </p>
            <div class="footer-meta-text">
              <strong>Entity:</strong> ${brand.legalName}<br>
              <strong>Status:</strong> ${brand.entityType}<br>
              <strong>Jurisdiction:</strong> ${brand.jurisdiction}
            </div>
          </div>

          <!-- Col 2: Navigation Links -->
          <div>
            <div class="footer-col-title">Navigation</div>
            <ul class="footer-links-list">
              <li><a href="#overview" class="footer-link">About Us</a></li>
              <li><a href="#products" class="footer-link">Product Portfolio</a></li>
              <li><a href="#manufacturing" class="footer-link">Manufacturing Architecture</a></li>
              <li><a href="#quality" class="footer-link">Quality & Testing</a></li>
              <li><a href="#partnerships" class="footer-link">Commercial Partnerships</a></li>
              <li><a href="#enquiry" class="footer-link">Business Enquiry</a></li>
            </ul>
          </div>

          <!-- Col 3: Manufacturing Capabilities -->
          <div>
            <div class="footer-col-title">Production Lines</div>
            <ul class="footer-links-list">
              <li><a href="#products" class="footer-link">Packaged Drinking Water (PET/Jar)</a></li>
              <li><a href="#products" class="footer-link">Juice & Fruit Beverages</a></li>
              <li><a href="#products" class="footer-link">Carbonated Soft Drinks</a></li>
              <li><a href="#manufacturing" class="footer-link">Automated Monobloc Filling</a></li>
              <li><a href="#manufacturing" class="footer-link">Reverse Osmosis Filtration</a></li>
              <li><a href="#partnerships" class="footer-link">Contract Packaging Inquiries</a></li>
            </ul>
          </div>

          <!-- Col 4: Verified Corporate Desk & Compliance -->
          <div>
            <div class="footer-col-title">Commercial Desk</div>
            <div class="footer-links-list">
              <p class="footer-meta-text">
                Direct B2B distribution and commercial packaging inquiries are evaluated through our central desk.
              </p>
              <div style="margin-top: 0.5rem;">
                <a href="#enquiry" class="btn btn-secondary btn-sm" style="color: #FFFFFF; border-color: rgba(255, 255, 255, 0.25);">
                  <span>Submit Commercial Query</span>
                </a>
              </div>
              <p class="footer-meta-text" style="margin-top: 1rem; font-size: 0.72rem; color: #7B8F9C;">
                Registered office details and direct communication lines are published upon official verification.
              </p>
            </div>
          </div>
        </div>

        <!-- Footer Bottom Bar -->
        <div class="footer-bottom-bar">
          <div>
            &copy; ${currentYear} ${brand.legalName}. All rights reserved.
          </div>

          <div class="footer-legal-links">
            <button type="button" class="footer-legal-btn" data-legal="privacyPolicy">Commercial Privacy</button>
            <button type="button" class="footer-legal-btn" data-legal="termsOfSupply">Terms of Supply</button>
            <button type="button" class="footer-legal-btn" data-legal="complianceStatement">Quality Commitment</button>
            <button type="button" class="footer-legal-btn" id="footer-btn-inspector">Dev Submissions Log</button>
          </div>
        </div>
      </div>
    </footer>

    <!-- Back to Top Button -->
    <button type="button" class="back-to-top-btn" id="back-to-top-btn" aria-label="Back to top">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="18 15 12 9 6 15"></polyline></svg>
    </button>
  `;
}

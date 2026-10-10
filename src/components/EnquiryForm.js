import { companyData } from '../data/companyData.js';

export function renderEnquiryForm() {
  const { enquiry, brand } = companyData;
  return `
    <section class="enquiry-section section-padding" id="enquiry" aria-labelledby="enquiry-title">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">${enquiry.sectionTag}</span>
          <h2 class="section-title" id="enquiry-title">${enquiry.title}</h2>
          <p class="section-subtitle">${enquiry.subtitle}</p>
        </div>

        <div class="enquiry-layout">
          <!-- Left: Business Context & Communication Details -->
          <div class="enquiry-context">
            <div class="enquiry-direct-box">
              <span class="direct-box-title">Commercial Desk Engagement</span>
              <p style="font-size: var(--text-sm); color: var(--color-ink-muted);">
                Submitting an inquiry connects you directly with our commercial planning desk. We prioritize structured wholesale, distributorship, and institutional contracts.
              </p>

              <div class="direct-meta-list">
                <div class="direct-meta-item">
                  <span class="direct-meta-label">REGISTERED ENTITY</span>
                  <span class="direct-meta-val">${brand.legalName}</span>
                </div>
                <div class="direct-meta-item">
                  <span class="direct-meta-label">OPERATING JURISDICTION</span>
                  <span class="direct-meta-val">${brand.jurisdiction}</span>
                </div>
                <div class="direct-meta-item">
                  <span class="direct-meta-label">BUSINESS INQUIRY TIMELINE</span>
                  <span class="direct-meta-val">Initial commercial response within 1–2 business days</span>
                </div>
              </div>
            </div>

            <!-- Development Notice -->
            <div class="dev-fallback-notice">
              <strong>DEVELOPMENT INTEGRATION NOTE:</strong> Submissions are processed through our client-side storage handler and issue an instant Reference Confirmation Receipt. Connect your real backend webhook or SMTP endpoint in <code>src/data/companyData.js</code>.
            </div>

            <div style="background: var(--color-surface); border: 1px solid var(--color-border); padding: 1.25rem; border-radius: var(--radius-xs);">
              <span style="font-family: var(--font-mono); font-size: var(--text-xs); color: var(--color-ink-subtle); display: block; margin-bottom: 0.5rem;">
                ADMIN / TESTER UTILITY:
              </span>
              <button type="button" class="btn btn-secondary btn-sm" id="btn-inspect-submissions" style="width: 100%;">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>
                <span>Inspect Stored Submissions (<span id="stored-count-badge">0</span>)</span>
              </button>
            </div>
          </div>

          <!-- Right: Comprehensive B2B Form -->
          <div class="enquiry-form-card">
            <form id="business-enquiry-form" class="enquiry-form" novalidate>
              <!-- Name & Company Row -->
              <div class="form-grid-row">
                <div class="form-group">
                  <label for="enq-fullname" class="form-label">Full Name <span class="required">*</span></label>
                  <input 
                    type="text" 
                    id="enq-fullname" 
                    name="fullName" 
                    class="form-control" 
                    placeholder="e.g. Rajesh Kumar" 
                    required 
                    autocomplete="name"
                  />
                  <span class="form-error-msg" id="err-fullname">Please enter your contact name.</span>
                </div>

                <div class="form-group">
                  <label for="enq-company" class="form-label">Company / Business Name <span class="required">*</span></label>
                  <input 
                    type="text" 
                    id="enq-company" 
                    name="companyName" 
                    class="form-control" 
                    placeholder="e.g. Apex Beverages & Distribution" 
                    required 
                    autocomplete="organization"
                  />
                  <span class="form-error-msg" id="err-company">Please enter your company or business name.</span>
                </div>
              </div>

              <!-- Email & Phone Row -->
              <div class="form-grid-row">
                <div class="form-group">
                  <label for="enq-email" class="form-label">Business Email <span class="required">*</span></label>
                  <input 
                    type="email" 
                    id="enq-email" 
                    name="email" 
                    class="form-control" 
                    placeholder="name@company.com" 
                    required 
                    autocomplete="email"
                  />
                  <span class="form-error-msg" id="err-email">Please enter a valid business email address.</span>
                </div>

                <div class="form-group">
                  <label for="enq-phone" class="form-label">Phone / WhatsApp Number <span class="required">*</span></label>
                  <input 
                    type="tel" 
                    id="enq-phone" 
                    name="phone" 
                    class="form-control" 
                    placeholder="+91 98765 43210" 
                    required 
                    autocomplete="tel"
                  />
                  <span class="form-error-msg" id="err-phone">Please enter a valid phone number.</span>
                </div>
              </div>

              <!-- Business Nature & Category Row -->
              <div class="form-grid-row">
                <div class="form-group">
                  <label for="enq-business-type" class="form-label">Nature of Business</label>
                  <select id="enq-business-type" name="businessType" class="form-control">
                    ${enquiry.businessTypes.map(t => `<option value="${t}">${t}</option>`).join('')}
                  </select>
                </div>

                <div class="form-group">
                  <label for="enq-category" class="form-label">Primary Interest / Category <span class="required">*</span></label>
                  <select id="enq-category" name="category" class="form-control" required>
                    ${enquiry.enquiryTypes.map(c => `<option value="${c}">${c}</option>`).join('')}
                  </select>
                </div>
              </div>

              <!-- Estimated Volume -->
              <div class="form-group">
                <label for="enq-volume" class="form-label">Estimated Monthly Supply Requirement</label>
                <select id="enq-volume" name="volume" class="form-control">
                  ${enquiry.volumeTiers.map(v => `<option value="${v}">${v}</option>`).join('')}
                </select>
              </div>

              <!-- Message / Requirements -->
              <div class="form-group">
                <label for="enq-message" class="form-label">Specific Requirements / Territory Details <span class="required">*</span></label>
                <textarea 
                  id="enq-message" 
                  name="message" 
                  class="form-control" 
                  placeholder="Detail your target distribution region, required bottle formats (e.g. 500ml / 1L), expected delivery frequency, or private label scope..." 
                  required
                ></textarea>
                <span class="form-error-msg" id="err-message">Please provide a brief description of your requirements.</span>
              </div>

              <!-- Submit Row -->
              <div class="form-submit-row">
                <div class="form-compliance-notice">
                  By submitting, your commercial inquiry will be logged securely for review by Dhruvansh Aqua LLP.
                </div>
                <button type="submit" class="btn btn-primary" id="btn-submit-enquiry">
                  <span id="submit-btn-text">Submit Business Enquiry</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  `;
}

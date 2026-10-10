import { companyData } from '../data/companyData.js';

export function renderModals() {
  return `
    <!-- Modal: Confirmation Receipt -->
    <div class="modal-overlay" id="modal-receipt-overlay" role="dialog" aria-modal="true" aria-labelledby="receipt-modal-title">
      <div class="modal-dialog">
        <div class="modal-header">
          <div>
            <span class="tech-badge accent" style="margin-bottom: 0.25rem;">TRANSMISSION LOGGED</span>
            <h3 class="modal-title" id="receipt-modal-title">Enquiry Confirmation Receipt</h3>
          </div>
          <button type="button" class="modal-close-btn" data-close-modal="modal-receipt-overlay" aria-label="Close modal">&times;</button>
        </div>
        <div class="modal-body" id="receipt-modal-body">
          <!-- Dynamic Receipt Content Injected Here -->
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary btn-sm" id="btn-copy-ref-code">
            <span>Copy Reference Code</span>
          </button>
          <button type="button" class="btn btn-secondary btn-sm" id="btn-download-receipt">
            <span>Download Receipt (.txt)</span>
          </button>
          <button type="button" class="btn btn-primary btn-sm" data-close-modal="modal-receipt-overlay">
            <span>Done</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Modal: Facility Spec Sheet / Capability Summary -->
    <div class="modal-overlay" id="modal-spec-sheet-overlay" role="dialog" aria-modal="true" aria-labelledby="spec-sheet-modal-title">
      <div class="modal-dialog" style="max-width: 800px;">
        <div class="modal-header">
          <div>
            <span class="tech-badge" style="margin-bottom: 0.25rem;">TECHNICAL BRIEF</span>
            <h3 class="modal-title" id="spec-sheet-modal-title">Dhruvansh Aqua LLP — Facility & Operations Specification</h3>
          </div>
          <button type="button" class="modal-close-btn" data-close-modal="modal-spec-sheet-overlay" aria-label="Close modal">&times;</button>
        </div>
        <div class="modal-body">
          <div style="font-family: var(--font-mono); font-size: var(--text-xs); color: var(--color-ink-muted); line-height: 1.6; border-bottom: 1px solid var(--color-border); padding-bottom: 1rem;">
            DOCUMENT REF: DAL-OPS-SPEC-2026-V1 &bull; REVISION: COMMERCIAL READINESS &bull; STATUS: VALIDATED
          </div>

          <div style="display: flex; flex-direction: column; gap: 1.5rem; padding-top: 0.5rem;">
            <div>
              <h4 style="font-size: 1.05rem; margin-bottom: 0.5rem; color: var(--color-ink);">1. Enterprise Information</h4>
              <p style="font-size: var(--text-sm);">
                <strong>Entity:</strong> ${companyData.brand.legalName}<br>
                <strong>Type:</strong> ${companyData.brand.entityType}<br>
                <strong>Jurisdiction:</strong> ${companyData.brand.jurisdiction}<br>
                <strong>Sector:</strong> Industrial Beverage Processing & Automated Packaging
              </p>
            </div>

            <div>
              <h4 style="font-size: 1.05rem; margin-bottom: 0.5rem; color: var(--color-ink);">2. Water Treatment Infrastructure</h4>
              <p style="font-size: var(--text-sm);">
                Multi-stage purification skid featuring dual-media sediment filtration, activated granular carbon beds, high-pressure Reverse Osmosis (RO) desalinization arrays, closed-loop UV disinfection chambers, and post-treatment ozone gas injection for residual micro-sterility.
              </p>
            </div>

            <div>
              <h4 style="font-size: 1.05rem; margin-bottom: 0.5rem; color: var(--color-ink);">3. Bottling & Filling Automation</h4>
              <p style="font-size: var(--text-sm);">
                Automated rotary monobloc rinsing, volumetric isobaric/gravity filling, and precision capping operating in an enclosed positive-pressure filtered cleanroom. Compatible with standard PET containers (250ml, 500ml, 1000ml) and 20L institutional jars.
              </p>
            </div>

            <div>
              <h4 style="font-size: 1.05rem; margin-bottom: 0.5rem; color: var(--color-ink);">4. Quality Assurance Protocol</h4>
              <p style="font-size: var(--text-sm);">
                Equipped on-site testing bench for continuous monitoring of Total Dissolved Solids (TDS), pH equilibrium, electrical conductivity, and turbidity. Batch quarantine incubation for microbiological screening before dispatch release.
              </p>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary btn-sm" onclick="window.print()">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg>
            <span>Print Spec Sheet</span>
          </button>
          <button type="button" class="btn btn-primary btn-sm" data-close-modal="modal-spec-sheet-overlay">
            <span>Close</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Modal: Legal & Compliance Documents -->
    <div class="modal-overlay" id="modal-legal-overlay" role="dialog" aria-modal="true" aria-labelledby="legal-modal-title">
      <div class="modal-dialog">
        <div class="modal-header">
          <div>
            <span class="tech-badge" style="margin-bottom: 0.25rem;" id="legal-modal-tag">LEGAL NOTICE</span>
            <h3 class="modal-title" id="legal-modal-title">Document Title</h3>
          </div>
          <button type="button" class="modal-close-btn" data-close-modal="modal-legal-overlay" aria-label="Close modal">&times;</button>
        </div>
        <div class="modal-body">
          <p id="legal-modal-text" style="font-size: var(--text-sm); line-height: 1.7; color: var(--color-ink);">
            Content text...
          </p>
          <div style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--color-ink-subtle); padding-top: 1rem; border-top: 1px solid var(--color-border);" id="legal-modal-meta">
            Effective: January 2026 &bull; Dhruvansh Aqua LLP
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary btn-sm" data-close-modal="modal-legal-overlay">
            <span>Close</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Side Drawer: Stored Submissions Inspector -->
    <div class="inspector-drawer" id="inspector-drawer" aria-hidden="true">
      <div class="inspector-header">
        <div>
          <span class="tech-badge accent" style="margin-bottom: 0.2rem;">LOCAL STORAGE VIEWER</span>
          <h3 style="font-size: 1.1rem; color: var(--color-ink); font-weight: 700;">Stored Enquiries</h3>
        </div>
        <button type="button" class="modal-close-btn" id="btn-close-inspector">&times;</button>
      </div>
      <div class="inspector-body" id="inspector-body">
        <!-- Rendered submissions list -->
      </div>
      <div class="modal-footer" style="padding: 1rem 1.5rem; justify-content: space-between;">
        <button type="button" class="btn btn-secondary btn-sm" id="btn-export-submissions">
          <span>Export JSON</span>
        </button>
        <button type="button" class="btn btn-secondary btn-sm" id="btn-clear-submissions" style="color: var(--color-status-error);">
          <span>Clear All</span>
        </button>
      </div>
    </div>
  `;
}

import './styles/variables.css';
import './styles/base.css';
import './styles/components.css';
import './styles/responsive.css';

import { companyData } from './data/companyData.js';
import { renderHeader } from './components/Header.js';
import { renderHero } from './components/Hero.js';
import { renderCompanyOverview } from './components/CompanyOverview.js';
import { renderProductPortfolio } from './components/ProductPortfolio.js';
import { renderManufacturingCapabilities } from './components/ManufacturingCapabilities.js';
import { renderQualityCompliance } from './components/QualityCompliance.js';
import { renderPartnerships } from './components/Partnerships.js';
import { renderEnquiryForm } from './components/EnquiryForm.js';
import { renderModals } from './components/Modals.js';
import { renderFooter } from './components/Footer.js';

// Local storage key for B2B submissions
const STORAGE_KEY = 'dhruvansh_aqua_enquiries';

// State for active modal
let activeReceiptData = null;

function getStoredSubmissions() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error('Error reading localStorage', e);
    return [];
  }
}

function saveSubmission(submission) {
  try {
    const existing = getStoredSubmissions();
    existing.unshift(submission);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
    updateStoredCountBadge();
  } catch (e) {
    console.error('Error saving to localStorage', e);
  }
}

function updateStoredCountBadge() {
  const badge = document.getElementById('stored-count-badge');
  if (badge) {
    const list = getStoredSubmissions();
    badge.textContent = list.length;
  }
}

// Render the application HTML structure
function initApp() {
  const app = document.querySelector('#app');
  if (!app) return;

  app.innerHTML = `
    <!-- Skip to main content for screen readers -->
    <a href="#main-content" class="skip-link">Skip to Main Content</a>

    ${renderHeader()}

    <main id="main-content">
      ${renderHero()}
      ${renderCompanyOverview()}
      ${renderProductPortfolio()}
      ${renderManufacturingCapabilities()}
      ${renderQualityCompliance()}
      ${renderPartnerships()}
      ${renderEnquiryForm()}
    </main>

    ${renderFooter()}
    ${renderModals()}
  `;

  setupEventListeners();
  updateStoredCountBadge();
}

// Setup all interactions, validation, modal controls, and scroll spy
function setupEventListeners() {
  const header = document.getElementById('site-header');
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const backToTopBtn = document.getElementById('back-to-top-btn');

  // --- 1. Sticky Header & Scroll Spy ---
  const sections = document.querySelectorAll('section[id], main[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // Header styling on scroll
    if (scrollY > 40) {
      header?.classList.add('scrolled');
      backToTopBtn?.classList.add('visible');
    } else {
      header?.classList.remove('scrolled');
      backToTopBtn?.classList.remove('visible');
    }

    // Scroll spy for navigation highlighting
    let currentId = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        currentId = section.getAttribute('id') || '';
      }
    });

    navLinks.forEach(link => {
      if (link.getAttribute('data-nav') === currentId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }, { passive: true });

  // Back to Top action
  backToTopBtn?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // --- 2. Mobile Navigation Drawer ---
  function toggleMobileMenu(forceClose = false) {
    const isOpen = forceClose ? false : !mobileDrawer?.classList.contains('open');
    if (isOpen) {
      mobileDrawer?.classList.add('open');
      mobileDrawer?.setAttribute('aria-hidden', 'false');
      mobileToggle?.classList.add('open');
      mobileToggle?.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    } else {
      mobileDrawer?.classList.remove('open');
      mobileDrawer?.setAttribute('aria-hidden', 'true');
      mobileToggle?.classList.remove('open');
      mobileToggle?.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  }

  mobileToggle?.addEventListener('click', () => toggleMobileMenu());

  document.querySelectorAll('.mobile-nav-link, #mobile-enquiry-cta').forEach(link => {
    link.addEventListener('click', () => toggleMobileMenu(true));
  });

  // --- 3. Product Category Tabs Filter ---
  const filterButtons = document.querySelectorAll('.filter-tab-btn');
  const showcaseCards = document.querySelectorAll('.showcase-card, .product-card-row');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const filterVal = btn.getAttribute('data-filter');

      showcaseCards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filterVal === 'all' || cat === filterVal) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // --- 4. Product & Quality Direct Enquiries ---
  document.querySelectorAll('.btn-product-enquire').forEach(btn => {
    btn.addEventListener('click', () => {
      const preselect = btn.getAttribute('data-preselect');
      const categorySelect = document.getElementById('enq-category');
      const messageArea = document.getElementById('enq-message');

      if (categorySelect && preselect) {
        categorySelect.value = preselect;
      }

      if (messageArea && preselect) {
        messageArea.value = `Commercial Inquiry for ${preselect}: Requesting product specifications, pricing sheet for standard packaging formats, and minimum order requirements.`;
      }

      document.getElementById('enquiry')?.scrollIntoView({ behavior: 'smooth' });
      document.getElementById('enq-fullname')?.focus();
    });
  });

  // Direct Request Compliance Records Button
  document.getElementById('btn-request-compliance-records')?.addEventListener('click', () => {
    const categorySelect = document.getElementById('enq-category');
    const messageArea = document.getElementById('enq-message');

    if (categorySelect) {
      categorySelect.value = 'Other Business Enquiry';
    }

    if (messageArea) {
      messageArea.value = 'Formal Request for Regulatory & Quality Documentation: Requesting copies of applicable statutory registrations, standard water test certificates, and cleanroom quality protocols for commercial due diligence.';
    }

    document.getElementById('enquiry')?.scrollIntoView({ behavior: 'smooth' });
    document.getElementById('enq-fullname')?.focus();
  });

  // --- 5. Business Enquiry Form Validation & Submission ---
  const form = document.getElementById('business-enquiry-form');
  const submitBtn = document.getElementById('btn-submit-enquiry');
  const submitBtnText = document.getElementById('submit-btn-text');

  function validateField(input, errorElement, condition) {
    if (!condition) {
      input.classList.add('error');
      if (errorElement) errorElement.style.display = 'block';
      return false;
    } else {
      input.classList.remove('error');
      if (errorElement) errorElement.style.display = 'none';
      return true;
    }
  }

  // Live validation on blur
  const nameInput = document.getElementById('enq-fullname');
  const compInput = document.getElementById('enq-company');
  const emailInput = document.getElementById('enq-email');
  const phoneInput = document.getElementById('enq-phone');
  const msgInput = document.getElementById('enq-message');

  nameInput?.addEventListener('blur', () => {
    validateField(nameInput, document.getElementById('err-fullname'), nameInput.value.trim().length >= 2);
  });

  compInput?.addEventListener('blur', () => {
    validateField(compInput, document.getElementById('err-company'), compInput.value.trim().length >= 2);
  });

  emailInput?.addEventListener('blur', () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    validateField(emailInput, document.getElementById('err-email'), emailRegex.test(emailInput.value.trim()));
  });

  phoneInput?.addEventListener('blur', () => {
    validateField(phoneInput, document.getElementById('err-phone'), phoneInput.value.trim().length >= 8);
  });

  msgInput?.addEventListener('blur', () => {
    validateField(msgInput, document.getElementById('err-message'), msgInput.value.trim().length >= 5);
  });

  form?.addEventListener('submit', async (e) => {
    e.preventDefault();

    const isNameValid = validateField(nameInput, document.getElementById('err-fullname'), nameInput.value.trim().length >= 2);
    const isCompValid = validateField(compInput, document.getElementById('err-company'), compInput.value.trim().length >= 2);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = validateField(emailInput, document.getElementById('err-email'), emailRegex.test(emailInput.value.trim()));
    const isPhoneValid = validateField(phoneInput, document.getElementById('err-phone'), phoneInput.value.trim().length >= 8);
    const isMsgValid = validateField(msgInput, document.getElementById('err-message'), msgInput.value.trim().length >= 5);

    if (!isNameValid || !isCompValid || !isEmailValid || !isPhoneValid || !isMsgValid) {
      // Focus first error field
      if (!isNameValid) nameInput.focus();
      else if (!isCompValid) compInput.focus();
      else if (!isEmailValid) emailInput.focus();
      else if (!isPhoneValid) phoneInput.focus();
      else if (!isMsgValid) msgInput.focus();
      return;
    }

    // Submit loading state
    if (submitBtn) submitBtn.disabled = true;
    if (submitBtnText) submitBtnText.textContent = 'Processing Transmission...';

    // Simulate network delay for authentic UI feel
    await new Promise(resolve => setTimeout(resolve, 600));

    // Construct submission record
    const refCode = `DAL-${new Date().getFullYear()}-ENQ-${Math.floor(1000 + Math.random() * 9000)}`;
    const submissionData = {
      referenceCode: refCode,
      timestamp: new Date().toISOString(),
      formattedDate: new Date().toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' }),
      fullName: nameInput.value.trim(),
      companyName: compInput.value.trim(),
      email: emailInput.value.trim(),
      phone: phoneInput.value.trim(),
      businessType: document.getElementById('enq-business-type')?.value,
      category: document.getElementById('enq-category')?.value,
      volume: document.getElementById('enq-volume')?.value,
      message: msgInput.value.trim()
    };

    // Save to localStorage
    saveSubmission(submissionData);
    activeReceiptData = submissionData;

    // Reset button & form
    if (submitBtn) submitBtn.disabled = false;
    if (submitBtnText) submitBtnText.textContent = 'Submit Business Enquiry';
    form.reset();

    // Show Confirmation Receipt Modal
    showReceiptModal(submissionData);
  });

  // --- 6. Modals & Receipt Display ---
  function showReceiptModal(data) {
    const modal = document.getElementById('modal-receipt-overlay');
    const body = document.getElementById('receipt-modal-body');
    if (!modal || !body) return;

    body.innerHTML = `
      <div class="receipt-card">
        <div class="receipt-header">
          <span class="receipt-ref">REF: ${data.referenceCode}</span>
          <span class="receipt-date">${data.formattedDate}</span>
        </div>
        <div class="receipt-item">
          <span class="receipt-key">Contact:</span>
          <span class="receipt-val">${data.fullName} (${data.companyName})</span>
        </div>
        <div class="receipt-item">
          <span class="receipt-key">Email:</span>
          <span class="receipt-val">${data.email}</span>
        </div>
        <div class="receipt-item">
          <span class="receipt-key">Phone:</span>
          <span class="receipt-val">${data.phone}</span>
        </div>
        <div class="receipt-item">
          <span class="receipt-key">Category:</span>
          <span class="receipt-val">${data.category}</span>
        </div>
        <div class="receipt-item">
          <span class="receipt-key">Est. Monthly Volume:</span>
          <span class="receipt-val">${data.volume}</span>
        </div>
      </div>

      <div style="font-size: var(--text-sm); color: var(--color-ink-muted); line-height: 1.6;">
        <p>
          Thank you for reaching out to <strong>Dhruvansh Aqua LLP</strong>. Your commercial enquiry has been recorded under reference code <strong>${data.referenceCode}</strong>.
        </p>
        <p style="margin-top: 0.5rem; font-size: var(--text-xs); color: var(--color-ink-subtle);">
          Our commercial desk evaluates distribution inquiries and production schedules in order of receipt. A formal reply will be directed to <strong>${data.email}</strong> within 1–2 business days.
        </p>
      </div>
    `;

    openModal('modal-receipt-overlay');
  }

  // Copy reference code button
  document.getElementById('btn-copy-ref-code')?.addEventListener('click', () => {
    if (!activeReceiptData) return;
    navigator.clipboard.writeText(activeReceiptData.referenceCode).then(() => {
      const btn = document.getElementById('btn-copy-ref-code');
      if (btn) {
        const original = btn.innerHTML;
        btn.innerHTML = '<span>Copied!</span>';
        setTimeout(() => btn.innerHTML = original, 2000);
      }
    });
  });

  // Download Receipt .txt
  document.getElementById('btn-download-receipt')?.addEventListener('click', () => {
    if (!activeReceiptData) return;
    const txt = [
      "============================================================",
      "             DHRUVANSH AQUA LLP — COMMERCIAL ENQUIRY RECEIPT",
      "============================================================",
      `REFERENCE CODE : ${activeReceiptData.referenceCode}`,
      `TIMESTAMP      : ${activeReceiptData.formattedDate}`,
      `APPLICANT      : ${activeReceiptData.fullName}`,
      `COMPANY        : ${activeReceiptData.companyName}`,
      `EMAIL          : ${activeReceiptData.email}`,
      `PHONE          : ${activeReceiptData.phone}`,
      `BUSINESS TYPE  : ${activeReceiptData.businessType}`,
      `CATEGORY       : ${activeReceiptData.category}`,
      `EST. VOLUME    : ${activeReceiptData.volume}`,
      "------------------------------------------------------------",
      "REQUIREMENTS SUMMARY:",
      activeReceiptData.message,
      "============================================================",
      "Dhruvansh Aqua LLP | Beverage Manufacturing & Packaging Operations",
      "Registered Jurisdiction: Maharashtra, India"
    ].join('\n');

    const blob = new Blob([txt], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Dhruvansh_Aqua_Enquiry_${activeReceiptData.referenceCode}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  });

  // Spec Sheet Openers
  const specSheetButtons = ['btn-open-spec-sheet', 'hero-btn-spec-summary', 'mobile-btn-spec-sheet'];
  specSheetButtons.forEach(btnId => {
    document.getElementById(btnId)?.addEventListener('click', () => {
      toggleMobileMenu(true);
      openModal('modal-spec-sheet-overlay');
    });
  });

  // Legal Modals Trigger
  document.querySelectorAll('[data-legal]').forEach(btn => {
    btn.addEventListener('click', () => {
      const legalKey = btn.getAttribute('data-legal');
      const doc = companyData.legal[legalKey];
      if (!doc) return;

      const titleEl = document.getElementById('legal-modal-title');
      const textEl = document.getElementById('legal-modal-text');
      const metaEl = document.getElementById('legal-modal-meta');

      if (titleEl) titleEl.textContent = doc.title;
      if (textEl) textEl.textContent = doc.text;
      if (metaEl) metaEl.textContent = `Effective Date: ${doc.effectiveDate} • Dhruvansh Aqua LLP`;

      openModal('modal-legal-overlay');
    });
  });

  // Modal Closers
  document.querySelectorAll('[data-close-modal]').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-close-modal');
      closeModal(targetId);
    });
  });

  // Close modals on clicking overlay backdrop
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        closeModal(overlay.id);
      }
    });
  });

  // --- 7. Submissions Inspector Drawer ---
  const inspectorDrawer = document.getElementById('inspector-drawer');
  const inspectBtns = ['btn-inspect-submissions', 'footer-btn-inspector'];

  inspectBtns.forEach(id => {
    document.getElementById(id)?.addEventListener('click', () => {
      renderInspectorDrawer();
      inspectorDrawer?.classList.add('open');
      inspectorDrawer?.setAttribute('aria-hidden', 'false');
    });
  });

  document.getElementById('btn-close-inspector')?.addEventListener('click', () => {
    inspectorDrawer?.classList.remove('open');
    inspectorDrawer?.setAttribute('aria-hidden', 'true');
  });

  function renderInspectorDrawer() {
    const container = document.getElementById('inspector-body');
    if (!container) return;
    const list = getStoredSubmissions();

    if (list.length === 0) {
      container.innerHTML = `
        <div style="text-align: center; padding: 3rem 1rem; color: var(--color-ink-subtle);">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="margin: 0 auto 1rem;"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
          <p style="font-weight: 600; color: var(--color-ink); margin-bottom: 0.25rem;">No submissions yet</p>
          <p style="font-size: var(--text-xs);">Submit the enquiry form on the page to view stored data here.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = list.map((item, idx) => `
      <div style="background: var(--color-surface-subtle); border: 1px solid var(--color-border); border-radius: var(--radius-xs); padding: 1rem; font-family: var(--font-mono); font-size: var(--text-xs);">
        <div style="display: flex; justify-content: space-between; margin-bottom: 0.4rem; color: var(--color-ink); font-weight: 700;">
          <span>${item.referenceCode}</span>
          <span style="color: var(--color-ink-subtle); font-weight: 400;">#${list.length - idx}</span>
        </div>
        <div style="color: var(--color-ink); font-weight: 600; margin-bottom: 0.2rem;">${item.fullName} &bull; ${item.companyName}</div>
        <div style="color: var(--color-ink-muted); margin-bottom: 0.4rem;">${item.email} &bull; ${item.phone}</div>
        <div style="color: var(--color-mineral); font-weight: 500; margin-bottom: 0.4rem;">${item.category} (${item.volume})</div>
        <div style="padding-top: 0.4rem; border-top: 1px dashed var(--color-border); color: var(--color-ink-muted); line-height: 1.4;">
          ${item.message}
        </div>
      </div>
    `).join('');
  }

  // Export JSON
  document.getElementById('btn-export-submissions')?.addEventListener('click', () => {
    const list = getStoredSubmissions();
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(list, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `dhruvansh_aqua_enquiries_${new Date().toISOString().slice(0, 10)}.json`);
    downloadAnchor.click();
  });

  // Clear All Submissions
  document.getElementById('btn-clear-submissions')?.addEventListener('click', () => {
    if (confirm('Clear all stored development submissions?')) {
      localStorage.removeItem(STORAGE_KEY);
      renderInspectorDrawer();
      updateStoredCountBadge();
    }
  });

  // --- 8. Global Escape Key Handler ---
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-overlay.active').forEach(modal => {
        closeModal(modal.id);
      });
      inspectorDrawer?.classList.remove('open');
      inspectorDrawer?.setAttribute('aria-hidden', 'true');
      toggleMobileMenu(true);
    }
  });
}

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Start application
initApp();

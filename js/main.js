/* ============================================
   M/S Prime Artisan UPVC - Main JavaScript
   ============================================ */

'use strict';

// ── Product Data ──────────────────────────────────────────────
const PRODUCTS = [
  {
    id: 'HD-HINGE-3D',
    name: 'Premium 3D Hinge',
    code: '3D-HG-01',
    category: 'hinge',
    badge: 'Bestseller',
    image: 'images/product_3d_hinge.png',
    finishes: ['white', 'silver'],
    features: ['Heavy Duty 3D Adjustment', 'Premium White Finish', 'High Load Capacity', 'Smooth Opening & Closing'],
    specs: {
      Material: 'Zinc Alloy + Stainless Steel Pin',
      Finish: 'Powder Coated White / Silver',
      Weight: '480g',
      'Load Capacity': '120 kg per 3 hinges',
      'Warranty': '5 Years'
    }
  },
  {
    id: 'HD-ROLLER-8W',
    name: '8-Wheel Stainless Steel Roller',
    code: '8W-RL-02',
    category: 'roller',
    badge: 'Heavy Duty',
    image: 'images/product_8_wheel_roller.png',
    finishes: ['silver'],
    features: ['8 Brass Wheels', 'Stainless Steel Body', 'Height Adjustable', 'Ultra Smooth Operation'],
    specs: {
      Material: 'Stainless Steel 304 + Brass Wheels',
      'Wheel Count': '8 Wheels',
      'Adjustability': 'Up to 10mm height',
      Compatibility: 'Heavy Sliding Doors & Windows',
      'Warranty': '5 Years'
    }
  },
  {
    id: 'HD-HANDLE-CMP',
    name: 'Premium Casement Door Handle',
    code: 'CM-HD-03',
    category: 'casement',
    badge: 'Luxury',
    image: 'images/product_casement_handle_premium.png',
    finishes: ['white', 'black'],
    features: ['Ergonomic Grip', 'White Powder Coated', 'Zinc Alloy Construction', 'Multi-point Lock Compatible'],
    specs: {
      Material: 'High-Grade Zinc Alloy',
      Finish: 'Premium White / Matte Black',
      Dimensions: '280mm × 32mm',
      Compatibility: 'uPVC Casement Doors',
      'Warranty': '5 Years'
    }
  },

  {
    id: 'CY-KNOB-05',
    name: 'One-Side Key & One-Side Knob Cylinder',
    code: 'CY-KB-05',
    category: 'lock',
    badge: 'High Security',
    image: 'images/product_cylinder_knob.png',
    finishes: ['brass', 'silver'],
    features: ['Solid Brass Core', 'Thumb-turn Knob on Inside', 'Computerized Key on Outside', 'Anti-pick & Anti-drill'],
    specs: {
      Material: 'Solid Brass',
      Finish: 'Satin Brass / Chrome Plated',
      Length: '70mm (35/35)',
      'Keys Included': '3 Computerized Keys',
      'Warranty': '3 Years'
    }
  },
  {
    id: 'TL-KEEP-06',
    name: 'Touch Lock with Keep',
    code: 'TL-KP-06',
    category: 'lock',
    badge: 'Bestseller',
    image: 'images/product_touch_lock.png',
    finishes: ['white', 'black'],
    features: ['Automatic Snap Lock', 'Slim Profile Design', 'Durable Spring Mechanism', 'Includes Matching Keep'],
    specs: {
      Material: 'Zinc Alloy Body',
      Finish: 'Powder Coated White / Black',
      Compatibility: 'uPVC Sliding Windows',
      Lock: 'Spring Loaded Snap Lock',
      'Warranty': '2 Years'
    }
  }
];

// ── DOM Ready ─────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initParticles();
  initStickyHeader();
  initMobileNav();
  initScrollToTop();
  initCounters();
  initRevealAnimations();
  initProductGrid();
  initProductFilters();
  initProductSearch();
  initModal();
  initForms();
  initNavHighlight();
});

// ── Particles ─────────────────────────────────────────────────
function initParticles() {
  const container = document.getElementById('hero-particles');
  if (!container) return;
  const count = 18;
  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.className = 'hero-particle';
    p.style.cssText = `
      left: ${Math.random() * 100}%;
      width: ${Math.random() * 3 + 1}px;
      height: ${Math.random() * 3 + 1}px;
      animation-delay: ${Math.random() * 6}s;
      animation-duration: ${Math.random() * 4 + 4}s;
    `;
    container.appendChild(p);
  }
}

// ── Sticky Header ─────────────────────────────────────────────
function initStickyHeader() {
  const header = document.getElementById('main-header');
  if (!header) return;
  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 20);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
}

// ── Mobile Navigation ─────────────────────────────────────────
function initMobileNav() {
  const btn = document.getElementById('hamburger-btn');
  const nav = document.getElementById('mobile-nav');
  if (!btn || !nav) return;

  btn.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    btn.classList.toggle('open', isOpen);
    btn.setAttribute('aria-expanded', isOpen);
  });

  // Close on nav link click
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      btn.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    });
  });

  // Close on outside click
  document.addEventListener('click', e => {
    if (!nav.contains(e.target) && !btn.contains(e.target)) {
      nav.classList.remove('open');
      btn.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    }
  });
}

// ── Scroll To Top ─────────────────────────────────────────────
function initScrollToTop() {
  const btn = document.getElementById('scroll-top');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// ── Counter Animations ────────────────────────────────────────
function initCounters() {
  const counters = document.querySelectorAll('.counter[data-target]');
  if (!counters.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.target, 10);
      const duration = 2000;
      const start = performance.now();

      const tick = now => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(ease * target);
        el.textContent = current >= 1000
          ? (current / 1000).toFixed(1).replace('.0', '') + ',000'
          : current;
        if (progress < 1) requestAnimationFrame(tick);
        else el.textContent = target >= 1000
          ? (target / 1000).toFixed(1).replace('.0', '') + ',000'
          : target;
      };
      requestAnimationFrame(tick);
      observer.unobserve(el);
    });
  }, { threshold: 0.5 });

  counters.forEach(c => observer.observe(c));
}

// ── Reveal Animations ─────────────────────────────────────────
function initRevealAnimations() {
  const selectors = ['.reveal', '.reveal-left', '.reveal-right'];
  const elements = document.querySelectorAll(selectors.join(', '));

  const observer = new IntersectionObserver(entries => {
    entries.forEach((entry, i) => {
      if (!entry.isIntersecting) return;
      // Stagger children of the same parent
      const delay = Array.from(entry.target.parentElement?.children || [])
        .indexOf(entry.target) * 80;
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, Math.min(delay, 300));
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  elements.forEach(el => observer.observe(el));
}

// ── Product Grid ──────────────────────────────────────────────
function renderProducts(products) {
  const grid = document.getElementById('products-grid');
  if (!grid) return;
  if (!products.length) {
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:48px;color:var(--text-muted);">
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="48" height="48" style="margin:0 auto 12px;display:block;opacity:0.3;"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
      <p style="font-size:1rem;font-weight:600;">No products found matching your search.</p>
    </div>`;
    return;
  }

  grid.innerHTML = products.map(p => `
    <div class="product-card reveal" data-category="${p.category}" data-id="${p.id}">
      ${p.badge ? `<div class="product-badge">${p.badge}</div>` : ''}
      <div class="product-img">
        <img src="${p.image}" alt="${p.name}" loading="lazy" />
        <div class="product-actions-overlay">
          <button class="btn btn-primary btn-sm" onclick="openModal('${p.id}')">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="14" height="14"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
            Quick View
          </button>
        </div>
      </div>
      <div class="product-body">
        <div class="product-code">${p.code}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-finishes">
          <span class="finish-label">Finishes:</span>
          ${p.finishes.map(f => `<span class="finish-swatch ${f}" title="${f}" aria-label="${f} finish"></span>`).join('')}
        </div>
        <div class="product-features">
          ${p.features.slice(0, 3).map(f => `
            <div class="feature-item">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
              ${f}
            </div>`).join('')}
        </div>
        <div class="product-footer">
          <button class="btn btn-primary btn-sm" style="flex:1;justify-content:center;" onclick="openModal('${p.id}')">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="13" height="13"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
            View Details
          </button>
          <a href="https://wa.me/919953535910?text=Hi%2C%20I%20want%20to%20inquire%20about%20${encodeURIComponent(p.name)}%20(${p.code})" class="btn btn-outline-dark btn-sm" target="_blank" rel="noopener" style="justify-content:center;">
            <svg fill="currentColor" viewBox="0 0 24 24" width="13" height="13"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Quote
          </a>
        </div>
      </div>
    </div>
  `).join('');

  // Re-trigger animations on new cards
  requestAnimationFrame(() => {
    grid.querySelectorAll('.reveal').forEach((el, i) => {
      setTimeout(() => el.classList.add('visible'), i * 80);
    });
  });
}

function initProductGrid() {
  renderProducts(PRODUCTS);
}

// ── Product Filters ───────────────────────────────────────────
let activeFilter = 'all';
let searchQuery = '';

function initProductFilters() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.dataset.filter;
      filterAndRender();
    });
  });
}

function filterAndRender() {
  let filtered = PRODUCTS;
  if (activeFilter !== 'all') {
    filtered = filtered.filter(p => p.category === activeFilter);
  }
  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    filtered = filtered.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.code.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.features.some(f => f.toLowerCase().includes(q))
    );
  }
  renderProducts(filtered);
}

// ── Product Search ────────────────────────────────────────────
function initProductSearch() {
  const input = document.getElementById('product-search');
  if (!input) return;
  let debounceTimer;
  input.addEventListener('input', () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      searchQuery = input.value.trim();
      filterAndRender();
    }, 280);
  });
}

// ── Product Modal ─────────────────────────────────────────────
function initModal() {
  const overlay = document.getElementById('product-modal');
  const closeBtn = document.getElementById('modal-close-btn');
  if (!overlay || !closeBtn) return;

  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', e => {
    if (e.target === overlay) closeModal();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });
}

function openModal(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const overlay = document.getElementById('product-modal');
  const img = document.getElementById('modal-img');
  const code = document.getElementById('modal-code');
  const name = document.getElementById('modal-product-name');
  const specTable = document.getElementById('modal-spec-table');
  const featuresList = document.getElementById('modal-features-list');

  img.src = product.image;
  img.alt = product.name;
  code.textContent = product.code;
  name.textContent = product.name;

  specTable.innerHTML = Object.entries(product.specs).map(([key, val]) => `
    <tr>
      <td>${key}</td>
      <td>${val}</td>
    </tr>
  `).join('');

  featuresList.innerHTML = product.features.map(f => `
    <div class="modal-feature-item">
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
      ${f}
    </div>
  `).join('');

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const overlay = document.getElementById('product-modal');
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

// Make openModal global
window.openModal = openModal;

// ── Category → Products scroll ────────────────────────────────
function scrollToProducts(category) {
  activeFilter = category;
  document.querySelectorAll('.filter-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.filter === category);
  });
  filterAndRender();
  const section = document.getElementById('featured-products');
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
window.scrollToProducts = scrollToProducts;

// ── Form Handling ─────────────────────────────────────────────
function initForms() {
  ['dealer-form', 'inquiry-form', 'contact-form'].forEach(id => {
    const form = document.getElementById(id);
    if (!form) return;
    form.addEventListener('submit', e => {
      e.preventDefault();
      handleFormSubmit(form, id);
    });
  });
}

function handleFormSubmit(form, id) {
  const inputs = form.querySelectorAll('[required]');
  let valid = true;

  inputs.forEach(input => {
    input.style.borderColor = '';
    if (!input.value.trim()) {
      input.style.borderColor = '#e53e3e';
      input.focus();
      valid = false;
    }
  });

  if (!valid) {
    showToast('Please fill in all required fields.', 'error');
    return;
  }

  const submitBtn = form.querySelector('[type="submit"]');
  const originalText = submitBtn.innerHTML;
  submitBtn.innerHTML = `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="16" height="16" style="animation:spin 1s linear infinite"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg> Sending…`;
  submitBtn.disabled = true;

  setTimeout(() => {
    form.reset();
    submitBtn.innerHTML = originalText;
    submitBtn.disabled = false;

    const messages = {
      'dealer-form': '🎉 Registration submitted! Our team will contact you within 24 hours.',
      'inquiry-form': '✅ Inquiry submitted! We\'ll send you a quotation within 24 hours.',
      'contact-form': '📧 Message sent! We\'ll get back to you soon.'
    };
    showToast(messages[id] || 'Submitted successfully!', 'success');
  }, 1600);
}

// ── Toast Notifications ───────────────────────────────────────
function showToast(message, type = 'success') {
  const existing = document.getElementById('toast-notification');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.id = 'toast-notification';
  toast.setAttribute('role', 'alert');
  toast.setAttribute('aria-live', 'polite');

  const bg = type === 'success' ? '#10b981' : '#ef4444';
  toast.style.cssText = `
    position: fixed;
    bottom: 96px;
    left: 50%;
    transform: translateX(-50%) translateY(20px);
    background: ${bg};
    color: white;
    padding: 14px 28px;
    border-radius: 10px;
    font-size: 0.9rem;
    font-weight: 600;
    z-index: 99999;
    box-shadow: 0 8px 32px rgba(0,0,0,0.2);
    max-width: 90vw;
    text-align: center;
    transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.35s ease;
    opacity: 0;
    font-family: 'Inter', sans-serif;
  `;
  toast.textContent = message;
  document.body.appendChild(toast);

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      toast.style.transform = 'translateX(-50%) translateY(0)';
      toast.style.opacity = '1';
    });
  });

  setTimeout(() => {
    toast.style.transform = 'translateX(-50%) translateY(20px)';
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 400);
  }, 4000);
}

// ── Active Nav Highlight on Scroll ────────────────────────────
function initNavHighlight() {
  const sections = ['hero', 'about', 'categories', 'featured-products', 'catalogue', 'gallery', 'dealer', 'contact'];
  const navLinks = {
    'hero': document.getElementById('nav-home'),
    'about': document.getElementById('nav-about'),
    'categories': document.getElementById('nav-products'),
    'featured-products': document.getElementById('nav-products'),
    'catalogue': document.getElementById('nav-catalogue'),
    'gallery': document.getElementById('nav-gallery'),
    'dealer': document.getElementById('nav-dealer'),
    'contact': document.getElementById('nav-contact'),
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        Object.values(navLinks).forEach(l => l && l.classList.remove('active'));
        const link = navLinks[entry.target.id];
        if (link) link.classList.add('active');
      }
    });
  }, { threshold: 0.3, rootMargin: '-70px 0px -60% 0px' });

  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });
}

// ── CSS spin animation injection ──────────────────────────────
(function injectSpinStyle() {
  const style = document.createElement('style');
  style.textContent = '@keyframes spin { to { transform: rotate(360deg); } }';
  document.head.appendChild(style);
})();

// ── Keyboard: category cards ──────────────────────────────────
document.addEventListener('keydown', e => {
  if (e.key === 'Enter' && e.target.classList.contains('category-card')) {
    e.target.click();
  }
});

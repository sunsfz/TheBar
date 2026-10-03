/**
 * app.js
 * Clean, lightweight, static cocktail menu controller.
 * Handles instant filtering by spirit and flavor profile, search, and the recipe modal.
 */

document.addEventListener('DOMContentLoaded', () => {
  const data = window.COCKTAIL_MENU || { barName: "The Bar", cocktails: [] };

  const state = {
    cocktails: data.cocktails || [],
    activeSpirit: 'All',
    activeFlavor: 'All',
    searchQuery: '',
    unitMode: 'oz', // 'oz' or 'ml'
    selectedCocktail: null
  };

  // DOM Elements Cache
  const elements = {
    barTitle: document.getElementById('barTitle'),
    barSubtitle: document.getElementById('barSubtitle'),
    searchInput: document.getElementById('searchInput'),
    spiritPills: document.getElementById('spiritPills'),
    flavorPills: document.getElementById('flavorPills'),
    cocktailGrid: document.getElementById('cocktailGrid'),
    drinkCountBadge: document.getElementById('drinkCountBadge'),

    // Modal elements
    cocktailModal: document.getElementById('cocktailModal'),
    modalCloseBtn: document.getElementById('modalCloseBtn'),
    modalDrinkName: document.getElementById('modalDrinkName'),
    modalDrinkSubtitle: document.getElementById('modalDrinkSubtitle'),
    modalDrinkSpirit: document.getElementById('modalDrinkSpirit'),
    modalDrinkFlavors: document.getElementById('modalDrinkFlavors'),
    modalDrinkGlass: document.getElementById('modalDrinkGlass'),
    modalDrinkIce: document.getElementById('modalDrinkIce'),
    modalDrinkGarnish: document.getElementById('modalDrinkGarnish'),
    modalDrinkTechnique: document.getElementById('modalDrinkTechnique'),
    modalDrinkDesc: document.getElementById('modalDrinkDesc'),
    modalDrinkSpecsTable: document.getElementById('modalDrinkSpecsTable'),
    modalDrinkInstructions: document.getElementById('modalDrinkInstructions'),
    btnUnitOz: document.getElementById('btnUnitOz'),
    btnUnitMl: document.getElementById('btnUnitMl')
  };

  init();

  function init() {
    if (elements.barTitle) elements.barTitle.textContent = data.barName || "The Bar";
    if (elements.barSubtitle) elements.barSubtitle.textContent = data.subtitle || "Artisanal Libations";

    renderSpiritFilters();
    renderFlavorFilters();
    renderCocktails();
    attachEventListeners();
  }

  function renderSpiritFilters() {
    const spirits = ['All', ...Array.from(new Set(state.cocktails.map(c => c.baseSpirit).filter(Boolean)))];
    elements.spiritPills.innerHTML = spirits.map(spirit => `
      <button class="pill-btn ${state.activeSpirit === spirit ? 'active' : ''}" data-spirit="${spirit}">
        ${spirit}
      </button>
    `).join('');
  }

  function renderFlavorFilters() {
    const allFlavors = state.cocktails.flatMap(c => c.flavorProfile || []);
    const uniqueFlavors = Array.from(new Set(allFlavors));
    const flavors = ['All', ...uniqueFlavors];
    elements.flavorPills.innerHTML = flavors.map(flavor => `
      <button class="pill-btn ${state.activeFlavor === flavor ? 'active' : ''}" data-flavor="${flavor}">
        ${flavor}
      </button>
    `).join('');
  }

  function renderCocktails() {
    const filtered = state.cocktails.filter(cocktail => {
      // 1. Spirit filter
      if (state.activeSpirit !== 'All' && cocktail.baseSpirit !== state.activeSpirit) {
        return false;
      }

      // 2. Flavor filter
      if (state.activeFlavor !== 'All' && !(cocktail.flavorProfile || []).includes(state.activeFlavor)) {
        return false;
      }

      // 3. Search query
      if (state.searchQuery) {
        const q = state.searchQuery.toLowerCase();
        const nameMatch = cocktail.name.toLowerCase().includes(q);
        const subMatch = (cocktail.subtitle || '').toLowerCase().includes(q);
        const ingredientMatch = (cocktail.specs || []).some(s => s.name.toLowerCase().includes(q));
        if (!nameMatch && !subMatch && !ingredientMatch) {
          return false;
        }
      }

      return true;
    });

    if (elements.drinkCountBadge) {
      elements.drinkCountBadge.textContent = `${filtered.length} libation${filtered.length === 1 ? '' : 's'}`;
    }

    if (filtered.length === 0) {
      elements.cocktailGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: var(--text-muted);">
          <div style="font-size: 2.5rem; margin-bottom: 12px;">🍸</div>
          <p style="font-family: var(--font-serif); font-size: 1.3rem; color: var(--accent-gold-light);">No Cocktails Match Your Selection</p>
          <p style="font-size: 0.95rem; margin-top: 6px;">Try clearing your search query or selecting another filter.</p>
        </div>
      `;
      return;
    }

    elements.cocktailGrid.innerHTML = filtered.map(cocktail => {
      const flavorsHtml = (cocktail.flavorProfile || []).map(f => `<span class="flavor-tag">${f}</span>`).join('');
      const ingredientsSummary = (cocktail.specs || []).map(s => s.name.split('(')[0].trim()).join(' · ');

      return `
        <div class="cocktail-card" data-id="${cocktail.id}">
          <div>
            <div class="card-header">
              <h3 class="card-title">${cocktail.name}</h3>
              <span class="card-spirit-tag">${cocktail.baseSpirit}</span>
            </div>
            <div class="card-subtitle">${cocktail.subtitle || ''}</div>
            <p class="card-desc">${cocktail.description || ''}</p>
          </div>

          <div>
            <div class="card-ingredients-preview" style="font-size: 0.82rem; color: var(--text-gold); font-family: var(--font-sans); margin-bottom: 14px; opacity: 0.85;">
              ${ingredientsSummary}
            </div>
            <div class="card-flavor-tags">
              ${flavorsHtml}
            </div>
            <div class="card-footer">
              <div class="glassware-indicator">
                <span>🥃</span>
                <span>${cocktail.glassware || 'Glass'}</span>
              </div>
              <span class="view-recipe-btn">View Recipe &rarr;</span>
            </div>
          </div>
        </div>
      `;
    }).join('');

    elements.cocktailGrid.querySelectorAll('.cocktail-card').forEach(card => {
      card.addEventListener('click', () => {
        const id = card.getAttribute('data-id');
        const drink = state.cocktails.find(c => c.id === id);
        if (drink) openCocktailModal(drink);
      });
    });
  }

  function openCocktailModal(drink) {
    state.selectedCocktail = drink;

    elements.modalDrinkName.textContent = drink.name;
    elements.modalDrinkSubtitle.textContent = drink.subtitle || '';
    elements.modalDrinkSpirit.textContent = drink.baseSpirit;
    elements.modalDrinkDesc.textContent = drink.description || '';
    elements.modalDrinkGlass.textContent = drink.glassware || 'Standard';
    elements.modalDrinkIce.textContent = drink.ice || 'Standard Cube';
    elements.modalDrinkGarnish.textContent = drink.garnish || 'None';
    elements.modalDrinkTechnique.textContent = drink.technique || 'Stirred';

    elements.modalDrinkFlavors.innerHTML = (drink.flavorProfile || [])
      .map(f => `<span class="flavor-tag">${f}</span>`).join('');

    renderModalSpecsTable();

    elements.modalDrinkInstructions.textContent = drink.instructions || 'Standard craft preparation.';
    elements.cocktailModal.classList.add('active');
  }

  function renderModalSpecsTable() {
    if (!state.selectedCocktail) return;
    const drink = state.selectedCocktail;
    const tbody = elements.modalDrinkSpecsTable.querySelector('tbody');

    tbody.innerHTML = (drink.specs || []).map(spec => {
      const amount = state.unitMode === 'ml' ? (spec.amountMl || spec.amountOz) : spec.amountOz;
      return `
        <tr>
          <td class="spec-amount">${amount}</td>
          <td class="spec-ingredient">${spec.name}</td>
        </tr>
      `;
    }).join('');
  }

  function closeCocktailModal() {
    elements.cocktailModal.classList.remove('active');
    state.selectedCocktail = null;
  }

  function attachEventListeners() {
    // Spirit filter
    elements.spiritPills.addEventListener('click', (e) => {
      const btn = e.target.closest('.pill-btn');
      if (btn) {
        state.activeSpirit = btn.getAttribute('data-spirit');
        renderSpiritFilters();
        renderCocktails();
      }
    });

    // Flavor filter
    elements.flavorPills.addEventListener('click', (e) => {
      const btn = e.target.closest('.pill-btn');
      if (btn) {
        state.activeFlavor = btn.getAttribute('data-flavor');
        renderFlavorFilters();
        renderCocktails();
      }
    });

    // Search
    elements.searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value.trim();
      renderCocktails();
    });

    // Unit toggle (oz / ml)
    elements.btnUnitOz.addEventListener('click', () => {
      state.unitMode = 'oz';
      elements.btnUnitOz.classList.add('active');
      elements.btnUnitMl.classList.remove('active');
      renderModalSpecsTable();
    });
    elements.btnUnitMl.addEventListener('click', () => {
      state.unitMode = 'ml';
      elements.btnUnitMl.classList.add('active');
      elements.btnUnitOz.classList.remove('active');
      renderModalSpecsTable();
    });

    // Close modal
    elements.modalCloseBtn.addEventListener('click', closeCocktailModal);
    elements.cocktailModal.addEventListener('click', (e) => {
      if (e.target === elements.cocktailModal) closeCocktailModal();
    });

    // ESC key closes modal
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeCocktailModal();
    });
  }
});

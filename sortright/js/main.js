function buildGrid() {
  const grid = document.getElementById('wasteGrid');
  grid.innerHTML = '';

  wasteItems.forEach((item) => {
    const card = document.createElement('div');
    card.className   = 'waste-card';
    card.dataset.cat = item.cat;
    card.dataset.id  = item.id;
    card.innerHTML = `
      <span class="icon">${item.icon}</span>
      <span class="name">${item.name}</span>
      <span class="cat-badge">${item.catLabel}</span>
    `;
    card.addEventListener('click', () => openModal(item.id));
    grid.appendChild(card);
  });
}

function filterCards(cat, btn) {
  document.querySelectorAll('.cat-tab').forEach((t) => t.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.waste-card').forEach((c) => {
    c.classList.toggle('hidden', cat !== 'all' && c.dataset.cat !== cat);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  buildGrid();
  loadQuestion();
});
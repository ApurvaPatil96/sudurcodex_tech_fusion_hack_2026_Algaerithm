function openModal(id) {
  const item = wasteItems.find((i) => i.id === id);
  if (!item) return;

  const modal   = document.getElementById('modal');
  const overlay = document.getElementById('modalOverlay');

  modal.dataset.cat = item.cat;
  document.getElementById('modalIcon').textContent  = item.icon;
  document.getElementById('modalCat').textContent   = item.catLabel;
  document.getElementById('modalTitle').textContent = item.name;
  document.getElementById('modalDesc').textContent  = item.desc;

  const stepsDiv = document.getElementById('modalSteps');
  stepsDiv.innerHTML = item.steps
    .map((s, i) => `
      <div class="step">
        <div class="step-num">${i + 1}</div>
        <div class="step-text">${s}</div>
      </div>`)
    .join('');

  document.getElementById('modalBin').innerHTML =
    `<span class="bin-icon">${item.bin.split(' ')[0]}</span><span>${item.bin}</span>`;

  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal(e) {
  if (e === true || e.target === document.getElementById('modalOverlay')) {
    document.getElementById('modalOverlay').classList.remove('active');
    document.body.style.overflow = '';
  }
}
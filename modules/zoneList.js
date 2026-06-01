import { ZONE_DATA, ZONE_ORDER, displayZoneName } from './data/zones.js';

export function buildZoneList({
  currentLang,
  selectedZoneId,
  currentMode,
  selectZone,
  panTo2d,
}) {
  const desktopList = document.getElementById('zone-list');
  const mobileList = document.getElementById('zone-list-m');

  const count = buildZoneListInto(desktopList);
  buildZoneListInto(mobileList);

  document.getElementById('zone-count-badge').textContent = count;
  document.getElementById('zone-count-badge-m').textContent = count;

  function buildZoneListInto(container) {
    if (!container) return 0;

    container.innerHTML = '';
    let count = 0;

    ZONE_ORDER.forEach(id => {
      const zd = ZONE_DATA[id]?.[currentLang];
      if (!zd) return;

      count++;
      const item = document.createElement('div');
      item.className = 'zl-item' + (id === selectedZoneId ? ' active' : '');
      item.dataset.zoneId = id;
      item.innerHTML = `<span class="zl-name">${displayZoneName(zd.name)}</span>`;
      item.addEventListener('click', () => {
        selectZone(id, 'list');
        if (currentMode === '2d') panTo2d(id);
      });
      container.appendChild(item);
    });

    return count;
  }
}

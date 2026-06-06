import { ZONE_DATA, ZONE_ORDER, displayId, displayZoneName } from './data/zones.js';
import { INFRASTRUCTURE_STYLES } from './data/infrastructureStyles.js';

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
      const infraStyle = INFRASTRUCTURE_STYLES[id];
      const symbol = infraStyle
        ? `<span class="zl-symbol zl-symbol-${infraStyle.symbol}" style="--symbol-color:${infraStyle.color}" aria-hidden="true"></span>`
        : '';
      const zoneNumber = getZoneNumberLabel(id);
      const numberBadge = zoneNumber ? `<span class="zl-number">${zoneNumber}</span>` : '';
      item.innerHTML = `${symbol}${numberBadge}<span class="zl-name">${displayZoneName(zd.name)}</span>`;
      item.addEventListener('click', () => {
        selectZone(id, 'list');
        if (currentMode === '2d') panTo2d(id);
      });
      container.appendChild(item);
    });

    return count;
  }
}

function getZoneNumberLabel(id) {
  const label = displayId(String(id));
  return label !== String(id) || /^\d+$/.test(String(id)) ? label : '';
}

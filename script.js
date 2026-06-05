import { UI } from './modules/data/ui.js';
import { createMobileDrawer } from './modules/mobileDrawer.js';
import { create2dMap } from './modules/map2d.js';
import { create3dScene } from './modules/scene3d.js';
import { renderPanel } from './modules/panel.js';
import { buildZoneList } from './modules/zoneList.js';
import { loadZoneContent } from './modules/data/zoneContentStore.js';

const zonesDataUrl = new URL('./zones.json', import.meta.url);
const modelUrl = new URL('./BotSadBezKol.glb', import.meta.url).href;
const zonesData = await fetch(zonesDataUrl).then(res => res.json());

// Load zone translations from Firestore (instead of static zoneContent.json)
try {
  await loadZoneContent();
} catch (e) {
  console.warn('Firestore zones load failed; UI will use whatever is available locally:', e);
}


let currentLang = 'kk';
let currentMode = '2d';
let selectedZoneId = null;

const drawer = createMobileDrawer();
const map2d = create2dMap({
  zonesData,
  selectZone,
  getSelectedZoneId: () => selectedZoneId,
});
const scene3d = create3dScene({
  modelUrl,
  selectZone,
  getCurrentMode: () => currentMode,
});

function switchMode(mode) {
  currentMode = mode;

  const mapView = document.getElementById('map-view');
  const canvasView = document.getElementById('canvas-view');

  mapView.style.display = mode === '2d' ? 'block' : 'none';
  canvasView.style.display = mode === '3d' ? 'block' : 'none';

  if (mode === '3d') canvasView.classList.add('view-fade-in');
  else mapView.classList.add('view-fade-in');

  document.getElementById('mode-select').value = mode;

  if (mode === '2d') {
    map2d.invalidateSize();
    if (selectedZoneId) map2d.panTo2d(selectedZoneId);
  } else {
    setTimeout(() => {
      scene3d.onResize();
      if (selectedZoneId) {
        const zoneObject = scene3d.findZone3d(selectedZoneId);
        if (zoneObject) scene3d.focusOn(zoneObject);
      }
    }, 50);
  }

  updateHints();
}

function selectZone(id3d, source) {
  selectedZoneId = id3d;

  map2d.highlight2d(id3d);
  if (source === '2d' && id3d) map2d.panTo2d(id3d);

  const zoneObject = scene3d.setSelectedZoneObject(id3d);
  if (zoneObject && source === '3d') scene3d.focusOn(zoneObject);
  if (zoneObject && source === 'list' && currentMode === '3d') scene3d.focusOn(zoneObject);

  document.querySelectorAll('.zl-item').forEach(el => {
    el.classList.toggle('active', el.dataset.zoneId === id3d);
  });

  if (id3d) {
    ['#zone-list', '#zone-list-m'].forEach(sel => {
      const el = document.querySelector(`${sel} .zl-item[data-zone-id="${id3d}"]`);
      if (el) el.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    });
  }

  const hasSelection = !!id3d;
  document.getElementById('back-btn').classList.toggle('show', hasSelection);
  document.getElementById('cursor-hint-2d').classList.toggle('hide', hasSelection);
  document.getElementById('cursor-hint-3d').classList.toggle('hide', hasSelection);

  renderCurrentPanel();
}

function clearSelection() {
  selectZone(null, 'clear');
  scene3d.resetCam();
  if (drawer.isMobile()) drawer.closeMobileDrawer();
}

function buildCurrentZoneList() {
  buildZoneList({
    currentLang,
    selectedZoneId,
    currentMode,
    selectZone,
    panTo2d: map2d.panTo2d,
  });
}

function renderCurrentPanel() {
  renderPanel({ currentLang, selectedZoneId });
}

function applyLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.getElementById('lang-select').value = lang;

  const t = UI[currentLang];
  document.getElementById('hdr-title').textContent = t.title;
  document.getElementById('loading-label').textContent = t.loading;
  document.getElementById('back-label').textContent = t.back;
  document.getElementById('lang-label').textContent = t.lang_label;
  document.getElementById('mode-label').textContent = t.mode_label;
  document.getElementById('zones-title-label').textContent = t.zones_title;
  document.getElementById('zones-title-label-m').textContent = t.zones_title;

  updateHints();
  buildCurrentZoneList();
  renderCurrentPanel();
}

function updateHints() {
  const t = UI[currentLang];
  document.getElementById('cursor-hint-2d').textContent = t.hint2d;
  document.getElementById('cursor-hint-3d').textContent = t.hint3d;
}

document.getElementById('mode-select').addEventListener('change', event => switchMode(event.target.value));
document.getElementById('back-btn').addEventListener('click', clearSelection);
document.getElementById('lang-select').addEventListener('change', event => applyLanguage(event.target.value));

buildCurrentZoneList();
applyLanguage(currentLang);
switchMode('2d');

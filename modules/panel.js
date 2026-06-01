import { UI } from './data/ui.js';
import { ZONE_DATA, displayZoneDescription, displayZoneName } from './data/zones.js';

export function renderPanel({ currentLang, selectedZoneId }){
  const t  = UI[currentLang];
  const el = document.getElementById('panel-content');
  el.classList.remove('panel-anim');
  void el.offsetWidth;
  el.classList.add('panel-anim');

  if(!selectedZoneId){
    el.innerHTML = `
      <div class="p-tag">🌿 ${t.gen_tag}</div>
      <div class="p-title">${t.gen_title}</div>
      <div class="p-subtitle">${t.gen_sub}</div>
      <div class="p-img"><span class="p-img-icon">🌳</span></div>
      <div class="p-desc">${t.gen_desc}</div>
      <div class="p-stats">
        <div class="stat-card"><div class="stat-label">${t.area_l}</div><div class="stat-val">${t.area_v}</div></div>
        <div class="stat-card"><div class="stat-label">${t.spc_l}</div><div class="stat-val">${t.spc_v}</div></div>
        <div class="stat-card"><div class="stat-label">${t.fnd_l}</div><div class="stat-val">${t.fnd_v}</div></div>
        <div class="stat-card"><div class="stat-label">${t.zn_l}</div><div class="stat-val">${t.zn_v}</div></div>
      </div>
      <div class="p-hint"><div class="p-hint-dot"></div><span>${t.sel_hint}</span></div>`;
  } else {
    const zd = ZONE_DATA[selectedZoneId]?.[currentLang];
    if(!zd) return;
    const icon = /^\d/.test(selectedZoneId) ? '🌱' : '🌿';
    el.innerHTML = `
      <div class="p-tag">🗺 ${t.zone_tag}</div>
      <div class="p-title">${displayZoneName(zd.name)}</div>
      <div class="p-subtitle">${t.gen_sub}</div>
      <div class="p-img"><span class="p-img-icon">${icon}</span></div>
      <div class="p-desc">${displayZoneDescription(zd.desc)}</div>
      <div class="p-props">
        <div class="prop-row"><span class="prop-key">${t.type_l}</span><span class="prop-val">${zd.type}</span></div>
        <div class="prop-row"><span class="prop-key">${t.plants_l}</span><span class="prop-val">${zd.plants}</span></div>
      </div>`;
  }
  document.getElementById('panel-footer').textContent = t.footer;
}

import { UI } from './data/ui.js';
import { ZONE_DATA, displayZoneDescription, displayZoneName } from './data/zones.js';
import { ZONE_IMAGE_MANIFEST } from './data/zoneContent.js';


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
    el.innerHTML = `
      <div class="p-tag">🗺 ${t.zone_tag}</div>
      <div class="p-title">${displayZoneName(zd.name)}</div>
      <div class="p-subtitle">${t.gen_sub}</div>
      <div class="p-desc">${displayZoneDescription(zd.desc)}</div>
      
      <div class="p-props">
      ${(() => {
        // Render all properties from the zone translation object except name and desc
        const entries = Object.entries(zd).filter(([k]) => k !== 'name' && k !== 'desc');
        if (entries.length === 0) return '';
        return entries.map(([k, v]) => {
          const label = (t[k + '_l'] !== undefined) ? t[k + '_l'] : (k.charAt(0).toUpperCase() + k.slice(1));
          return `<div class="prop-row"><span class="prop-key">${label}</span><span class="prop-val">${v}</span></div>`;
        }).join('');
      })()}
    </div>
    <div id="zone-imgs" class="zone-images"></div>`;

    // asynchronously attempt to load images from data/zoneimg/{zoneId}/
    renderZoneImages(selectedZoneId);
  }
  document.getElementById('panel-footer').textContent = t.footer;
}

// Try to load numbered images from data/zoneimg/{zoneId}/1.jpg .. 10.(jpg|png|webp)
function renderZoneImages(zoneId){
  const container = document.getElementById('zone-imgs');
  if(!container) return;
  container.innerHTML = '';
  if(!zoneId) return;
  const base = `modules/data/zoneimg/${zoneId}/`;
  // If manifest exists for this zone, use it (ordered list of filenames)
  const manifest = ZONE_IMAGE_MANIFEST && ZONE_IMAGE_MANIFEST[String(zoneId)];
  if (manifest && Array.isArray(manifest) && manifest.length) {
    for (const name of manifest) {
      const url = base + name;
      const img = new Image();
      img.onload = function(){ img.className='zone-img-item'; container.appendChild(img); };
      img.onerror = ()=>{};
      img.src = url;
    }
    return;
  }
  const exts = ['jpg','jpeg','png','webp'];
  const max = 10;
  let found = 0;
  for(let i=1;i<=max;i++){
    for(const ext of exts){
      const url = `${base}${i}.${ext}`;
      const img = new Image();
      img.onload = (()=>{
        return function(){
          img.className = 'zone-img-item';
          container.appendChild(img);
        };
      })();
      img.onerror = ()=>{};
      img.src = url;
    }
  }
  // also try common names
  ['cover','0','image','main'].forEach(name=>{
    for(const ext of exts){
      const url = `${base}${name}.${ext}`;
      const img = new Image();
      img.onload = function(){ img.className='zone-img-item'; container.appendChild(img); };
      img.onerror = ()=>{};
      img.src = url;
    }
  });
}

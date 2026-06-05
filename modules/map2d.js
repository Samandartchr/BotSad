import { MAP_2D_TO_3D } from './data/zones.js';

export function create2dMap({ zonesData, selectZone, getSelectedZoneId }) {
  const leafMap = L.map('map', {zoomControl:false}).setView([43.298, 68.302], 15);
  
  L.tileLayer('https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}', { attribution:'Google', maxZoom:20 }).addTo(leafMap);
  
  const S_NORMAL = {color:'#5de8af',weight:1.5,fillColor:'#5de8af',fillOpacity:0.08,opacity:0.6};
  const S_HOVER  = {color:'#8af7c8',weight:2.5,fillColor:'#8af7c8',fillOpacity:0.2,opacity:0.85};
  const S_ACTIVE = {color:'#ffffff',weight:2.5,fillColor:'#5de8af',fillOpacity:0.28,opacity:1};
  const MODEL_COLORS = {
    kanal: '#00a85a',
    joldar: '#00a85a',
    tamshy: '#3aa3ff',
    bochk: '#ffb86b',
    skvaj: '#9b59b6',
    meteo: '#f39c12',
    tseh: '#e74c3c',
    shiporez: '#16a085',
    jylyjai: '#f1c40f'
  };

  function styleFor(zone, state = 'normal'){
    const model = zone?.model;
    const base = MODEL_COLORS[model] || '#5de8af';
    if(zone?.type === 'LineString'){
      if(state === 'active') return { color: '#ffffff', weight: 3.5, opacity: 1 };
      return { color: base, weight: 2, opacity: 0.95 };
    }
    if(zone?.type === 'Point'){
      if(state === 'active') return { radius:7, color:'#ffffff', fillColor: base, fillOpacity:1, weight:3 };
      return { radius:5, color: base, fillColor: base, fillOpacity:1, weight:1 };
    }
    // polygon / default
    if(state === 'hover') return { color: base, weight: 2.5, fillColor: base, fillOpacity: 0.22, opacity: 0.9 };
    if(state === 'active') return { color: '#ffffff', weight: 2.5, fillColor: base, fillOpacity: 0.28, opacity: 1 };
    return { color: base, weight: 1.5, fillColor: base, fillOpacity: 0.08, opacity: 0.6 };
  }
  
  const leafLayers = {};
  const zoneIndex = {};
  
  function load2dZones() {
    zonesData.forEach(zone => {
      const jsonId = String(zone.id);
      zoneIndex[jsonId] = zone;
      const id3d   = MAP_2D_TO_3D[jsonId];
      let layer = null;
      // If this zone corresponds to a 3D "model" (kanal, tamshy, skvaj, ...),
      // make its 2D layer non-interactive so it doesn't block clicks on real zones.
      const isModelLayer = !!zone?.model && MODEL_COLORS.hasOwnProperty(zone.model);
      const baseOpts = {...S_NORMAL, interactive: !isModelLayer};
      if(zone.type === 'Polygon' || zone.type === 'MultiPolygon'){
        const rings = zone.type === 'Polygon' ? [zone.coordinates[0]] : zone.coordinates.map(p=>p[0]);
        const latlngs = rings.map(r => r.map(c => [c[1], c[0]]));
        layer = L.polygon(latlngs, {...baseOpts});
      } else if(zone.type === 'LineString'){
        const latlngs = zone.coordinates.map(c => [c[1], c[0]]);
        layer = L.polyline(latlngs, {...baseOpts, weight:2});
      } else if(zone.type === 'Point'){
        const c = zone.coordinates;
        layer = L.circleMarker([c[1], c[0]], {...baseOpts, radius:5, fillOpacity:1, weight:1});
      } else {
        const latlngs = (zone.coordinates && zone.coordinates[0]) ? zone.coordinates[0].map(c => [c[1], c[0]]) : [];
        layer = L.polygon(latlngs, {...baseOpts});
      }
  
      layer.on('mouseover', function() {
        const z = zoneIndex[jsonId];
        // Only apply hover styling for polygons (disable hover for points and polylines)
        if (MAP_2D_TO_3D[jsonId] !== getSelectedZoneId() && z && (z.type === 'Polygon' || z.type === 'MultiPolygon')) {
          this.setStyle && this.setStyle(styleFor(z, 'hover'));
        }
      });
      layer.on('mouseout', function() {
        const z = zoneIndex[jsonId];
        if (MAP_2D_TO_3D[jsonId] !== getSelectedZoneId() && z && (z.type === 'Polygon' || z.type === 'MultiPolygon')) {
          this.setStyle && this.setStyle(styleFor(z, 'normal'));
        }
      });
      layer.on('click', () => { if (id3d) selectZone(id3d, '2d'); });

      // apply initial style from zone metadata
      try { layer.setStyle && layer.setStyle(styleFor(zone, 'normal')); } catch(e){}
      layer.addTo(leafMap);
      leafLayers[jsonId] = layer;
  
    });
  }
  
  function highlight2d(id3d){
    Object.entries(leafLayers).forEach(([jid, layer])=>{
      const z = zoneIndex[jid];
      const isActive = (MAP_2D_TO_3D[jid]===id3d) || (z && z.model === id3d) || (String(z?.id) === String(id3d));
      try { layer.setStyle && layer.setStyle(styleFor(z, isActive ? 'active' : 'normal')); } catch(e){}
      if(isActive){ if(layer.bringToFront) layer.bringToFront(); }
    });
  }
  
  function panTo2d(id3d){
    const layers = Object.entries(leafLayers)
      .filter(([jid])=> {
        const z = zoneIndex[jid];
        return MAP_2D_TO_3D[jid]===id3d || (z && z.model === id3d) || (String(z?.id) === String(id3d));
      }).map(([,l])=>l);
    if(layers.length){
      const grp = L.featureGroup(layers);
      try { leafMap.fitBounds(grp.getBounds(), {maxZoom:18, padding:[40,40]}); }
      catch(e){
        // fallback: if only markers, set view to first
        const first = layers[0];
        if(first.getLatLng) leafMap.setView(first.getLatLng(), 18);
      }
    }
  }
  
  load2dZones();
  
    return {
      highlight2d,
      panTo2d,
      invalidateSize: () => leafMap.invalidateSize(),
    };
}

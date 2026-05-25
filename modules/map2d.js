import { MAP_2D_TO_3D } from './data/zones.js';

export function create2dMap({ zonesData, selectZone, getSelectedZoneId, displayId }) {
  const leafMap = L.map('map', {zoomControl:false}).setView([43.298, 68.302], 15);
  
  L.tileLayer('https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}', { attribution:'Google', maxZoom:20 }).addTo(leafMap);
  
  const S_NORMAL = {color:'#5de8af',weight:1.5,fillColor:'#5de8af',fillOpacity:0.08,opacity:0.6};
  const S_HOVER  = {color:'#8af7c8',weight:2.5,fillColor:'#8af7c8',fillOpacity:0.2,opacity:0.85};
  const S_ACTIVE = {color:'#ffffff',weight:2.5,fillColor:'#5de8af',fillOpacity:0.28,opacity:1};
  
  const leafLayers = {};
  const labelMarkers = [];
  
  function load2dZones() {
    zonesData.forEach(zone => {
      const jsonId = String(zone.id);
      const id3d   = MAP_2D_TO_3D[jsonId];
      const latlngs = zone.coordinates[0].map(c => [c[1], c[0]]);
      const poly    = L.polygon(latlngs, {...S_NORMAL});
  
      poly.on('mouseover', function() {
        if (MAP_2D_TO_3D[jsonId] !== getSelectedZoneId()) this.setStyle(S_HOVER);
      });
      poly.on('mouseout', function() {
        if (MAP_2D_TO_3D[jsonId] !== getSelectedZoneId()) this.setStyle(S_NORMAL);
      });
      poly.on('click', () => {
        if (id3d) selectZone(id3d, '2d');
      });
  
      poly.addTo(leafMap);
      leafLayers[jsonId] = poly;
  
      if (id3d) {
        const center = poly.getBounds().getCenter();
        const m = L.marker(center, {
          icon: L.divIcon({
            className: '',
            html: `<div class="zone-lbl">${displayId(id3d)}</div>`,
            iconAnchor: [10, 8],
          }),
          interactive: false,
          zIndexOffset: -100,
        });
        m.addTo(leafMap);
        labelMarkers.push(m);
      }
    });
  
    leafMap.on('zoomend', updateLabelVisibility);
    updateLabelVisibility();
  }
  
  function updateLabelVisibility(){
    const z = leafMap.getZoom();
    labelMarkers.forEach(m=>{
      const el = m.getElement();
      if(el) el.style.display = z >= 16 ? 'block' : 'none';
    });
  }
  
  function highlight2d(id3d){
    Object.entries(leafLayers).forEach(([jid, layer])=>{
      layer.setStyle(MAP_2D_TO_3D[jid]===id3d ? S_ACTIVE : S_NORMAL);
      if(MAP_2D_TO_3D[jid]===id3d) layer.bringToFront();
    });
  }
  
  function panTo2d(id3d){
    const layers = Object.entries(leafLayers)
      .filter(([jid])=>MAP_2D_TO_3D[jid]===id3d).map(([,l])=>l);
    if(layers.length){
      const grp = L.featureGroup(layers);
      leafMap.fitBounds(grp.getBounds(), {maxZoom:18, padding:[40,40]});
    }
  }
  
  load2dZones();
  
    return {
      highlight2d,
      panTo2d,
      invalidateSize: () => leafMap.invalidateSize(),
    };
}

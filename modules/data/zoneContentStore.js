import { loadZonesFromFirestore } from './firebaseClient.js';

// The app currently expects:
//   ZONE_DATA[zoneId][lang] = { name, desc, type, plants, ... }
//   ZONE_ORDER = list of ids
// We keep ZONE_ORDER + ids from zones.js, but zone translations come from Firestore.

export const zoneContentStore = {
  zones: {},
  ready: false,
  loadingPromise: null,
};

export async function loadZoneContent() {
  if (zoneContentStore.ready) return zoneContentStore.zones;
  if (zoneContentStore.loadingPromise) return zoneContentStore.loadingPromise;

  zoneContentStore.loadingPromise = (async () => {
    const zones = await loadZonesFromFirestore();
    zoneContentStore.zones = zones;
    zoneContentStore.ready = true;
    return zones;
  })();

  return zoneContentStore.loadingPromise;
}

export function getZoneTranslation(zoneId, lang) {
  const z = zoneContentStore.zones?.[zoneId];
  return z?.[lang];
}


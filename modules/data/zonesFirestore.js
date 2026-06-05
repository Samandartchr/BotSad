import { zoneContentStore } from './zoneContentStore.js';

// Replace the old static ZONE_DATA export with a proxy backed by Firestore-loaded data.
// Note: This is evaluated after module load; consumers should call loadZoneContent()
// before relying on zone data.

export const ZONE_DATA = new Proxy(
  {},
  {
    get(_target, prop) {
      return zoneContentStore.zones?.[prop];
    },
    ownKeys() {
      return Reflect.ownKeys(zoneContentStore.zones || {});
    },
    getOwnPropertyDescriptor() {
      return { enumerable: true, configurable: true };
    },
  }
);

export const displayZoneName = name => String(name);
export const displayZoneDescription = desc => String(desc);


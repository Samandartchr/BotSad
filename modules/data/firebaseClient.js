import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js';
import {
  getFirestore,
  collection,
  getDocs,
} from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js';

let db = null;
let app = null;
let cached = null;

function readConfigFromWindow() {
  // Expect the page to define:
  // window.FIREBASE_CONFIG = { apiKey, authDomain, projectId, appId, ... }
  const cfg = globalThis?.FIREBASE_CONFIG;
  if (!cfg) return null;
  if (!cfg.apiKey || !cfg.projectId) return null;
  return cfg;
}

export function isFirestoreConnected() {
  return !!db;
}

export async function ensureFirestore() {
  if (db) return db;

  const config = readConfigFromWindow();
  if (!config) {
    throw new Error('Missing FIREBASE_CONFIG (apiKey + projectId)');
  }

  app = initializeApp(config);
  db = getFirestore(app);
  return db;
}

export async function loadZonesFromFirestore() {
  if (cached) return cached;

  const firestore = await ensureFirestore();
  const snap = await getDocs(collection(firestore, 'zones'));

  const zones = {};
  snap.forEach(d => {
    zones[d.id] = d.data();
  });

  cached = zones;
  return zones;
}


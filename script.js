import * as THREE from 'three';
import { OrbitControls }  from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader }     from 'three/addons/loaders/GLTFLoader.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass }     from 'three/addons/postprocessing/RenderPass.js';
import { OutlinePass }    from 'three/addons/postprocessing/OutlinePass.js';
import { OutputPass }     from 'three/addons/postprocessing/OutputPass.js';
import { ShaderPass }     from 'three/addons/postprocessing/ShaderPass.js';
import { FXAAShader }     from 'three/addons/shaders/FXAAShader.js';
import { RGBELoader } from 'three/addons/loaders/RGBELoader.js';


// Interface
const UI = {
  kk: {
    title:'Ботаникалық бақ', sub:'Қ.А. Яссауи атындағы ХҚТУ',
    loading:'Жүктелуде…', back:'Артқа',
    cursor_hint:'3D моделдегі зонаны басыңыз',
    gen_tag:'Жалпы ақпарат', gen_title:'ХҚТУ Ботаникалық бағы',
    gen_sub:'Түркістан қаласы, Қазақстан',
    gen_desc:'Халықаралық Қазақ-Түрік университетінің ботаникалық бағы — аймақтың ірі ғылыми-білім беру кешені. Бақ 4,5 гектарлық аумақта орналасқан, коллекцияда 1000-нан астам өсімдік түрі бар. Студенттер мен ғалымдар үшін маңызды оқу-зерттеу алаңы болып табылады.',
    area_l:'Аудан', area_v:'4.5 га',
    spc_l:'Өсімдік түрлері', spc_v:'1 000+',
    fnd_l:'Негізделген', fnd_v:'1991',
    zn_l:'Аймақ саны', zn_v:'48',
    sel_hint:'3D модельдегі кез келген аймақты басыңыз — толық мәлімет пайда болады',
    zone_tag:'Аймақ', type_l:'Аймақ түрі', plants_l:'Өсімдіктер',
    footer:'ХҚТУ · Ботаникалық бақ',
  },
  ru: {
    title:'Ботанический сад', sub:'МКТУ им. Х.А. Ясави',
    loading:'Загрузка…', back:'Назад',
    cursor_hint:'Нажмите на зону в 3D-модели',
    gen_tag:'Общая информация', gen_title:'Ботанический сад МКТУ',
    gen_sub:'г. Туркестан, Казахстан',
    gen_desc:'Ботанический сад Международного казахско-турецкого университета — крупный научно-образовательный комплекс региона. Расположен на площади 4,5 гектара, коллекция насчитывает более 1000 видов растений. Является важной учебно-исследовательской площадкой.',
    area_l:'Площадь', area_v:'4.5 га',
    spc_l:'Видов растений', spc_v:'1 000+',
    fnd_l:'Основан', fnd_v:'1991',
    zn_l:'Число зон', zn_v:'48',
    sel_hint:'Нажмите на любую зону в 3D-модели, чтобы получить подробную информацию',
    zone_tag:'Зона', type_l:'Тип зоны', plants_l:'Растений',
    footer:'МКТУ · Ботанический сад',
  },
  en: {
    title:'Botanical Garden', sub:'IKTU named after H.A. Yassawi',
    loading:'Loading…', back:'Back',
    cursor_hint:'Click on a zone in the 3D model',
    gen_tag:'General Info', gen_title:'IKTU Botanical Garden',
    gen_sub:'Turkestan, Kazakhstan',
    gen_desc:'The Botanical Garden of the International Kazakh-Turkish University is a major scientific and educational complex. Spanning 4.5 hectares, the collection includes over 1,000 plant species. It serves as an important research and teaching facility for students and scientists.',
    area_l:'Area', area_v:'4.5 ha',
    spc_l:'Plant species', spc_v:'1,000+',
    fnd_l:'Founded', fnd_v:'1991',
    zn_l:'Zones', zn_v:'48',
    sel_hint:'Click on any zone in the 3D model to view detailed information',
    zone_tag:'Zone', type_l:'Zone type', plants_l:'Plants',
    footer:'IKTU · Botanical Garden',
  },
  tr: {
    title:'Botanik Bahçesi', sub:'H.A. Yesevi UKTÜ',
    loading:'Yükleniyor…', back:'Geri',
    cursor_hint:'3D modeldeki bir bölgeye tıklayın',
    gen_tag:'Genel Bilgi', gen_title:'UKTÜ Botanik Bahçesi',
    gen_sub:'Türkistan, Kazakistan',
    gen_desc:"Uluslararası Kazak-Türk Üniversitesi Botanik Bahçesi, bölgenin büyük bir bilimsel ve eğitim kompleksidir. 4,5 hektarlık alanda 1.000'den fazla bitki türünü barındıran koleksiyon bulunmaktadır. Öğrenci ve araştırmacılar için önemli bir çalışma alanıdır.",
    area_l:'Alan', area_v:'4.5 ha',
    spc_l:'Bitki türleri', spc_v:'1.000+',
    fnd_l:'Kuruluş', fnd_v:'1991',
    zn_l:'Bölge sayısı', zn_v:'48',
    sel_hint:'Ayrıntılı bilgi için 3D modeldeki herhangi bir bölgeye tıklayın',
    zone_tag:'Bölge', type_l:'Bölge türü', plants_l:'Bitkiler',
    footer:'UKTÜ · Botanik Bahçesi',
  }
};

// ZONE DATA
const ZONE_DATA = {};

const DISPLAY_ID = {
  '21':   '2.1',
  '131':  '13.1',
  '141':  '14.1',
  '21_1': '21',
  '241':  '24.1',
  '251':  '25.1',
};
const displayId = id => DISPLAY_ID[id] ?? id;

ZONE_DATA['cont'] = {
  kk:{ name:'Контейнерлік аймақ', desc:'Контейнерлерде өсірілетін өсімдіктер жиынтығы. Мұнда сирек кездесетін және экзотикалық түрлер сақталып, бақылауда ұсталады.', type:'Арнайы', plants:'120+' },
  ru:{ name:'Контейнерная зона', desc:'Коллекция растений, выращиваемых в контейнерах. Здесь содержатся редкие и экзотические виды под постоянным наблюдением.', type:'Специальная', plants:'120+' },
  en:{ name:'Container Zone', desc:'Collection of container-grown plants. Rare and exotic species are maintained here under controlled conditions.', type:'Special', plants:'120+' },
  tr:{ name:'Konteyner Bölgesi', desc:'Konteynerlerde yetiştirilen bitki koleksiyonu. Nadir ve egzotik türler kontrollü koşullarda muhafaza edilmektedir.', type:'Özel', plants:'120+' },
};
ZONE_DATA['okr'] = {
  kk:{ name:'Қоршау аймағы', desc:'Ботаникалық бақтың сыртқы шекарасын белгілейтін аймақ. Бақ ауданын сыртқы ортадан бөліп, ішкі микроклиматты сақтайды.', type:'Шекара', plants:'—' },
  ru:{ name:'Ограждение', desc:'Зона, обозначающая внешнюю границу ботанического сада. Отделяет территорию сада от внешней среды и сохраняет внутренний микроклимат.', type:'Периметр', plants:'—' },
  en:{ name:'Perimeter', desc:'Zone marking the outer boundary of the botanical garden. Separates the garden from the external environment and preserves the internal microclimate.', type:'Boundary', plants:'—' },
  tr:{ name:'Çevre Sınırı', desc:'Botanik bahçesinin dış sınırını belirleyen bölge. Bahçe alanını dış ortamdan ayırır ve iç mikroklimatı korur.', type:'Sınır', plants:'—' },
};

for (const id of ['131', '141', '241', '251', '21_1']) {
  const p = id;
  const n = 12 + (parseInt(p)*3 % 30);
  const d = displayId(id);            // ← добавить
  ZONE_DATA[id] = {
    kk:{ name:`${d}-зона`, desc:`...`, type:'Ішкі аймақ', plants:`${n}+` },
    ru:{ name:`Зона ${d}`, desc:`...`, type:'Подзона',    plants:`${n}+` },
    en:{ name:`Zone ${d}`, desc:`...`, type:'Sub-zone',   plants:`${n}+` },
    tr:{ name:`Bölge ${d}`, desc:`...`, type:'Alt bölge', plants:`${n}+` },
  };
}

const EN_TYPES = ['Dendrology','Herbaceous Perennials','Rose Garden','Medicinal Plants','Steppe Flora','Conifers','Aquatic Plants','Bulb Collection','Ornamental Grasses','Shade Garden','Alpine Plants','Tropical House'];
const KK_TYPES = ['Дендрология','Көпжылдық шөптесіндер','Раушан бағы','Дәрілік өсімдіктер','Дала флорасы','Қылқан жапырақтылар','Су өсімдіктері','Пияздық коллекция','Сәндік астықтар','Көлеңкелі бақша','Альпі өсімдіктері','Тропикалық үй'];
const RU_TYPES = ['Дендрология','Травянистые многолетники','Розарий','Лекарственные растения','Степная флора','Хвойные','Водные растения','Луковичные','Декоративные злаки','Теневой сад','Альпийские растения','Тропикарий'];
const TR_TYPES = ['Dendroloji','Çok Yıllık Bitkiler','Gül Bahçesi','Tıbbi Bitkiler','Bozkır Florası','İğne Yapraklılar','Su Bitkileri','Soğanlı Bitkiler','Süs Çimleri','Gölge Bahçesi','Alp Bitkileri','Tropikal Ev'];

for (let i = 1; i <= 48; i++) {
  const ti = (i - 1) % EN_TYPES.length;
  const pc = 15 + (i * 7 % 60);
  const d  = displayId(String(i));
  ZONE_DATA[String(i)] = {
    kk:{ name:`${d}-зона`, desc:`${d}-зона — ботаникалық бақтың ${KK_TYPES[ti].toLowerCase()} бөлімі. Зонада ${pc}-дан астам белгіленген өсімдік түрі бар, жүйелі зерттеулер жүргізілуде.`, type:KK_TYPES[ti], plants:`${pc}+` },
    ru:{ name:`Зона ${d}`, desc:`Зона ${d} — раздел ${RU_TYPES[ti].toLowerCase()} ботанического сада. В зоне насчитывается более ${pc} задокументированных видов, ведутся систематические исследования.`, type:RU_TYPES[ti], plants:`${pc}+` },
    en:{ name:`Zone ${d}`, desc:`Zone ${d} is the ${EN_TYPES[ti]} section of the botanical garden. It features over ${pc} documented species and is subject to ongoing systematic research.`, type:EN_TYPES[ti], plants:`${pc}+` },
    tr:{ name:`Bölge ${d}`, desc:`Bölge ${d}, botanik bahçesinin ${TR_TYPES[ti]} bölümüdür. ${pc}+ belgelenmiş türe sahiptir ve sistematik araştırmalar sürdürülmektedir.`, type:TR_TYPES[ti], plants:`${pc}+` },
  };
}

const ZONE_NAMES = new Set([
  'cont','okr',
  ...Array.from({length:48},(_,i)=>String(i+1)),
  '131', '141', '241', '251', '21_1'
]);

// Display ID overrides (internal ID → label shown in UI)


// ═══════════════════════════════════════════════════════════════════════════
// STATE
// ═══════════════════════════════════════════════════════════════════════════
let currentLang  = 'kk';
let selectedZone = null;

// ═══════════════════════════════════════════════════════════════════════════
// SCENE SETUP
// ═══════════════════════════════════════════════════════════════════════════
const canvas   = document.getElementById('canvas');
const viewport = document.getElementById('viewport');

const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 100));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type    = THREE.PCFSoftShadowMap;
renderer.toneMapping       = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1;

const scene  = new THREE.Scene();
new RGBELoader().load(
  'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/venice_sunset_1k.hdr',
  tex => {
    tex.mapping = THREE.EquirectangularReflectionMapping;
    scene.environment = tex;      // барлық материалдарға env reflection
    // scene.background = tex;   // фонды да HDRI-мен ауыстырғың келсе
  }
);
scene.background = new THREE.Color(0x1b2b24);
scene.fog        = new THREE.Fog(0x030806, 80, 250);

const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
const initialCameraPos = new THREE.Vector3(0, 20, 40);
camera.position.copy(initialCameraPos);

const controls = new OrbitControls(camera, canvas);
controls.enableDamping  = true;
controls.dampingFactor  = 0.07;
controls.minDistance    = 0.5;
controls.maxDistance    = 150;
controls.maxPolarAngle  = Math.PI / 2 + 0.08;
// Explicit touch mapping — prevents OrbitControls from "losing" touch state
controls.touches = {
  ONE: THREE.TOUCH.ROTATE,
  TWO: THREE.TOUCH.DOLLY_PAN,
};
// As soon as the user starts rotating/zooming/panning,
// cancel any in-progress camera animation immediately so the
// lerp never overrides their input.
controls.addEventListener('start', () => { camAnim = false; });

// ── Lights ──
scene.add(new THREE.AmbientLight(0x8fa892, 0.55));

const sun = new THREE.DirectionalLight(0xfff3d0, 1.5);
sun.position.set(30, 60, 25);
sun.castShadow = true;
sun.shadow.mapSize.set(2048, 2048);
sun.shadow.camera.near   = 0.5;
sun.shadow.camera.far    = 250;
['left','right','top','bottom'].forEach((d,i) => sun.shadow.camera[d] = [-60,60,60,-60][i]);
scene.add(sun);

const fill = new THREE.DirectionalLight(0x4a8f5a, 0.25);
fill.position.set(-20, 10, -15);
scene.add(fill);

const grid = new THREE.GridHelper(15, 6, 0x1a3520, 0x111e12);
grid.material.opacity    = 0.25;
grid.material.transparent = true;
scene.add(grid);

// ═══════════════════════════════════════════════════════════════════════════
// POST PROCESSING
// ═══════════════════════════════════════════════════════════════════════════
const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));

const outlinePass = new OutlinePass(
  new THREE.Vector2(viewport.clientWidth, viewport.clientHeight),
  scene, camera
);
outlinePass.edgeStrength  = 3.5;
outlinePass.edgeGlow      = 0.4;
outlinePass.edgeThickness = 1.5;
outlinePass.pulsePeriod   = 0;
outlinePass.visibleEdgeColor.set('#ffffff');
outlinePass.hiddenEdgeColor.set('#555555');
composer.addPass(outlinePass);

const fxaaPass = new ShaderPass(FXAAShader);
composer.addPass(fxaaPass);
composer.addPass(new OutputPass());

// ── Resize ──
function onResize() {
  const w = viewport.clientWidth;
  const h = viewport.clientHeight;
  if (w === 0 || h === 0) return;
  renderer.setSize(w, h, false);
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
  composer.setSize(w, h);
  const pr = renderer.getPixelRatio();
  fxaaPass.material.uniforms['resolution'].value.set(1/(w*pr), 1/(h*pr));
}
new ResizeObserver(onResize).observe(viewport);
onResize();

// ═══════════════════════════════════════════════════════════════════════════
// RAYCASTING  — pointer-based (mouse + touch unified)
//   We track pointerdown position; fire selection only when the pointer
//   barely moved (tap / click, not drag / pan).
// ═══════════════════════════════════════════════════════════════════════════
const raycaster = new THREE.Raycaster();
const ptr       = new THREE.Vector2();

let _pdX = 0, _pdY = 0, _pdTime = 0;
const TAP_MAX_DIST = 8;   // px — max movement to still count as a tap
const TAP_MAX_MS   = 400; // ms — max duration

function getCanvasXY(e) {
  // Use clientX/Y for both PointerEvent (mouse) and the touch extracted below
  return { x: e.clientX, y: e.clientY };
}

canvas.addEventListener('pointerdown', e => {
  _pdX    = e.clientX;
  _pdY    = e.clientY;
  _pdTime = Date.now();
}, { passive: true });

canvas.addEventListener('pointerup', e => {
  const dx   = e.clientX - _pdX;
  const dy   = e.clientY - _pdY;
  const dist = Math.sqrt(dx*dx + dy*dy);
  const dt   = Date.now() - _pdTime;
  if (dist > TAP_MAX_DIST || dt > TAP_MAX_MS) return;

  const r  = canvas.getBoundingClientRect();
  ptr.x    =  ((e.clientX - r.left) / r.width)  * 2 - 1;
  ptr.y    = -((e.clientY - r.top)  / r.height) * 2 + 1;

  raycaster.setFromCamera(ptr, camera);
  const hits = raycaster.intersectObjects(scene.children, true);

  // ── KEY FIX: iterate ALL hits, not just hits[0].
  // A foreground mesh (ground, fence, outer shell) can block a zone that sits
  // behind it from the camera's perspective.  We skip non-zone hits and take
  // the first hit whose ancestor is a named zone.
  const zo = firstZoneHit(hits);
  if (zo) selectZone(zo);
}, { passive: true });

// Hover cursor (desktop only)
canvas.addEventListener('pointermove', e => {
  if (e.pointerType === 'touch') return;
  const r = canvas.getBoundingClientRect();
  ptr.x    =  ((e.clientX - r.left) / r.width)  * 2 - 1;
  ptr.y    = -((e.clientY - r.top)  / r.height) * 2 + 1;
  raycaster.setFromCamera(ptr, camera);
  const hits = raycaster.intersectObjects(scene.children, true);
  canvas.style.cursor = firstZoneHit(hits) ? 'pointer' : 'default';
}, { passive: true });

// Walk up the parent chain of a mesh to find a named zone ancestor.
function findZoneObj(obj) {
  let cur = obj;
  let found = null;
  while (cur) {
    if (cur.name && ZONE_NAMES.has(cur.name)) {
      found = cur;
    }
    cur = cur.parent;
  }
  return found;
}

// Scan every hit (nearest → farthest) and return the first that belongs to a
// known zone.  This skips opaque foreground geometry that has no zone name.
function firstZoneHit(hits) {
  for (const hit of hits) {
    const zo = findZoneObj(hit.object);
    if (zo && ZONE_DATA[zo.name]) return zo;
  }
  return null;
}

// ═══════════════════════════════════════════════════════════════════════════
// SELECTION
// ═══════════════════════════════════════════════════════════════════════════
function selectZone(zoneObj) {
  selectedZone = zoneObj.name;
  outlinePass.selectedObjects = [zoneObj];
  focusOn(zoneObj);
  document.getElementById('back-btn').classList.add('show');
  document.getElementById('cursor-hint').classList.add('hide');
  renderPanel();

  // On mobile, scroll the info panel into view
  if (window.innerWidth <= 768) {
    setTimeout(() => {
      document.getElementById('info-panel').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 300);
  }
}

function clearSelection() {
  selectedZone = null;
  outlinePass.selectedObjects = [];
  resetCam();
  document.getElementById('back-btn').classList.remove('show');
  document.getElementById('cursor-hint').classList.remove('hide');
  renderPanel();
}

// ═══════════════════════════════════════════════════════════════════════════
// CAMERA ANIMATION
// ═══════════════════════════════════════════════════════════════════════════
let camTarget = null, camLook = null, camAnim = false;

function focusOn(obj) {
  const box  = new THREE.Box3().setFromObject(obj);
  const ctr  = box.getCenter(new THREE.Vector3());
  const size = box.getSize(new THREE.Vector3());
  const dim  = Math.max(size.x, size.y, size.z) || 5;

  const dir = camera.position.clone().sub(ctr);
  if (dir.length() < 0.01) dir.set(1, 1, 1);
  dir.normalize().multiplyScalar(dim * 3.0);
  dir.y = Math.max(dir.y, dim * 1.3);

  camTarget = ctr.clone().add(dir);
  camLook   = ctr.clone();
  camAnim   = true;
}

function resetCam() {
  camTarget = initialCameraPos.clone();
  camLook   = new THREE.Vector3(0, 0, 0);
  camAnim   = true;
}

// ═══════════════════════════════════════════════════════════════════════════
// PANEL RENDERING
// ═══════════════════════════════════════════════════════════════════════════
function renderPanel() {
  const t  = UI[currentLang];
  const el = document.getElementById('panel-content');

  el.classList.remove('panel-anim');
  void el.offsetWidth;
  el.classList.add('panel-anim');

  if (!selectedZone) {
    el.innerHTML = `
      <div class="p-head">
        <div class="p-tag">🌿 ${t.gen_tag}</div>
        <div class="p-title">${t.gen_title}</div>
        <div class="p-subtitle">${t.gen_sub}</div>
      </div>
      <div class="p-body">
        <div class="p-img"><span class="p-img-icon">🌳</span></div>
        <div class="p-desc">${t.gen_desc}</div>
        <div class="p-stats">
          <div class="stat-card"><div class="stat-label">${t.area_l}</div><div class="stat-val">${t.area_v}</div></div>
          <div class="stat-card"><div class="stat-label">${t.spc_l}</div><div class="stat-val">${t.spc_v}</div></div>
          <div class="stat-card"><div class="stat-label">${t.fnd_l}</div><div class="stat-val">${t.fnd_v}</div></div>
          <div class="stat-card"><div class="stat-label">${t.zn_l}</div><div class="stat-val">${t.zn_v}</div></div>
        </div>
      </div>
      <div class="p-hint">
        <span class="p-hint-icon">◉</span>
        <span>${t.sel_hint}</span>
      </div>`;
  } else {
    const zd = ZONE_DATA[selectedZone]?.[currentLang];
    if (!zd) return;
    const icon = /^\d/.test(selectedZone) ? '🌱' : '🌿';
    el.innerHTML = `
      <div class="p-head">
        <div class="p-tag">🗺 ${t.zone_tag} ${displayId(selectedZone)}</div>
        <div class="p-title">${zd.name}</div>
        <div class="p-subtitle">${t.gen_sub}</div>
      </div>
      <div class="p-body">
        <div class="p-img"><span class="p-img-icon">${icon}</span></div>
        <div class="p-desc">${zd.desc}</div>
        <div class="p-props">
          <div class="prop-row"><span class="prop-key">${t.type_l}</span><span class="prop-val">${zd.type}</span></div>
          <div class="prop-row"><span class="prop-key">${t.plants_l}</span><span class="prop-val">${zd.plants}</span></div>
          <div class="prop-row"><span class="prop-key">ID</span><span class="prop-val">${selectedZone}</span></div>
        </div>
      </div>`;
  }

  document.getElementById('panel-footer').textContent = t.footer;
}

// ═══════════════════════════════════════════════════════════════════════════
// LANGUAGE SWITCH
// ═══════════════════════════════════════════════════════════════════════════
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentLang = btn.dataset.lang;
    const t = UI[currentLang];
    document.getElementById('hdr-title').textContent     = t.title;
    document.getElementById('hdr-sub').textContent       = t.sub;
    document.getElementById('loading-label').textContent = t.loading;
    document.getElementById('back-label').textContent    = t.back;
    document.getElementById('cursor-hint').textContent   = t.cursor_hint;
    renderPanel();
  });
});

document.getElementById('back-btn').addEventListener('click', clearSelection);

// ═══════════════════════════════════════════════════════════════════════════
// LOAD GLB
// ═══════════════════════════════════════════════════════════════════════════
const glLoader = new GLTFLoader();
const loadEl   = document.getElementById('loading');
const pctEl    = document.getElementById('load-pct');
const barEl    = document.getElementById('loader-bar');

glLoader.load(
  'BotSadBezKol.glb',
  gltf => {
    scene.add(gltf.scene);
    gltf.scene.traverse(child => {
      if (child.isMesh) {child.castShadow = true; child.receiveShadow = true; }
    });

    const box  = new THREE.Box3().setFromObject(gltf.scene);
    const ctr  = box.getCenter(new THREE.Vector3());
    const size = box.getSize(new THREE.Vector3());
    const dim  = Math.max(size.x, size.y, size.z);

    initialCameraPos.set(ctr.x, ctr.y + dim * 0.65, ctr.z + dim * 1.1);
    camera.position.copy(initialCameraPos);
    controls.target.copy(ctr);
    controls.update();

    grid.position.y = box.min.y;

    loadEl.classList.add('hidden');
    setTimeout(() => loadEl.style.display = 'none', 750);
    renderPanel();
  },
  prog => {
    if (prog.total > 0) {
      const p = Math.round((prog.loaded / prog.total) * 100);
      pctEl.textContent = `${p}%`;
      barEl.style.width = `${p}%`;
    }
  },
  err => {
    console.error('GLB load error:', err);
    pctEl.textContent = '⚠ Файл жүктелмеді / Файл не загружен / Failed to load';
    pctEl.style.color = '#ff5555';
  }
);

// ═══════════════════════════════════════════════════════════════════════════
// RENDER LOOP
// ═══════════════════════════════════════════════════════════════════════════
function animate() {
  requestAnimationFrame(animate);

  if (camAnim && camTarget && camLook) {
    // Lerp camera directly — do NOT call controls.update() this frame
    // so OrbitControls damping doesn't fight our animation.
    camera.position.lerp(camTarget, 0.01);
    controls.target.lerp(camLook, 0.01);
    camera.lookAt(controls.target);
    if (camera.position.distanceTo(camTarget) < 0.05) {
      camera.position.copy(camTarget);
      controls.target.copy(camLook);
      camAnim = false;
      controls.update(); // sync internal state once animation ends
    }
  } else {
    controls.update();
  }
  composer.render();
}

animate();
renderPanel();
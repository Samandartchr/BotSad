import * as THREE from 'three';
import { OrbitControls }  from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader }     from 'three/addons/loaders/GLTFLoader.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass }     from 'three/addons/postprocessing/RenderPass.js';
import { OutlinePass }    from 'three/addons/postprocessing/OutlinePass.js';
import { OutputPass }     from 'three/addons/postprocessing/OutputPass.js';
import { ShaderPass }     from 'three/addons/postprocessing/ShaderPass.js';
import { FXAAShader }     from 'three/addons/shaders/FXAAShader.js';
import { RGBELoader }     from 'three/addons/loaders/RGBELoader.js';
import zonesData from './zones.json';
import modelUrl  from './BotSadBezKol.glb?url';

// ═══════════════════════════════════════════════════════════════
// SHARED: UI TRANSLATIONS
// ═══════════════════════════════════════════════════════════════
const UI = {
  kk:{
    title:'Ботаникалық бақ', sub:'Қ.А. Яссауи атындағы ХҚТУ',
    loading:'Жүктелуде…', back:'Артқа',
    hint3d:'3D моделдегі зонаны басыңыз',
    hint2d:'Зонаны басыңыз',
    gen_tag:'Жалпы ақпарат', gen_title:'ХҚТУ Ботаникалық бағы',
    gen_sub:'Түркістан қаласы, Қазақстан',
    gen_desc:'Халықаралық Қазақ-Түрік университетінің ботаникалық бағы — аймақтың ірі ғылыми-білім беру кешені. Бақ 4,5 гектарлық аумақта орналасқан, коллекцияда 1000-нан астам өсімдік түрі бар. Студенттер мен ғалымдар үшін маңызды оқу-зерттеу алаңы.',
    area_l:'Аудан', area_v:'4.5 га',
    spc_l:'Өсімдік түрлері', spc_v:'1 000+',
    fnd_l:'Негізделген', fnd_v:'1991',
    zn_l:'Аймақ саны', zn_v:'48',
    sel_hint:'Кез келген аймақты немесе тізімнен басыңыз',
    zone_tag:'Аймақ', type_l:'Аймақ түрі', plants_l:'Өсімдіктер',
    footer:'ХҚТУ · Ботаникалық бақ', zones_title:'Зоналар тізімі',
    lang_label:'Тіл / Язык', mode_label:'Режим',
  },
  ru:{
    title:'Ботанический сад', sub:'МКТУ им. Х.А. Ясави',
    loading:'Загрузка…', back:'Назад',
    hint3d:'Нажмите на зону в 3D-модели',
    hint2d:'Нажмите на зону',
    gen_tag:'Общая информация', gen_title:'Ботанический сад МКТУ',
    gen_sub:'г. Туркестан, Казахстан',
    gen_desc:'Ботанический сад МКТУ — крупный научно-образовательный комплекс. Расположен на площади 4,5 гектара, коллекция насчитывает более 1000 видов растений. Является ключевой учебно-исследовательской площадкой университета.',
    area_l:'Площадь', area_v:'4.5 га',
    spc_l:'Видов растений', spc_v:'1 000+',
    fnd_l:'Основан', fnd_v:'1991',
    zn_l:'Число зон', zn_v:'48',
    sel_hint:'Нажмите на любую зону на карте или в списке',
    zone_tag:'Зона', type_l:'Тип зоны', plants_l:'Растений',
    footer:'МКТУ · Ботанический сад', zones_title:'Список зон',
    lang_label:'Тіл / Язык', mode_label:'Режим',
  },
  en:{
    title:'Botanical Garden', sub:'IKTU named after H.A. Yassawi',
    loading:'Loading…', back:'Back',
    hint3d:'Click on a zone in the 3D model',
    hint2d:'Click on a zone',
    gen_tag:'General Info', gen_title:'IKTU Botanical Garden',
    gen_sub:'Turkestan, Kazakhstan',
    gen_desc:'The Botanical Garden of the International Kazakh-Turkish University is a major scientific and educational complex spanning 4.5 hectares with over 1,000 plant species. It serves as a key research and teaching facility.',
    area_l:'Area', area_v:'4.5 ha',
    spc_l:'Plant species', spc_v:'1,000+',
    fnd_l:'Founded', fnd_v:'1991',
    zn_l:'Zones', zn_v:'48',
    sel_hint:'Click any zone on the map or in the list',
    zone_tag:'Zone', type_l:'Zone type', plants_l:'Plants',
    footer:'IKTU · Botanical Garden', zones_title:'Zone list',
    lang_label:'Language', mode_label:'Mode',
  },
  tr:{
    title:'Botanik Bahçesi', sub:'H.A. Yesevi UKTÜ',
    loading:'Yükleniyor…', back:'Geri',
    hint3d:'3D modeldeki bir bölgeye tıklayın',
    hint2d:'Bir bölgeye tıklayın',
    gen_tag:'Genel Bilgi', gen_title:'UKTÜ Botanik Bahçesi',
    gen_sub:'Türkistan, Kazakistan',
    gen_desc:"UKTÜ Botanik Bahçesi, bölgenin önde gelen bilimsel ve eğitim kompleksidir. 4,5 hektarlık alanda 1.000'den fazla bitki türü bulunmakta olup sistematik araştırmalar sürdürülmektedir.",
    area_l:'Alan', area_v:'4.5 ha',
    spc_l:'Bitki türleri', spc_v:'1.000+',
    fnd_l:'Kuruluş', fnd_v:'1991',
    zn_l:'Bölge sayısı', zn_v:'48',
    sel_hint:'Haritada veya listeden herhangi bir bölgeye tıklayın',
    zone_tag:'Bölge', type_l:'Bölge türü', plants_l:'Bitkiler',
    footer:'UKTÜ · Botanik Bahçesi', zones_title:'Bölge listesi',
    lang_label:'Dil', mode_label:'Mod',
  },
};

// ═══════════════════════════════════════════════════════════════
// SHARED: ZONE DATA
// ═══════════════════════════════════════════════════════════════
const DISPLAY_ID = {
  '21':'2.1','131':'13.1','141':'14.1','21_1':'21','241':'24.1','251':'25.1'
};
const displayId = id => DISPLAY_ID[id] ?? id;

const EN_T = ['Dendrology','Herbaceous Perennials','Rose Garden','Medicinal Plants','Steppe Flora','Conifers','Aquatic Plants','Bulb Collection','Ornamental Grasses','Shade Garden','Alpine Plants','Tropical House'];
const KK_T = ['Дендрология','Көпжылдық шөптесіндер','Раушан бағы','Дәрілік өсімдіктер','Дала флорасы','Қылқан жапырақтылар','Су өсімдіктері','Пияздық коллекция','Сәндік астықтар','Көлеңкелі бақша','Альпі өсімдіктері','Тропикалық үй'];
const RU_T = ['Дендрология','Травянистые многолетники','Розарий','Лекарственные растения','Степная флора','Хвойные','Водные растения','Луковичные','Декоративные злаки','Теневой сад','Альпийские растения','Тропикарий'];
const TR_T = ['Dendroloji','Çok Yıllık Bitkiler','Gül Bahçesi','Tıbbi Bitkiler','Bozkır Florası','İğne Yapraklılar','Su Bitkileri','Soğanlı Bitkiler','Süs Çimleri','Gölge Bahçesi','Alp Bitkileri','Tropikal Ev'];

const ZONE_DATA = {};

ZONE_DATA['cont'] = {
  kk:{name:'Контейнерлік аймақ',desc:'Контейнерлерде өсірілетін сирек және экзотикалық өсімдіктер жиынтығы.',type:'Арнайы',plants:'120+'},
  ru:{name:'Контейнерная зона',desc:'Коллекция редких и экзотических растений, выращиваемых в контейнерах.',type:'Специальная',plants:'120+'},
  en:{name:'Container Zone',desc:'Rare and exotic species grown in containers under controlled conditions.',type:'Special',plants:'120+'},
  tr:{name:'Konteyner Bölgesi',desc:'Nadir ve egzotik türlerin konteynerlerde yetiştirildiği koleksiyon.',type:'Özel',plants:'120+'},
};
ZONE_DATA['okr'] = {
  kk:{name:'Қоршау аймағы',desc:'Ботаникалық бақтың сыртқы шекарасын белгілейтін аймақ.',type:'Шекара',plants:'—'},
  ru:{name:'Ограждение',desc:'Зона внешней границы ботанического сада.',type:'Периметр',plants:'—'},
  en:{name:'Perimeter',desc:'Outer boundary zone of the botanical garden.',type:'Boundary',plants:'—'},
  tr:{name:'Çevre Sınırı',desc:'Botanik bahçesinin dış sınır bölgesi.',type:'Sınır',plants:'—'},
};
for(const id of ['131','141','241','251','21_1']){
  const n=12+(parseInt(id)*3%30); const d=displayId(id);
  ZONE_DATA[id]={
    kk:{name:`${d}-зона`,desc:`${d}-зона — ботаникалық бақтың ішкі аймағы. Жүйелі бақылаулар жүргізілуде.`,type:'Ішкі аймақ',plants:`${n}+`},
    ru:{name:`Зона ${d}`,desc:`Зона ${d} — внутренняя подзона ботанического сада. Ведутся систематические наблюдения.`,type:'Подзона',plants:`${n}+`},
    en:{name:`Zone ${d}`,desc:`Zone ${d} is an internal sub-zone of the botanical garden under systematic observation.`,type:'Sub-zone',plants:`${n}+`},
    tr:{name:`Bölge ${d}`,desc:`Bölge ${d}, botanik bahçesinin iç alt bölgesidir. Sistematik gözlemler yürütülmektedir.`,type:'Alt bölge',plants:`${n}+`},
  };
}
for(let i=1;i<=48;i++){
  const ti=(i-1)%EN_T.length; const pc=15+(i*7%60); const d=displayId(String(i));
  ZONE_DATA[String(i)]={
    kk:{name:`${d}-зона`,desc:`${d}-зона — ботаникалық бақтың ${KK_T[ti].toLowerCase()} бөлімі. Зонада ${pc}-дан астам белгіленген өсімдік түрі бар, жүйелі зерттеулер жүргізілуде.`,type:KK_T[ti],plants:`${pc}+`},
    ru:{name:`Зона ${d}`,desc:`Зона ${d} — раздел ${RU_T[ti].toLowerCase()} ботанического сада. Насчитывает более ${pc} документированных видов, ведутся систематические исследования.`,type:RU_T[ti],plants:`${pc}+`},
    en:{name:`Zone ${d}`,desc:`Zone ${d} is the ${EN_T[ti]} section. Features over ${pc} documented species with ongoing systematic research.`,type:EN_T[ti],plants:`${pc}+`},
    tr:{name:`Bölge ${d}`,desc:`Bölge ${d}, ${TR_T[ti]} bölümüdür. ${pc}+ belgelenmiş tür barındırmakta ve araştırmalar sürdürülmektedir.`,type:TR_T[ti],plants:`${pc}+`},
  };
}

const MAP_2D_TO_3D = {
  '1779353153553':'1',  '1779353203097':'2',   '1779353212969':'21',
  '1779353256345':'3',  '1779353347888':'4',   '1779353355936':'5',
  '1779353527000':'6',  '1779353534520':'7',   '1779353543743':'8',
  '1779353564216':'9',  '1779353590024':'10',  '1779353604456':'11',
  '1779353143161':'12', '1779353224032':'13',  '1779353239624':'131',
  '1779353264800':'14', '1779353454416':'141', '1779353374343':'15',
  '1779353711151':'16', '1779353700311':'17',  '1779353691079':'18',
  '1779353624375':'19', '1779353633167':'20',  '1779353281097':'21_1',
  '1779353289217':'22', '1779353382784':'23',  '1779353904398':'24',
  '1779353926006':'241','1779353856862':'25',  '1779353652751':'251',
  '1779353418056':'26', '1779353428336':'27',  '1779353437072':'28',
  '1779353405080':'29', '1779353393224':'30',  '1779352729915':'31',
  '1779352739794':'32', '1779353075385':'33',  '1779352704739':'34',
  '1779352791219':'36', '1779352829819':'36',  '1779352929778':'37',
  '1779353001802':'38', '1779353041082':'39',  '1779352530332':'40',
  '1779352556604':'41', '1779352575403':'42',  '1779352593187':'43',
  '1779352603604':'44', '1779352645835':'45',  '1779352865306':'46',
  '1779352892714':'47', '1779352916538':'47',  '1779352881410':'48',
};

const ZONE_ORDER = [
  '1','2','21','3','4','5','6','7','8','9','10','11',
  '12','13','131','14','141','15','16','17','18','19','20',
  '21_1','22','23','24','241','25','251','26','27','28',
  '29','30','31','32','33','34','35','36','37','38','39',
  '40','41','42','43','44','45','46','47','48',
];

const ZONE_NAMES_3D = new Set([
  'cont','okr',
  ...Array.from({length:48},(_,i)=>String(i+1)),
  '131','141','241','251','21_1',
]);

// ═══════════════════════════════════════════════════════════════
// STATE
// ═══════════════════════════════════════════════════════════════
let currentLang    = 'kk';
let currentMode    = '2d';
let selectedZoneId = null;

// ═══════════════════════════════════════════════════════════════
// MOBILE DRAWER
// ═══════════════════════════════════════════════════════════════
const rightPanel    = document.getElementById('right-panel');
const mobileOverlay = document.getElementById('mobile-overlay');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileCloseBtn= document.getElementById('mobile-close-btn');

function isMobile(){ return window.innerWidth <= 768; }

function openMobileDrawer(){
  rightPanel.classList.add('mobile-open');
  mobileOverlay.classList.add('show');
  mobileMenuBtn.classList.add('open-state');
  mobileMenuBtn.textContent = '>';
  mobileMenuBtn.setAttribute('aria-label', 'Мәзірді жабу');
}

function closeMobileDrawer(){
  rightPanel.classList.remove('mobile-open');
  mobileOverlay.classList.remove('show');
  mobileMenuBtn.classList.remove('open-state');
  mobileMenuBtn.textContent = '<';
  mobileMenuBtn.setAttribute('aria-label', 'Мәзірді ашу');
}

mobileMenuBtn.addEventListener('click', ()=>{
  if(rightPanel.classList.contains('mobile-open')) closeMobileDrawer();
  else openMobileDrawer();
});

mobileCloseBtn.addEventListener('click', closeMobileDrawer);
mobileOverlay.addEventListener('click', closeMobileDrawer);

// ═══════════════════════════════════════════════════════════════
// 2D MAP
// ═══════════════════════════════════════════════════════════════
const leafMap = L.map('map', {zoomControl:true}).setView([43.298, 68.302], 15);

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
      if (MAP_2D_TO_3D[jsonId] !== selectedZoneId) this.setStyle(S_HOVER);
    });
    poly.on('mouseout', function() {
      if (MAP_2D_TO_3D[jsonId] !== selectedZoneId) this.setStyle(S_NORMAL);
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

// ═══════════════════════════════════════════════════════════════
// 3D SCENE
// ═══════════════════════════════════════════════════════════════
const canvas3d   = document.getElementById('canvas3d');
const canvasView = document.getElementById('canvas-view');

const renderer = new THREE.WebGLRenderer({canvas:canvas3d, antialias:true});
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type    = THREE.PCFSoftShadowMap;
renderer.toneMapping       = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1;

const scene3d = new THREE.Scene();
new RGBELoader().load('https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/venice_sunset_1k.hdr', tex=>{
  tex.mapping = THREE.EquirectangularReflectionMapping;
  scene3d.environment = tex;
});
scene3d.background = new THREE.Color(0x1b2b24);
scene3d.fog = new THREE.Fog(0x030806, 80, 250);

const camera3d = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
const initCamPos = new THREE.Vector3(0, 20, 40);
camera3d.position.copy(initCamPos);

const controls3d = new OrbitControls(camera3d, canvas3d);
controls3d.enableDamping = true;
controls3d.dampingFactor = 0.07;
controls3d.minDistance   = 0.5;
controls3d.maxDistance   = 150;
controls3d.maxPolarAngle = Math.PI/2 + 0.08;
controls3d.touches = {ONE:THREE.TOUCH.ROTATE, TWO:THREE.TOUCH.DOLLY_PAN};
controls3d.addEventListener('start', ()=>{ camAnim=false; });

scene3d.add(new THREE.AmbientLight(0x8fa892, 0.55));
const sun = new THREE.DirectionalLight(0xfff3d0, 1.5);
sun.position.set(30,60,25); sun.castShadow=true;
sun.shadow.mapSize.set(2048,2048); sun.shadow.camera.near=.5; sun.shadow.camera.far=250;
['left','right','top','bottom'].forEach((d,i)=>sun.shadow.camera[d]=[-60,60,60,-60][i]);
scene3d.add(sun);
const fill3d = new THREE.DirectionalLight(0x4a8f5a, 0.25);
fill3d.position.set(-20,10,-15); scene3d.add(fill3d);
const gridH = new THREE.GridHelper(15,6,0x1a3520,0x111e12);
gridH.material.opacity=.25; gridH.material.transparent=true; scene3d.add(gridH);

const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene3d, camera3d));
const outlinePass = new OutlinePass(
  new THREE.Vector2(canvasView.clientWidth||800, canvasView.clientHeight||600),
  scene3d, camera3d
);
outlinePass.edgeStrength=3.5; outlinePass.edgeGlow=0.4; outlinePass.edgeThickness=1.5;
outlinePass.visibleEdgeColor.set('#ffffff'); outlinePass.hiddenEdgeColor.set('#555');
composer.addPass(outlinePass);
const fxaaPass = new ShaderPass(FXAAShader);
composer.addPass(fxaaPass);
composer.addPass(new OutputPass());

function onResize(){
  const w = canvasView.clientWidth, h = canvasView.clientHeight;
  if(!w||!h) return;
  renderer.setSize(w,h,false);
  camera3d.aspect = w/h; camera3d.updateProjectionMatrix();
  composer.setSize(w,h);
  const pr = renderer.getPixelRatio();
  fxaaPass.material.uniforms['resolution'].value.set(1/(w*pr),1/(h*pr));
}
new ResizeObserver(onResize).observe(canvasView);

const raycaster = new THREE.Raycaster();
const ptr3 = new THREE.Vector2();
let _px=0,_py=0,_pt=0;

canvas3d.addEventListener('pointerdown',e=>{_px=e.clientX;_py=e.clientY;_pt=Date.now();},{passive:true});
canvas3d.addEventListener('pointerup',e=>{
  const dx=e.clientX-_px,dy=e.clientY-_py;
  if(Math.sqrt(dx*dx+dy*dy)>8||Date.now()-_pt>400) return;
  const r=canvas3d.getBoundingClientRect();
  ptr3.x=((e.clientX-r.left)/r.width)*2-1;
  ptr3.y=-((e.clientY-r.top)/r.height)*2+1;
  raycaster.setFromCamera(ptr3,camera3d);
  const zo=firstZoneHit(raycaster.intersectObjects(scene3d.children,true));
  if(zo) selectZone(zo.name,'3d');
},{passive:true});

canvas3d.addEventListener('pointermove',e=>{
  if(e.pointerType==='touch') return;
  const r=canvas3d.getBoundingClientRect();
  ptr3.x=((e.clientX-r.left)/r.width)*2-1;
  ptr3.y=-((e.clientY-r.top)/r.height)*2+1;
  raycaster.setFromCamera(ptr3,camera3d);
  canvas3d.style.cursor=firstZoneHit(raycaster.intersectObjects(scene3d.children,true))?'pointer':'default';
},{passive:true});

function findZoneObj(obj){
  let cur=obj,found=null;
  while(cur){if(cur.name&&ZONE_NAMES_3D.has(cur.name))found=cur;cur=cur.parent;}
  return found;
}
function firstZoneHit(hits){
  for(const h of hits){
    const z=findZoneObj(h.object);
    if(z&&ZONE_DATA[z.name]) return z;
  }
  return null;
}
function findZone3d(name){
  let found=null;
  scene3d.traverse(o=>{if(!found&&o.name===name&&ZONE_NAMES_3D.has(o.name))found=o;});
  return found;
}

let camTarget=null,camLook=null,camAnim=false;
function focusOn(obj){
  const box=new THREE.Box3().setFromObject(obj);
  const ctr=box.getCenter(new THREE.Vector3());
  const dim=Math.max(...box.getSize(new THREE.Vector3()).toArray())||5;
  const dir=camera3d.position.clone().sub(ctr);
  if(dir.length()<.01)dir.set(1,1,1);
  dir.normalize().multiplyScalar(dim*3);
  dir.y=Math.max(dir.y,dim*1.3);
  camTarget=ctr.clone().add(dir); camLook=ctr.clone(); camAnim=true;
}
function resetCam(){
  camTarget=initCamPos.clone(); camLook=new THREE.Vector3(0,0,0); camAnim=true;
}

new GLTFLoader().load(
  modelUrl,
  gltf => {
    scene3d.add(gltf.scene);
    gltf.scene.traverse(c => {
      if (c.isMesh) { c.castShadow=true; c.receiveShadow=true; }
    });
    const box = new THREE.Box3().setFromObject(gltf.scene);
    const ctr = box.getCenter(new THREE.Vector3());
    const dim = Math.max(...box.getSize(new THREE.Vector3()).toArray());
    initCamPos.set(ctr.x, ctr.y+dim*.65, ctr.z+dim*1.1);
    camera3d.position.copy(initCamPos);
    controls3d.target.copy(ctr);
    controls3d.update();
    gridH.position.y = box.min.y;
    const ld = document.getElementById('loading');
    ld.classList.add('hidden');
    setTimeout(() => (ld.style.display='none'), 700);
  },
  p => {
    if(p.total>0){
      const pct=Math.round((p.loaded/p.total)*100);
      document.getElementById('load-pct').textContent=`${pct}%`;
      document.getElementById('loader-bar').style.width=`${pct}%`;
    }
  },
  err => {
    console.error(err);
    document.getElementById('load-pct').textContent='⚠ Failed';
  }
);

function animate(){
  requestAnimationFrame(animate);
  if(camAnim&&camTarget&&camLook){
    camera3d.position.lerp(camTarget,.1);
    controls3d.target.lerp(camLook,.1);
    camera3d.lookAt(controls3d.target);
    if(camera3d.position.distanceTo(camTarget)<.05){
      camera3d.position.copy(camTarget);
      controls3d.target.copy(camLook);
      camAnim=false; controls3d.update();
    }
  } else { controls3d.update(); }
  if(currentMode==='3d') composer.render();
}
animate();

// ═══════════════════════════════════════════════════════════════
// MODE TOGGLE
// ═══════════════════════════════════════════════════════════════
function switchMode(mode){
  currentMode = mode;
  const mv = document.getElementById('map-view');
  const cv = document.getElementById('canvas-view');
  mv.style.display = mode==='2d' ? 'block' : 'none';
  cv.style.display = mode==='3d' ? 'block' : 'none';
  if(mode==='3d') cv.classList.add('view-fade-in');
  else mv.classList.add('view-fade-in');
  document.getElementById('btn-2d').classList.toggle('active', mode==='2d');
  document.getElementById('btn-3d').classList.toggle('active', mode==='3d');
  if(mode==='2d'){
    leafMap.invalidateSize();
    if(selectedZoneId) panTo2d(selectedZoneId);
  } else {
    setTimeout(()=>{ onResize(); if(selectedZoneId){ const o=findZone3d(selectedZoneId); if(o)focusOn(o); } }, 50);
  }
  updateHints();
}

document.getElementById('btn-2d').addEventListener('click', ()=>switchMode('2d'));
document.getElementById('btn-3d').addEventListener('click', ()=>switchMode('3d'));

// ═══════════════════════════════════════════════════════════════
// ZONE SELECTION
// ═══════════════════════════════════════════════════════════════
function selectZone(id3d, source){
  selectedZoneId = id3d;

  if(id3d) highlight2d(id3d);
  else { Object.values(leafLayers).forEach(l=>l.setStyle(S_NORMAL)); }
  if(source==='2d' && id3d) panTo2d(id3d);

  if(id3d){
    const obj = findZone3d(id3d);
    outlinePass.selectedObjects = obj ? [obj] : [];
    if(obj && source==='3d') focusOn(obj);
    if(obj && source==='list' && currentMode==='3d') focusOn(obj);
  } else {
    outlinePass.selectedObjects = [];
  }

  // Highlight in both desktop zone-list and mobile zone-list-m
  document.querySelectorAll('.zl-item').forEach(el=>{
    el.classList.toggle('active', el.dataset.zoneId===id3d);
  });

  // Scroll active item into view in both lists
  if(id3d){
    ['#zone-list', '#zone-list-m'].forEach(sel=>{
      const el = document.querySelector(`${sel} .zl-item[data-zone-id="${id3d}"]`);
      if(el) el.scrollIntoView({block:'nearest',behavior:'smooth'});
    });
  }

  const hasSel = !!id3d;
  document.getElementById('back-btn').classList.toggle('show', hasSel);
  document.getElementById('cursor-hint-2d').classList.toggle('hide', hasSel);
  document.getElementById('cursor-hint-3d').classList.toggle('hide', hasSel);

  // On mobile, open drawer to show zone info when a zone is selected
  if(hasSel && isMobile() && source !== 'clear' && source !== '2d'){
    openMobileDrawer();
  }

  renderPanel();
}

function clearSelection(){
  selectZone(null,'clear');
  resetCam();
  if(isMobile()) closeMobileDrawer();
}

document.getElementById('back-btn').addEventListener('click', clearSelection);

// ═══════════════════════════════════════════════════════════════
// ZONE LIST — populates both desktop (#zone-list) and mobile (#zone-list-m)
// ═══════════════════════════════════════════════════════════════
function buildZoneListInto(container, isDesktop){
  container.innerHTML = '';
  let count = 0;
  ZONE_ORDER.forEach(id=>{
    const zd = ZONE_DATA[id]?.[currentLang];
    if(!zd) return;
    count++;
    const item = document.createElement('div');
    item.className = 'zl-item' + (id===selectedZoneId?' active':'');
    item.dataset.zoneId = id;
    item.innerHTML = `<span class="zl-num">${displayId(id)}</span><span class="zl-name">${zd.name}</span>`;
    item.addEventListener('click',()=>{
      selectZone(id,'list');
      if(currentMode==='2d') panTo2d(id);
      if(isMobile()) closeMobileDrawer();
    });
    container.appendChild(item);
  });
  return count;
}

function buildZoneList(){
  const desktopList = document.getElementById('zone-list');
  const mobileList  = document.getElementById('zone-list-m');

  const count = buildZoneListInto(desktopList, true);
  buildZoneListInto(mobileList, false);

  // Update both count badges
  document.getElementById('zone-count-badge').textContent = count;
  document.getElementById('zone-count-badge-m').textContent = count;
}

// ═══════════════════════════════════════════════════════════════
// PANEL
// ═══════════════════════════════════════════════════════════════
function renderPanel(){
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
      <div class="p-tag">🗺 ${t.zone_tag} ${displayId(selectedZoneId)}</div>
      <div class="p-title">${zd.name}</div>
      <div class="p-subtitle">${t.gen_sub}</div>
      <div class="p-img"><span class="p-img-icon">${icon}</span></div>
      <div class="p-desc">${zd.desc}</div>
      <div class="p-props">
        <div class="prop-row"><span class="prop-key">${t.type_l}</span><span class="prop-val">${zd.type}</span></div>
        <div class="prop-row"><span class="prop-key">${t.plants_l}</span><span class="prop-val">${zd.plants}</span></div>
        <div class="prop-row"><span class="prop-key">ID</span><span class="prop-val">${displayId(selectedZoneId)}</span></div>
      </div>`;
  }
  document.getElementById('panel-footer').textContent = t.footer;
}

// ═══════════════════════════════════════════════════════════════
// LANGUAGE
// ═══════════════════════════════════════════════════════════════
document.querySelectorAll('.lang-btn').forEach(btn=>{
  btn.addEventListener('click',()=>{
    // Mark active on all lang buttons (both panels share the same elements)
    document.querySelectorAll('.lang-btn').forEach(b=>{
      b.classList.toggle('active', b.dataset.lang === btn.dataset.lang);
    });
    currentLang = btn.dataset.lang;
    const t = UI[currentLang];
    document.getElementById('hdr-title').textContent    = t.title;
    document.getElementById('hdr-sub').textContent      = t.sub;
    document.getElementById('loading-label').textContent= t.loading;
    document.getElementById('back-label').textContent   = t.back;
    document.getElementById('zones-title-label').textContent   = t.zones_title;
    document.getElementById('zones-title-label-m').textContent = t.zones_title;
    updateHints();
    buildZoneList();
    renderPanel();
  });
});

function updateHints(){
  const t = UI[currentLang];
  document.getElementById('cursor-hint-2d').textContent = t.hint2d;
  document.getElementById('cursor-hint-3d').textContent = t.hint3d;
}

// ═══════════════════════════════════════════════════════════════
// INIT
// ═══════════════════════════════════════════════════════════════
buildZoneList();
renderPanel();
switchMode('2d');

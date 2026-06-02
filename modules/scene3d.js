import * as THREE from '../node_modules/three/build/three.module.js';
import { OrbitControls } from '../node_modules/three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from '../node_modules/three/examples/jsm/loaders/GLTFLoader.js';
import { EffectComposer } from '../node_modules/three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from '../node_modules/three/examples/jsm/postprocessing/RenderPass.js';
import { OutlinePass } from '../node_modules/three/examples/jsm/postprocessing/OutlinePass.js';
import { OutputPass } from '../node_modules/three/examples/jsm/postprocessing/OutputPass.js';
import { ShaderPass } from '../node_modules/three/examples/jsm/postprocessing/ShaderPass.js';
import { FXAAShader } from '../node_modules/three/examples/jsm/shaders/FXAAShader.js';
import { RGBELoader } from '../node_modules/three/examples/jsm/loaders/RGBELoader.js';
import { MODEL_TO_ZONE_ID, ZONE_DATA, ZONE_MODEL_NAMES } from './data/zones.js';
import { logModelStructure } from './modelDiagnostics.js';

export function create3dScene({ modelUrl, selectZone, getCurrentMode }) {
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
  
  const camera3d = new THREE.PerspectiveCamera(90, 1, 0.01, 1000);
  const initCamPos = new THREE.Vector3(0, 20, 40);
  camera3d.position.copy(initCamPos);
  
  const controls3d = new OrbitControls(camera3d, canvas3d);
  controls3d.enableDamping = true;
  controls3d.dampingFactor = 0.07;
  controls3d.minDistance   = 0.1;
  controls3d.maxDistance   = 5;
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
  outlinePass.edgeStrength=3; outlinePass.edgeGlow=0.4; outlinePass.edgeThickness=2;
  outlinePass.visibleEdgeColor.set('#00ff1a'); outlinePass.hiddenEdgeColor.set('#26ff00');
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
    if(zo) selectZone(MODEL_TO_ZONE_ID[zo.name],'3d');
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
    let cur=obj;
    while(cur){
      if(cur.name && ZONE_MODEL_NAMES.has(cur.name)) return cur; // первое совпадение снизу
      cur=cur.parent;
    }
    return null;
  }
  function firstZoneHit(hits){
    for(const h of hits){
      const z=findZoneObj(h.object);
      if(z && ZONE_DATA[MODEL_TO_ZONE_ID[z.name]]) return z;
    }
    return null;
  }
  function findZone3d(zoneId){
    const modelName = Object.keys(MODEL_TO_ZONE_ID).find(k=>MODEL_TO_ZONE_ID[k]===zoneId);
    if(!modelName) return null;
    let found=null;
    scene3d.traverse(o=>{ if(!found && o.name===modelName) found=o; });
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
        if (c.isMesh) {
  
          c.castShadow = true;
          c.receiveShadow = true;
  
          c.frustumCulled = false;
          c.renderOrder = 0;
  
          const mats = Array.isArray(c.material)
            ? c.material
            : [c.material];
  
          mats.forEach(m => {
            m.side = THREE.DoubleSide;
            m.alphaTest = 0.5;
            m.transparent = false;
            m.depthTest = true;
            m.depthWrite = true;
            m.blending = THREE.NormalBlending;
            m.needsUpdate = true;
          });
  
        }
      });
      logModelStructure(scene3d);
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
    if(getCurrentMode()==='3d') composer.render();
  }
  animate();
  
    function setSelectedZoneObject(zoneId) {
      const obj = zoneId ? findZone3d(zoneId) : null;
      outlinePass.selectedObjects = obj ? [obj] : [];
      return obj;
    }
  
    return { onResize, findZone3d, focusOn, resetCam, setSelectedZoneObject };
}

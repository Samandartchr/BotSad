export function createMobileDrawer() {
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

  return { isMobile, openMobileDrawer, closeMobileDrawer };
}

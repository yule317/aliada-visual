// Navbar móvil accesible
const toggle = document.querySelector('.navbar-toggle');
const menu   = document.getElementById('menu');
let prevFocus = null;

function setMenu(open){
  if(!toggle || !menu) return;
  toggle.setAttribute('aria-expanded', String(open));
  menu.classList.toggle('open', open);
  document.body.dataset.noScroll = open ? 'true' : 'false';
  if(open){
    prevFocus = document.activeElement;
    const first = menu.querySelector('a,button'); first && first.focus();
  }else{
    prevFocus && prevFocus.focus();
  }
}
if(toggle && menu){
  toggle.addEventListener('click', () => setMenu(!menu.classList.contains('open')));
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape' && menu.classList.contains('open')) setMenu(false);
  });
  document.addEventListener('click', (e) => {
    if(!menu.classList.contains('open')) return;
    if(!menu.contains(e.target) && !toggle.contains(e.target)) setMenu(false);
  });
}

// Año dinámico
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();

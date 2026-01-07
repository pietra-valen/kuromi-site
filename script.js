// CTA scroll
const cta = document.querySelector('.cta-btn');
if(cta){
  cta.onclick = () => {
    document.querySelector('#atelier')
      .scrollIntoView({behavior:'smooth'});
  };
}

// Fade sections
const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting) e.target.classList.add('visible');
  });
},{threshold:0.2});
sections.forEach(s=>observer.observe(s));

// ABRIR MODAIS (CORRIGIDO)
document.querySelectorAll('.atelier-card').forEach(card=>{
  card.onclick = () => {
    const modal = document.getElementById(card.dataset.modal);
    if(modal){
      modal.style.display = 'flex';
    }
  };
});

// FECHAR MODAIS
document.querySelectorAll('.close').forEach(btn=>{
  btn.onclick = () => {
    btn.closest('.modal').style.display = 'none';
  };
});

document.querySelectorAll('.modal').forEach(modal=>{
  modal.onclick = e => {
    if(e.target === modal){
      modal.style.display = 'none';
    }
  };
});
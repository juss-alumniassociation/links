// Keep this tiny: one year update and one viewport-independent header state.
document.getElementById('year').textContent = new Date().getFullYear();

const header = document.querySelector('.site-header');
const sentinel = document.querySelector('.masthead-sentinel');

function setCompact(compact) {
  header.classList.toggle('is-compact', compact);
}

// Restore initial scroll state before enabling transitions.
setCompact(window.scrollY > (window.matchMedia('(max-width: 600px)').matches ? 110 : 125));
new IntersectionObserver(([entry]) => {
  setCompact(!entry.isIntersecting);
  header.classList.add('is-ready');
}).observe(sentinel);

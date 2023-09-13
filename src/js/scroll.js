export { onScroll, onToTopBtn };

const toTopBtn = document.querySelector('.btn-to-top');

if (toTopBtn) {
  window.addEventListener('scroll', onScroll);
  toTopBtn.addEventListener('click', onToTopBtn);
}

function onScroll() {
  const scrolled = window.pageYOffset;
  const viewportHeight = document.documentElement.clientHeight;

  if (scrolled > viewportHeight) {
    toTopBtn.classList.add('btn-to-top--visible');
  }
  if (scrolled < viewportHeight) {
    toTopBtn.classList.remove('btn-to-top--visible');
  }
}

function onToTopBtn() {
  if (window.pageYOffset > 0) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

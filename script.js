window.addEventListener('scroll', function () {
  const header = document.querySelector('.headera');
  if (!header) return;
  if (window.scrollY > 10) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

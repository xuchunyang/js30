// https://davidwalsh.name/javascript-debounce-function
function debounce(func, wait = 20, immediate = true) {
  let timeout;
  return function() {
    const context = this, args = arguments;
    const later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const checkSlide = debounce(() => {
  for (const img of document.querySelectorAll('img')) {
    const slideInAt = (window.scrollY + window.innerHeight) - img.height / 2,
          imgButtom = img.offsetTop + img.height,
          isHalfShown = slideInAt > img.offsetTop,
          isInView = window.scrollY < imgButtom;

    isHalfShown && isInView ? img.classList.add('active') : img.classList.remove('active');
  }
});

window.addEventListener('scroll', checkSlide);

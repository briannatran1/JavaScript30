'use strict';

// select imgs
const sliderImages = document.querySelectorAll('.slide-in');

/** checks positioning of scroll */
function checkSlide(evt) {
  for (let img of sliderImages) {
    // half way through the image
    const slideInAt = (window.scrollY + window.innerHeight) - img.height / 2;
    // bottom of image
    const imageBottom = img.offsetTop + img.height;
    const isHalfShown = slideInAt > img.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBottom;

    if (isHalfShown && isNotScrolledPast) {
      img.classList.add('active');
    }
    else {
      img.classList.remove('active');
    }
  }
}

/** brings image back on page */
function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function () {
    var context = this, args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

window.addEventListener('scroll', debounce(checkSlide));
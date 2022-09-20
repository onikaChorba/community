import $ from "jquery";
document.addEventListener('DOMContentLoaded', function () {
  setInterval(() => animateImgCircle(), 5000),
    headerScroll()
})


function animateImgCircle() {
  const images = document.querySelectorAll('.image');
  let zeroTop = 0;
  let zeroLeft = 0;
  let zeroTransform = "";
  for (let i = 0; i < images.length; i++) {
    let currentElement = images[i];
    let nextElement = images[i + 1];
    if (i === 0) {
      zeroTop = window
        .getComputedStyle(currentElement, null)
        .getPropertyValue('top');
      zeroLeft = window
        .getComputedStyle(currentElement, null)
        .getPropertyValue('left');
      zeroTransform = window
        .getComputedStyle(currentElement, null)
        .getPropertyValue('transform');
    }
    if (nextElement) {
      let nextTop = window
        .getComputedStyle(nextElement, null)
        .getPropertyValue('top')
      let nextLeft = window
        .getComputedStyle(nextElement, null)
        .getPropertyValue('left')
      let nextTransform = window
        .getComputedStyle(nextElement, null)
        .getPropertyValue('transform');

      currentElement.style.top = nextTop;
      currentElement.style.left = nextLeft;
      currentElement.style.transform = nextTransform;
    } else {
      currentElement.style.top = zeroTop;
      currentElement.style.left = zeroLeft;
      currentElement.style.transform = zeroTransform;
    }
  }
}


//header
function headerScroll() {
  var header = $('.header'),
    scrollPrev = 0;

  $(window).scroll(function () {
    var scrolled = $(window).scrollTop();

    if (scrolled > 100 && scrolled > scrollPrev) {
      header.addClass('out');
    } else {
      header.removeClass('out');
    }
    scrollPrev = scrolled;
  });
}

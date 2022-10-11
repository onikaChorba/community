
document.addEventListener('DOMContentLoaded', function () {
  createObserver()
})

document.addEventListener('scroll', function () {
  headerScroll();
})

function createObserver() {
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 1
  }
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateImgCircle();
      }
    })
  }, options);

  const target = document.querySelector('.image');
  observer.observe(target);
}


function animateImgCircle() {
  let images = document.querySelectorAll('.image');
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
      const { top, left, transform } = getProperties(nextElement)
      currentElement.style.top = top;
      currentElement.style.left = left;
      currentElement.style.transform = transform;
    } else {
      currentElement.style.top = zeroTop;
      currentElement.style.left = zeroLeft;
      currentElement.style.transform = zeroTransform;
    }
  }
}
function getProperties(element) {
  const top = window
    .getComputedStyle(element, null)
    .getPropertyValue('top')
  const left = window
    .getComputedStyle(element, null)
    .getPropertyValue('left')
  const transform = window
    .getComputedStyle(element, null)
    .getPropertyValue('transform');

  return {
    top,
    left,
    transform
  }
}

//header
let prevScrollpos = window.pageYOffset;
let headerDiv = document.querySelector("header");
let headerBottom = headerDiv.offsetTop + headerDiv.offsetHeight;

function headerScroll() {
  let currentScrollPos = window.pageYOffset;

  if (prevScrollpos > currentScrollPos || currentScrollPos < headerBottom) {
    headerDiv.style.top = "0";
  }
  else {
    headerDiv.style.top = "-100px";
  }

  prevScrollpos = currentScrollPos;
}


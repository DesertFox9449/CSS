// displaying mobile navigation

const header = document.querySelector(`.header`);
const btnNav = document.querySelector(`.btn-mobile-nav`);
const body = document.querySelector(`body`);
const hero = document.querySelector(`.section-hero`);
console.log(hero);

// Set current year
const yearEl = document.querySelector(`.year`);
const currentYear = new Date().getFullYear();
console.log(currentYear);
yearEl.textContent = currentYear;

// Make mobile nav work
let navClickCounter = 0;
btnNav.addEventListener(`click`, function (e) {
  if (navClickCounter % 2 === 0) header.classList.add("nav-open");
  else header.classList.remove("nav-open");
  navClickCounter++;
});

// Smoothscrolling
// Event delegation
body.addEventListener(`click`, function (e) {
  e.preventDefault();
  // check if the class is main-nav-link
  if (
    e.target.classList.contains(`main-nav-link`) ||
    e.target.classList.contains(`btn--hero`)
  ) {
    // Create get DOM element based on
    const goToElement = document.querySelector(
      `${e.target.getAttribute(`href`)}`
    );
    goToElement.scrollIntoView({ behavior: `smooth` });
  }
  if (e.target.classList.contains(`logo`)) {
    body.scrollIntoView({ behavior: `smooth` });
  }
});

// Sticky Navigation

const obsCallback = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    header.classList.add(`header--sticky`);
  } else {
    header.classList.remove(`header--sticky`);
  }
};

const obsOptions = {
  root: null,
  threshold: 0,
  rootMargin: `-${window.getComputedStyle(header).height}`,
};

const observer = new IntersectionObserver(obsCallback, obsOptions);
observer.observe(hero);

console.log(window.getComputedStyle(header).height);
///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

/*
// New
 document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);


  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 4.8rem;
  }
  
  .no-flexbox-gap .list-item:not(:last-child) {
    margin-bottom: 1.6rem;
  }
  
  .no-flexbox-gap .list-icon:not(:last-child) {
    margin-right: 1.6rem;
  }
  
  .no-flexbox-gap .delivered-faces {
    margin-right: 1.6rem;
  }
  
  .no-flexbox-gap .meal-attribute:not(:last-child) {
    margin-bottom: 2rem;
  }
  
  .no-flexbox-gap .meal-icon {
    margin-right: 1.6rem;
  }
  
  .no-flexbox-gap .footer-row div:not(:last-child) {
    margin-right: 6.4rem;
  }
  
  .no-flexbox-gap .social-links li:not(:last-child) {
    margin-right: 2.4rem;
  }
  
  .no-flexbox-gap .footer-nav li:not(:last-child) {
    margin-bottom: 2.4rem;
  }
  
  @media (max-width: 75em) {
    .no-flexbox-gap .main-nav-list li:not(:last-child) {
      margin-right: 3.2rem;
    }
  }
  
  @media (max-width: 59em) {
    .no-flexbox-gap .main-nav-list li:not(:last-child) {
      margin-right: 0;
      margin-bottom: 4.8rem;
    }
  }
  */

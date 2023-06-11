// Slankiojimo logika

function addScrollTo(name) {
  document
    .querySelector(`a[href="#${name}"]`)
    .addEventListener("click", function (event) {
      event.preventDefault();
      let element = document.getElementById(name);

      let rect = element.getBoundingClientRect();
      scrollSmoothly(window.scrollY + rect.top - 80);
    });
}

const arr = ["pagrindinis", "apie", "duk"];
for (let index = 0; index < arr.length; index++) {
  const element = arr[index];
  addScrollTo(element);
}

// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  myFunction();
};

// Get the header
const header = document.getElementById("myHeader");
// Get the offset position of the navbar
const sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

// Sklandžiai slankinti į norimą vietą
function scrollSmoothly(offset) {
  window.scrollTo({
    top: offset,
    behavior: "smooth",
  });
}

// hamburger
const groupButtons = document.querySelector(".groupButtons");
const hamburger = document.querySelector(".hamburger");
const homeButton = document.querySelector(".home-button");

hamburger.addEventListener("click", () => {
  groupButtons.classList.toggle("groupButtons--open");
  hamburger.classList.toggle("hamburger--open");
});

groupButtons.addEventListener("click", () => {
  groupButtons.classList.remove("groupButtons--open");
  hamburger.classList.remove("hamburger--open");
});

homeButton.addEventListener("click", () => {
  groupButtons.classList.remove("groupButtons--open");
  hamburger.classList.remove("hamburger--open");
});

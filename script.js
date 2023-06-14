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

const arr = ["pagrindinis", "apie", "duk", "kontaktai", "main"];
for (let index = 0; index < arr.length; index++) {
  const element = arr[index];
  addScrollTo(element);
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

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

let arr = ["pagrindinis", "apie", "kontaktai", "duk"];
for (let index = 0; index < arr.length; index++) {
  const element = arr[index];
  addScrollTo(element);
}

// Slankinti navigacijos juostą
window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  if (window.pageYOffset > 0) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});

// Sklandžiai slankinti į norimą vietą
function scrollSmoothly(offset) {
  window.scrollTo({
    top: offset,
    behavior: "smooth",
  });
}

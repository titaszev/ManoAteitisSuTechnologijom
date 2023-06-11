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

let arr = ["pagrindinis", "apie", "duk"];
for (let index = 0; index < arr.length; index++) {
  const element = arr[index];
  addScrollTo(element);
}

// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  myFunction();
};

// Get the header
var header = document.getElementById("myHeader");
console.log(header);
// Get the offset position of the navbar
var sticky = header.offsetTop;

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

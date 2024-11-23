var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu = document.getElementById("sidemenu");

function openmenu() {
  sidemenu.style.right = "0";
}

function closemenu() {
  sidemenu.style.right = "-200px";
}

// document.getElementById('about-link').addEventListener('click', function(event) {
//     event.preventDefault();
//     const sectionId = 'about-link'; // Replace 'about' with the actual ID of your section
//   const section = document.getElementById(sectionId);

//   if (section) {
//     window.scrollTo({
//       top: section.offsetTop,
//       behavior: 'instant'
//     });
//   }
// });

const scriptURL =
  "https://script.google.com/macros/s/AKfycbwszOKlDrCsTy9zZVE8FmnmYKnJr5CPKlq6pQ_qnHTUn_XY_do4CC5UBDm6NBhmYW2l/exec";
const form = document.forms["submit-to-google-sheet"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => console.log("Success!", response))
    .catch((error) => console.error("Error!", error.message));
});

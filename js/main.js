const toggle = document.getElementById("toggle");
const yearly = document.querySelectorAll(".annually");
const monthly = document.querySelectorAll(".monthly");

toggle.addEventListener("change", function () {
  if (toggle.checked) {
    yearly.forEach((h1) => (h1.style.display = "none"));
    monthly.forEach((h1) => (h1.style.display = "flex"));
  } else {
    yearly.forEach((h1) => (h1.style.display = "flex"));
    monthly.forEach((h1) => (h1.style.display = "none"));
  }
});

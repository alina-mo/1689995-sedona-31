let button = document.querySelector(".button-search");
let popup = document.querySelector(".poppup");
let adults_decrease = document.querySelector(".button-adults-less");
let adults_increase = document.querySelector(".button-adults-more");
let childs_decrease = document.querySelector(".button-childs-less");
let childs_increase = document.querySelector(".button-childs-more");

button.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.toggle("visually-hidden");
});

adults_increase.addEventListener("click", function(adults) {
  let value = parseInt(document.getElementById("number-of-adults").value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById("number-of-adults").value = value;
});

adults_decrease.addEventListener("click", function(adults) {
  let value = parseInt(document.getElementById("number-of-adults").value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? value = 1 : '';
  value--;
  document.getElementById("number-of-adults").value = value;
});

childs_increase.addEventListener("click", function(childs) {
  let value = parseInt(document.getElementById("number-of-childs").value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById("number-of-childs").value = value;
});

childs_decrease.addEventListener("click", function(childs) {
  let value = parseInt(document.getElementById("number-of-childs").value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? value = 1 : '';
  value--;
  document.getElementById("number-of-childs").value = value;
});




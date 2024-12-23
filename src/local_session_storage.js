// localStorage.setItem("theme", "dark");
// console.log(localStorage.getItem("theme"));
// console.log(localStorage.key(0));
// for (let i = 0; i < localStorage.length; i++) {
//   console.log(localStorage.key(i));
// }

// for (let key in localStorage) {
//   console.log(key, ":", localStorage[key]);
// }

// localStorage.setItem(
//   "location",
//   JSON.stringify({ country: "France", city: "Paris" })
// );
// console.log(localStorage.getItem("location"));
const input = document.querySelector("input");
const button = document.querySelector("button");

const value = localStorage.getItem("value");
if (value) {
  input.value = value;
}

button.addEventListener("click", () => {
  localStorage.setItem("value", input.value);
});

input.addEventListener("input", () => {
  localStorage.setItem("value", input.value);
});

//intercepter les modifications du localStorage
window.addEventListener("storage", (e) => {
  console.log(e.key, e.newValue);
  if (e.key === "value") {
    input.value = e.newValue;
  }
});

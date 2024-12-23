// localStorage.setItem("theme", "dark");
// console.log(localStorage.getItem("theme"));
console.log(localStorage.key(0));
for (let i = 0; i < localStorage.length; i++) {
  console.log(localStorage.key(i));
}

for (let key in localStorage) {
  console.log(key, ":", localStorage[key]);
}

// localStorage.setItem(
//   "location",
//   JSON.stringify({ country: "France", city: "Paris" })
// );
console.log(localStorage.getItem("location"));

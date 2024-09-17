const h1 = document.querySelector(".box");
const inputt = document.querySelector("#inputt");

body.addEventListener("keypress", (e) => {
  console.log(e);
  h1.textContent = e.key;
  h1.style.fontSize = "250px";
  h1.style.color = "rgb(87, 83, 83)";
});

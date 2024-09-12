const btn = document.querySelector("#btn");
const body = document.querySelector("body");
// const card = document.querySelector(".card");

function randomColor() {
  const test = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "F"];
  const colorRandom = [];

  for (let i = 0; i < 6; i++) {
    colorRandom.push(test[Math.floor(Math.random() * test.length)]);
  }
  const finlColor = `#${colorRandom.join("")}`;

  body.style.backgroundColor = finlColor;
}

btn.addEventListener("click", () => {
  randomColor();
});

// const test = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "F"];
// console.log([Math.floor(Math.random() * test.length)]);

// const color = [];

// for (let i = 0; i < 6; i++) {
//   color.push(test[Math.floor(Math.random() * test.length)]);
// }
// console.log(color);

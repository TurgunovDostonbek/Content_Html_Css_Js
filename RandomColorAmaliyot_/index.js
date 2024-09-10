const btn = document.querySelector("#btn");
const body = document.querySelector("body");
// const card = document.querySelector(".card")

function randomColor() {
  const test = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D"];
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

// const card = document.querySelector(".card");
// const loader = document.querySelector(".loader");
// const btn = document.getElementById("btn");

// card.addEventListener("click", () => {
//   btn.classList.add("hidden");
//   loader.classList.remove("add");
//   setInterval(() => {
//     btn.classList.remove("hidden");
//     loader.classList.add("add");
//   }, 2000);
// });

const form = document.getElementById("Form");
const h1 = document.querySelector(".h1");
form.addEventListener("click", (e) => {
  e.preventDefault();
  const input1 = form.input1.value;
  const input2 = form.input2.value;
  const sum = input1 * input2;
  if (sum !== Number) {
    h1.textContent = "Xatooooo";
  } else {
    h1.textContent = sum;
  }

  console.log(input1);
  console.log(input2);
});

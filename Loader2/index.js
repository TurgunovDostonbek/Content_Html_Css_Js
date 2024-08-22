const card = document.querySelector(".card");
const loader = document.querySelector(".loader");
const btn = document.getElementById("btn");

card.addEventListener("click", () => {
  btn.classList.add("hidden");
  loader.classList.remove("add");
  setInterval(() => {
    btn.classList.remove("hidden");
    loader.classList.add("add");
  }, 2000);
});

// function toggleBtn() {}

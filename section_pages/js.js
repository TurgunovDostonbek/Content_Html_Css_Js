let products = [
  {
    id: 1,
    img: "./img/Image-Placeholder (1).png",
    name: "CHAIR",
    model: "Minimal LCD chair",
    skidka: "$180",
    sum: "$250",
  },
  {
    id: 2,
    img: "./img/img_2.png",
    name: "sofa",
    model: "Modern Sofa",
    skidka: "$120",
    sum: "$150",
  },
  {
    id: 3,
    img: "./img/img_3.png",
    name: "sofa",
    model: "Modern Sofa",
    skidka: "$130",
    sum: "$150",
  },
  {
    id: 4,
    img: "./img/img_4.png",
    name: "tabble",
    model: "Wood Coffee Tables",
    skidka: "$100",
    sum: "$120",
  },
  {
    id: 5,
    img: "./img/img_5.png",
    name: "CHAIR",
    model: "Acacia Wood  Chairs",
    skidka: "$100",
    sum: "120",
  },
  {
    id: 6,
    img: "./img/img_6.png",
    name: "Bench",
    model: "Amalia Cowhide Bench",
    skidka: "$130",
    sum: "$150",
  },
  {
    id: 7,
    img: "./img/img_7.png",
    name: "Storage",
    model: "Juno-Hinged  Storage",
    skidka: "$180",
    sum: "$250",
  },
  {
    id: 8,
    img: "./img/img_8.png",
    name: "Furniture",
    model: "Delicia 3 Piece  Room",
    skidka: "$120",
    sum: "$150",
  },
];
// let count = 0;
// const cards = document.querySelector(".cards");

// products.map((item) => {
//   let dv = document.createElement("div");
//   dv.classList.add("card");
//   dv.innerHTML += `
//     <img src= "${item.img}" alt ="" />
//     <p>${item.name}</p>
//     <h2>${item.model}</h2>
//     <p>${item.skidka} <span>${item.sum}</span></p>
//     <div class = "icon" >
//     <i  class="fa-regular fa-heart">
//       <span class = "like">${count}</span>
//     </i>
//     <i class="fa-solid fa-basket-shopping"></i>
//     <i class="fa-solid fa-rotate-right"></i>
//     <i class="fa-regular fa-eye"></i>
//     </div>
//   `;
//   cards.append(dv);
// });

let count = 0;
const cards = document.querySelector(".cards");
const cart = [];

products.map((item) => {
  let dv = document.createElement("div");
  dv.classList.add("card");
  dv.innerHTML += `
    <img src= "${item.img}" alt ="" />
    <p>${item.name}</p>
    <h2>${item.model}</h2>
    <p>${item.skidka} <span>${item.sum}</span></p>
    <div class = "icon" >
    <i class="fa-regular fa-heart">
      <span class = "like">${count}</span>
    </i>
    <i class="fa-solid fa-basket-shopping" onclick="addToCart(${item.id})"></i>
    <i class="fa-solid fa-rotate-right"></i>
    <i class="fa-regular fa-eye"></i>
    </div>
  `;
  cards.append(dv);
});

function addToCart(id) {
  const product = products.find((item) => item.id === id);
  cart.push(product);
  console.log(cart);
}

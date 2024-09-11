let box = document.querySelector(".box_info");
const r = document.getElementById("R");

box.addEventListener("mousedown", (e) => {
  let x = e.pageX;
  let y = e.pageY;
  r.style.top = y + "px";
  r.style.left = x + "px";
  console.log(e);
});

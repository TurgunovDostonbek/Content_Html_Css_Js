const div = document.getElementById("movableDiv");
document.addEventListener("pointermove", moveDiv);

function moveDiv(event) {
	div.style.left = event.clientX + "px";
	div.style.top = event.clientY + "px";
}

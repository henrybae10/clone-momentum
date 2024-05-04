/*const title = document.querySelector("div.hello:first-child h1");

function handle() {
	title.style.color = "blue";
}

title.addEventListener("click", handle);
// mouseenter mouseleave

window.addEventListener("resize", handle);
window.addEventListener("copy", handle);
*/

// <⚠️ DONT DELETE THIS ⚠️>
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/
const superEventHandler = {
	mouseenter: () => {
		h2.style.color = colors[0];
		h2.innerText = "Mouse is here.";
	},
	mouseleave: () => {
		h2.style.color = colors[1];
		h2.innerText = "Mouse is gone.";
	},
	resize: () => {
		h2.style.color = colors[2];
		h2.innerText = "window is resized.";
	},
	clickRight: () => {
		h2.style.color = colors[3];
		h2.innerText = "click right button.";
	},
};

const h2 = document.querySelector("h2");
h2.addEventListener("mouseenter", superEventHandler.mouseenter);
h2.addEventListener("mouseleave", superEventHandler.mouseleave);

window.addEventListener("resize", superEventHandler.resize);
window.addEventListener("contextmenu", superEventHandler.clickRight);

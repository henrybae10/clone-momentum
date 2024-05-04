const clockElement = document.querySelector("#clock");

function getClock() {
	const clock = new Date();
	let hours = clock.getHours().toString().padStart(2, "0");
	let minutes = clock.getMinutes().toString().padStart(2, "0");
	let second = clock.getSeconds().toString().padStart(2, "0");

	clockElement.innerText = `${hours}:${minutes}:${second}`;
}

getClock();
setInterval(getClock, 1000);

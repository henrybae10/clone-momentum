const GUESSED_NUMBER_MESSAGE = "You chose: ";
const MACHINE_NUMBER_MESSAGE = "The machine chose: ";

function getRandomInt(max) {
	console.log(Math.random());
	return Math.floor(Math.random() * max);
}

const playForm = document.querySelector("form");

function onPlaySubmit(event) {
	event.preventDefault();
	const maxNumber = event.target[0].value;
	const machineNumber = getRandomInt(maxNumber);
	const guessedNumber = event.target[1].value;

	const div = document.querySelector(".test");
	const span = document.querySelector("span");
	const h3 = document.querySelector("h3");
	div.classList.remove("hidden");
	if (machineNumber !== parseInt(guessedNumber)) {
		span.innerText = `${GUESSED_NUMBER_MESSAGE}${guessedNumber}, ${MACHINE_NUMBER_MESSAGE}${machineNumber}.`;
		h3.innerText = `You lost!`;
	} else {
		span.innerText = `${GUESSED_NUMBER_MESSAGE}${guessedNumber}, ${MACHINE_NUMBER_MESSAGE}${machineNumber}.`;
		h3.innerText = `You won!`;
	}
}

playForm.addEventListener("submit", onPlaySubmit);

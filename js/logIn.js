const loginForm = document.querySelector(".login-section");
loginForm.addEventListener("submit", handleToDoSubmit);

function handleToDoSubmit(event) {
	event.preventDefault();
	const userInput = document.querySelector("#login-input").value;
	localStorage.setItem("user", userInput);

	const user = document.querySelector(".user");
	user.innerText += ` ${userInput}`;
	switchHidden(true);
}

const logInInfo = localStorage.getItem("user");

function switchHidden(isLogin) {
	const userInfo = document.querySelector(".user-section");
	const loginSection = document.querySelector(".login-section");

	if (isLogin) {
		userInfo.classList.remove("hidden");
		loginSection.classList.add("hidden");
	} else {
		loginSection.classList.remove("hidden");
		userInfo.classList.add("hidden");
	}
}

if (logInInfo) {
	const user = document.querySelector(".user");
	user.innerText += ` ${logInInfo}`;

	switchHidden(true);
} else {
	switchHidden(false);
}

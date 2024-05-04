const weather = document.querySelector(".weather");
const city = document.querySelector(".location");
const API_KEY = "ebc84799d97f9da7539f39d5f5d29dc7";

function onGeoOk(position) {
	const lat = position.coords.latitude;
	const lon = position.coords.longitude;
	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
	fetch(url)
		.then((response) => response.json())
		.then((data) => {
			city.innerText = data.name;
			weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
		});
}
function onGeoError() {
	alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

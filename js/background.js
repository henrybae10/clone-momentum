const backgroundImg = ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg"];
const chosenBackgroundImg =
	backgroundImg[Math.floor(Math.random() * backgroundImg.length)];

const bodyElem = document.body;
bodyElem.style.backgroundImage = `url(img/${chosenBackgroundImg})`;
bodyElem.style.backgroundSize = "100vw 100vh";
bodyElem.style.backgroundRepeat = "no-repeat";

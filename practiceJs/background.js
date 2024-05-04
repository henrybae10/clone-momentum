const colors1 = ["red", "blue", "green"];

const chosenColor = colors1[Math.floor(Math.random() * colors1.length)];

const bgColor = document.createElement("div");

bgColor.style.width = "300px";
bgColor.style.height = "300px";
bgColor.style.backgroundColor = `${chosenColor}`;

document.body.appendChild(bgColor);

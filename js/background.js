const images = [
  "0.jpg",
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
];

const backgroundImage = images[Math.floor(Math.random() * images.length)];

const image = document.createElement("img");
image.src = `images/${backgroundImage}`;
// document.body.prepend(image);
document.body.appendChild(image);

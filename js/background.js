const images = [
  "0.jpg",
  "1.jpg",
  "2.png",
  "3.jpg",
  "4.jpg",
  "5.png",
  "6.png",
  "7.jpg",
  "8.png",
  "9.png",
  "10.jpg",
  "11.jpg",
  "12.jpg",
  "13.png",
  "14.png",
  "15.png",
];

const backgroundImage = images[Math.floor(Math.random() * images.length)];

// const image = document.createElement("img");
// image.src = `images/${backgroundImage}`;
// document.body.appendChild(image);
document.body.style.backgroundImage = `url(./images/${backgroundImage})`;

if (
  backgroundImage === "8.png" ||
  backgroundImage === "5.png" ||
  backgroundImage === "11.jpg" ||
  backgroundImage === "14.png" ||
  backgroundImage === "15.png"
) {
  document.body.style.color = "black";
}

const btn = document.querySelector(".changeBackground");

btn.addEventListener("click", () => {
  location.reload();
});

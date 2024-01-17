let paragraph = document.getElementById("contian");

const picture = [
  "images/images (1).jpeg",
  "images/images (2).jpeg",
  "images/images (3).jpeg",
  "images/images (5).jpeg",
  "images/images (6).jpeg",
  "images/images.jpeg",
  "images/images (4).jpeg",
  "images/CLAcoupeSmallPlate.jpg",
  "images/images (2).jpeg",
];
function del() {
  images.remove();
}

for (let key in picture) {
  var images = document.createElement("img");
  images.setAttribute("src", picture[key]);
  paragraph.appendChild(images);
  images.classList.add("image", "col-4");
  let button = document.querySelector("button");
  //images.classList.add("image", "col-4");
  paragraph.appendChild(button);
}
